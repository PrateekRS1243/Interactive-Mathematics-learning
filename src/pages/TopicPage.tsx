import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();

  const topicData: Record<string, any> = {
    shapes: {
      title: 'Basic Figures',
      icon: '📐',
      color: '#4A90E2',
      content: {
        intro: 'Learn about basic geometric shapes including triangles, quadrilaterals, and circles.',
        sections: [
          {
            title: 'Triangles',
            description: 'A triangle is a polygon with three edges and three vertices.',
            formulas: [
              'Area = ½ × base × height',
              'Perimeter = a + b + c'
            ]
          },
          {
            title: 'Quadrilaterals',
            description: 'A quadrilateral is a polygon with four sides.',
            formulas: [
              'Square: Area = side²',
              'Rectangle: Area = length × width',
              'Parallelogram: Area = base × height'
            ]
          },
          {
            title: 'Circles',
            description: 'A circle is a shape consisting of all points in a plane that are at a given distance from a given point.',
            formulas: [
              'Area = πr²',
              'Circumference = 2πr'
            ]
          }
        ]
      }
    },
    volumes: {
      title: 'Surface Areas & Volumes',
      icon: '🧊',
      color: '#50C878',
      content: {
        intro: 'Explore 3D shapes and learn to calculate their surface areas and volumes.',
        sections: [
          {
            title: 'Cube',
            description: 'A cube has 6 equal square faces.',
            formulas: [
              'Volume = side³',
              'Surface Area = 6 × side²'
            ]
          },
          {
            title: 'Cuboid',
            description: 'A cuboid has rectangular faces.',
            formulas: [
              'Volume = length × width × height',
              'Surface Area = 2(lw + lh + wh)'
            ]
          },
          {
            title: 'Cylinder',
            description: 'A cylinder has two circular bases and a curved surface.',
            formulas: [
              'Volume = πr²h',
              'Surface Area = 2πr(r + h)'
            ]
          },
          {
            title: 'Sphere',
            description: 'A sphere is perfectly round.',
            formulas: [
              'Volume = (4/3)πr³',
              'Surface Area = 4πr²'
            ]
          }
        ]
      }
    },
    algebra: {
      title: 'Algebraic Equations',
      icon: '🔢',
      color: '#FF6B6B',
      content: {
        intro: 'Master linear and quadratic equations.',
        sections: [
          {
            title: 'Linear Equations',
            description: 'Equations of the form ax + b = 0',
            formulas: [
              'Solution: x = -b/a',
              'Example: 2x + 4 = 0 → x = -2'
            ]
          },
          {
            title: 'Quadratic Equations',
            description: 'Equations of the form ax² + bx + c = 0',
            formulas: [
              'x = (-b ± √(b² - 4ac)) / 2a',
              'Discriminant: D = b² - 4ac'
            ]
          }
        ]
      }
    },
    theorems: {
      title: 'Theorems of Triangles',
      icon: '📊',
      color: '#FFB347',
      content: {
        intro: 'Learn fundamental theorems about triangles.',
        sections: [
          {
            title: 'Pythagoras Theorem',
            description: 'In a right-angled triangle, the square of the hypotenuse equals the sum of squares of the other two sides.',
            formulas: [
              'a² + b² = c²',
              'where c is the hypotenuse'
            ]
          },
          {
            title: 'Similar Triangles',
            description: 'Triangles with the same shape but different sizes.',
            formulas: [
              'Corresponding sides are proportional',
              'Corresponding angles are equal'
            ]
          }
        ]
      }
    },
    axioms: {
      title: 'Axioms',
      icon: '📏',
      color: '#9B59B6',
      content: {
        intro: "Study Euclid's fundamental axioms and postulates.",
        sections: [
          {
            title: 'Euclid\'s Axioms',
            description: 'Self-evident truths in geometry.',
            formulas: [
              'Things equal to the same thing are equal to one another',
              'If equals are added to equals, the wholes are equal',
              'The whole is greater than the part'
            ]
          }
        ]
      }
    },
    arithmetic: {
      title: 'Basic Arithmetic',
      icon: '➕',
      color: '#1ABC9C',
      content: {
        intro: 'Practice basic arithmetic operations.',
        sections: [
          {
            title: 'Number Operations',
            description: 'Fundamental mathematical operations.',
            formulas: [
              'Addition (+)',
              'Subtraction (-)',
              'Multiplication (×)',
              'Division (÷)'
            ]
          }
        ]
      }
    }
  };

  const topic = topicData[topicId || ''];

  if (!topic) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Topic Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <ArrowLeft size={24} />
            <span className="font-semibold">Back to Topics</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8" style={{ borderTop: `4px solid ${topic.color}` }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{topic.icon}</span>
            <h1 className="text-4xl font-bold text-gray-800">{topic.title}</h1>
          </div>
          <p className="text-xl text-gray-600 mb-8">{topic.content.intro}</p>

          {topic.content.sections.map((section: any, index: number) => (
            <div key={index} className="mb-8 pb-8 border-b last:border-b-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{section.title}</h2>
              <p className="text-gray-700 mb-4">{section.description}</p>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Key Formulas:</h3>
                <ul className="space-y-2">
                  {section.formulas.map((formula: string, fIndex: number) => (
                    <li key={fIndex} className="text-gray-700 font-mono bg-white px-3 py-2 rounded">
                      {formula}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Practice Makes Perfect!</h3>
          <p className="mb-4">Try solving problems related to this topic to master the concepts.</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Start Practice Problems
          </button>
        </div>
      </main>
    </div>
  );
}

export default TopicPage;
