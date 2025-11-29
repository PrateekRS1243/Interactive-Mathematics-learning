import { Link } from 'react-router-dom';
import { NumberMatchGame, QuickMathQuiz, PatternBuilder } from '../components/MathGames';

function Home() {
  const topics = [
    {
      id: 'shapes',
      icon: '📐',
      titleEn: 'Basic Figures',
      titleKn: 'ಆಧಾರಭೂತ ಆಕೃತಿಗಳು',
      descEn: 'Triangles, Quadrilaterals, Circles',
      descKn: 'ತ್ರಿಭುಜಗಳು, ಚತುರ್ಭುಜಗಳು, ವೃತ್ತಗಳು',
      color: '#4A90E2'
    },
    {
      id: 'volumes',
      icon: '🧊',
      titleEn: 'Surface Areas & Volumes',
      titleKn: 'ಪೃಶ್ಠಫಲ & ಆಯತನ',
      descEn: '3D Shapes & Calculations',
      descKn: '3D ಆಕೃತಿಗಳು & ಲೆಕ್ಕಗಳು',
      color: '#50C878'
    },
    {
      id: 'algebra',
      icon: '🔢',
      titleEn: 'Algebraic Equations',
      titleKn: 'ಬೀಜಗಣಿತ ಸಮೀಕರಣಗಳು',
      descEn: 'Linear & Quadratic Equations',
      descKn: 'ರೇಖೀಯ & ವರ್ಗ ಸಮೀಕರಣಗಳು',
      color: '#FF6B6B'
    },
    {
      id: 'theorems',
      icon: '📊',
      titleEn: 'Theorems of Triangles',
      titleKn: 'ತ್ರಿಭುಜಗಳ ಸಿದ್ಧಾಂತಗಳು',
      descEn: 'Pythagoras & Similar Triangles',
      descKn: 'ಪೈಥಾಗೋರಸ್ & ಸಮಾನ ತ್ರಿಭುಜಗಳು',
      color: '#FFB347'
    },
    {
      id: 'axioms',
      icon: '📏',
      titleEn: 'Axioms',
      titleKn: 'ಸ್ವೀಕಾರ್ಯಗಳು',
      descEn: "Euclid's Axioms & Postulates",
      descKn: 'ಯೂಕ್ಲಿಡ್‌ನ ಸ್ವೀಕಾರ್ಯಗಳು',
      color: '#9B59B6'
    },
    {
      id: 'arithmetic',
      icon: '➕',
      titleEn: 'Basic Arithmetic',
      titleKn: 'ಮೂಲ ಗಣಿತ',
      descEn: 'Interactive Number Operations',
      descKn: 'ಸಂವಾದಾತ್ಮಕ ಸಂಖ್ಯಾ ಕ್ರಿಯೆಗಳು',
      color: '#1ABC9C'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <span>📐</span>
              <span>Interactive Maths</span>
            </h1>
            <button className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition">
              Learn in Kannada
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Interactive Maths Learning
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            10th Standard (Karnataka State Board - Kannada Medium)
          </p>
          <div className="flex justify-center gap-4 text-4xl">
            <span>📱</span>
            <span>✏️</span>
            <span>🎯</span>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            🎮 Practice with Fun Games
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <NumberMatchGame />
            <QuickMathQuiz />
            <PatternBuilder />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              to={`/topic/${topic.id}`}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer"
              style={{ borderTop: `4px solid ${topic.color}` }}
            >
              <div className="text-5xl mb-4">{topic.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {topic.titleEn}
              </h3>
              <p className="text-gray-600">{topic.descEn}</p>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Home;
