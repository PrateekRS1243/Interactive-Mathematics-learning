// Comprehensive Mathematics Question Bank
// 100+ questions covering Arithmetic, Shapes, Volumes, Theorems, Algebra, and Axioms

const questionBank = [
  // ARITHMETIC QUESTIONS (25 questions)
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "easy",
    q: "What is 45 + 78?",
    a: "123",
    wrong: ["113", "133", "121"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "easy",
    q: "What is 156 - 89?",
    a: "67",
    wrong: ["77", "57", "65"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "medium",
    q: "What is 24 × 15?",
    a: "360",
    wrong: ["340", "380", "350"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "medium",
    q: "What is 144 ÷ 12?",
    a: "12",
    wrong: ["14", "10", "16"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "medium",
    q: "Solve: 5 + 3 × 4",
    a: "17",
    wrong: ["32", "20", "14"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "hard",
    q: "Solve: (8 + 2) × 5 - 12 ÷ 3",
    a: "46",
    wrong: ["44", "50", "42"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "medium",
    q: "What is 3/4 + 1/2?",
    a: "5/4",
    wrong: ["4/6", "1", "7/8"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "medium",
    q: "What is 2/3 × 3/4?",
    a: "1/2",
    wrong: ["5/7", "6/12", "2/3"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "easy",
    q: "Convert 0.75 to a fraction in simplest form",
    a: "3/4",
    wrong: ["7/10", "75/100", "15/20"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "easy",
    q: "Convert 1/4 to decimal",
    a: "0.25",
    wrong: ["0.4", "0.5", "0.2"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "medium",
    q: "What is 20% of 150?",
    a: "30",
    wrong: ["25", "35", "40"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "medium",
    q: "What is 45 as a percentage of 90?",
    a: "50%",
    wrong: ["45%", "60%", "55%"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "hard",
    q: "A shirt costs $80 after a 20% discount. What was the original price?",
    a: "$100",
    wrong: ["$96", "$90", "$88"]
  },
  {
    topic: "Arithmetic",
    type: "concept",
    difficulty: "easy",
    q: "In the order of operations (PEMDAS/BODMAS), which comes first?",
    a: "Parentheses/Brackets",
    wrong: ["Multiplication", "Addition", "Division"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "medium",
    q: "What is 7/8 - 3/8?",
    a: "1/2",
    wrong: ["4/8", "1/4", "5/8"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "hard",
    q: "Solve: 2.5 × 4.8",
    a: "12",
    wrong: ["11.5", "12.5", "10.8"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "medium",
    q: "What is 15% of 200?",
    a: "30",
    wrong: ["25", "35", "40"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "easy",
    q: "What is 250 ÷ 5?",
    a: "50",
    wrong: ["45", "55", "60"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "medium",
    q: "Simplify: 36/48",
    a: "3/4",
    wrong: ["6/8", "9/12", "18/24"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "hard",
    q: "What is 3.6 ÷ 0.4?",
    a: "9",
    wrong: ["8", "10", "0.9"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "medium",
    q: "Calculate: 1/3 + 1/6",
    a: "1/2",
    wrong: ["2/9", "1/4", "2/6"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "easy",
    q: "What is 12 × 8?",
    a: "96",
    wrong: ["88", "104", "92"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "hard",
    q: "Solve: 120 ÷ (3 + 2)",
    a: "24",
    wrong: ["40", "25", "20"]
  },
  {
    topic: "Arithmetic",
    type: "concept",
    difficulty: "easy",
    q: "What type of number is 0.5?",
    a: "Decimal",
    wrong: ["Whole number", "Integer", "Natural number"]
  },
  {
    topic: "Arithmetic",
    type: "calculation",
    difficulty: "medium",
    q: "What is 75% of 80?",
    a: "60",
    wrong: ["55", "65", "70"]
  },

  // SHAPES (2D GEOMETRY) QUESTIONS (20 questions)
  {
    topic: "Shapes",
    type: "calculation",
    difficulty: "medium",
    q: "What is the area of a circle with radius 7 cm? (Use π = 22/7)",
    a: "154 cm²",
    wrong: ["149 cm²", "168 cm²", "140 cm²"]
  },
  {
    topic: "Shapes",
    type: "calculation",
    difficulty: "medium",
    q: "What is the circumference of a circle with radius 14 cm? (Use π = 22/7)",
    a: "88 cm",
    wrong: ["84 cm", "92 cm", "96 cm"]
  },
  {
    topic: "Shapes",
    type: "calculation",
    difficulty: "easy",
    q: "What is the area of a square with side 9 cm?",
    a: "81 cm²",
    wrong: ["36 cm²", "72 cm²", "90 cm²"]
  },
  {
    topic: "Shapes",
    type: "calculation",
    difficulty: "easy",
    q: "What is the perimeter of a square with side 12 cm?",
    a: "48 cm",
    wrong: ["36 cm", "52 cm", "60 cm"]
  },
  {
    topic: "Shapes",
    type: "calculation",
    difficulty: "medium",
    q: "What is the area of a rectangle with length 15 cm and width 8 cm?",
    a: "120 cm²",
    wrong: ["115 cm²", "130 cm²", "110 cm²"]
  },
  {
    topic: "Shapes",
    type: "calculation",
    difficulty: "easy",
    q: "What is the perimeter of a rectangle with length 20 cm and width 12 cm?",
    a: "64 cm",
    wrong: ["60 cm", "68 cm", "72 cm"]
  },
  {
    topic: "Shapes",
    type: "calculation",
    difficulty: "medium",
    q: "What is the area of a triangle with base 10 cm and height 6 cm?",
    a: "30 cm²",
    wrong: ["60 cm²", "16 cm²", "35 cm²"]
  },
  {
    topic: "Shapes",
    type: "formula",
    difficulty: "easy",
    q: "What is the formula for the area of a circle?",
    a: "πr²",
    wrong: ["2πr", "πd", "πr"]
  },
  {
    topic: "Shapes",
    type: "formula",
    difficulty: "easy",
    q: "What is the formula for the circumference of a circle?",
    a: "2πr",
    wrong: ["πr²", "πd²", "r²"]
  },
  {
    topic: "Shapes",
    type: "concept",
    difficulty: "easy",
    q: "What is the sum of angles in a triangle?",
    a: "180°",
    wrong: ["360°", "90°", "270°"]
  },
  {
    topic: "Shapes",
    type: "calculation",
    difficulty: "hard",
    q: "A triangle has angles 45° and 65°. What is the third angle?",
    a: "70°",
    wrong: ["75°", "60°", "80°"]
  },
  {
    topic: "Shapes",
    type: "concept",
    difficulty: "medium",
    q: "A triangle with all sides equal is called:",
    a: "Equilateral",
    wrong: ["Isosceles", "Scalene", "Right-angled"]
  },
  {
    topic: "Shapes",
    type: "concept",
    difficulty: "medium",
    q: "A triangle with two equal sides is called:",
    a: "Isosceles",
    wrong: ["Equilateral", "Scalene", "Obtuse"]
  },
  {
    topic: "Shapes",
    type: "calculation",
    difficulty: "medium",
    q: "What is the area of a circle with diameter 10 cm? (Use π = 3.14)",
    a: "78.5 cm²",
    wrong: ["31.4 cm²", "100 cm²", "62.8 cm²"]
  },
  {
    topic: "Shapes",
    type: "calculation",
    difficulty: "hard",
    q: "Find the perimeter of a triangle with sides 5 cm, 12 cm, and 13 cm",
    a: "30 cm",
    wrong: ["28 cm", "32 cm", "35 cm"]
  },
  {
    topic: "Shapes",
    type: "calculation",
    difficulty: "easy",
    q: "What is the area of a square with side 15 cm?",
    a: "225 cm²",
    wrong: ["200 cm²", "240 cm²", "60 cm²"]
  },
  {
    topic: "Shapes",
    type: "concept",
    difficulty: "easy",
    q: "How many sides does a square have?",
    a: "4",
    wrong: ["3", "5", "6"]
  },
  {
    topic: "Shapes",
    type: "calculation",
    difficulty: "medium",
    q: "A rectangle has area 96 cm² and width 8 cm. What is its length?",
    a: "12 cm",
    wrong: ["10 cm", "14 cm", "16 cm"]
  },
  {
    topic: "Shapes",
    type: "concept",
    difficulty: "medium",
    q: "All angles in a rectangle are:",
    a: "90°",
    wrong: ["60°", "120°", "180°"]
  },
  {
    topic: "Shapes",
    type: "calculation",
    difficulty: "hard",
    q: "What is the area of a triangle with base 16 cm and height 9 cm?",
    a: "72 cm²",
    wrong: ["144 cm²", "68 cm²", "80 cm²"]
  },

  // VOLUMES (3D GEOMETRY) QUESTIONS (20 questions)
  {
    topic: "Volumes",
    type: "calculation",
    difficulty: "easy",
    q: "What is the volume of a cube with side 5 cm?",
    a: "125 cm³",
    wrong: ["100 cm³", "150 cm³", "75 cm³"]
  },
  {
    topic: "Volumes",
    type: "calculation",
    difficulty: "easy",
    q: "What is the surface area of a cube with side 4 cm?",
    a: "96 cm²",
    wrong: ["64 cm²", "84 cm²", "108 cm²"]
  },
  {
    topic: "Volumes",
    type: "formula",
    difficulty: "easy",
    q: "What is the formula for the volume of a cube?",
    a: "a³",
    wrong: ["6a²", "a²", "3a"]
  },
  {
    topic: "Volumes",
    type: "formula",
    difficulty: "easy",
    q: "What is the formula for the surface area of a cube?",
    a: "6a²",
    wrong: ["a³", "4a²", "a²"]
  },
  {
    topic: "Volumes",
    type: "calculation",
    difficulty: "medium",
    q: "What is the volume of a cylinder with radius 7 cm and height 10 cm? (Use π = 22/7)",
    a: "1540 cm³",
    wrong: ["1500 cm³", "1400 cm³", "1600 cm³"]
  },
  {
    topic: "Volumes",
    type: "formula",
    difficulty: "medium",
    q: "What is the formula for the volume of a cylinder?",
    a: "πr²h",
    wrong: ["2πrh", "πr²", "πrh"]
  },
  {
    topic: "Volumes",
    type: "calculation",
    difficulty: "hard",
    q: "What is the surface area of a cylinder with radius 3 cm and height 5 cm? (Use π = 3.14)",
    a: "150.72 cm²",
    wrong: ["141.3 cm²", "160 cm²", "135.5 cm²"]
  },
  {
    topic: "Volumes",
    type: "formula",
    difficulty: "medium",
    q: "What is the formula for the surface area of a cylinder?",
    a: "2πr(r + h)",
    wrong: ["πr²h", "2πrh", "πr(r + h)"]
  },
  {
    topic: "Volumes",
    type: "calculation",
    difficulty: "medium",
    q: "What is the volume of a sphere with radius 3 cm? (Use π = 3.14)",
    a: "113.04 cm³",
    wrong: ["100 cm³", "125 cm³", "95 cm³"]
  },
  {
    topic: "Volumes",
    type: "formula",
    difficulty: "medium",
    q: "What is the formula for the volume of a sphere?",
    a: "(4/3)πr³",
    wrong: ["(2/3)πr³", "πr³", "(3/4)πr³"]
  },
  {
    topic: "Volumes",
    type: "calculation",
    difficulty: "hard",
    q: "What is the surface area of a sphere with radius 7 cm? (Use π = 22/7)",
    a: "616 cm²",
    wrong: ["594 cm²", "638 cm²", "572 cm²"]
  },
  {
    topic: "Volumes",
    type: "formula",
    difficulty: "medium",
    q: "What is the formula for the surface area of a sphere?",
    a: "4πr²",
    wrong: ["2πr²", "πr²", "3πr²"]
  },
  {
    topic: "Volumes",
    type: "calculation",
    difficulty: "hard",
    q: "What is the volume of a cone with radius 4 cm and height 9 cm? (Use π = 3.14)",
    a: "150.72 cm³",
    wrong: ["141.3 cm³", "160 cm³", "135.5 cm³"]
  },
  {
    topic: "Volumes",
    type: "formula",
    difficulty: "medium",
    q: "What is the formula for the volume of a cone?",
    a: "(1/3)πr²h",
    wrong: ["πr²h", "(1/2)πr²h", "(2/3)πr²h"]
  },
  {
    topic: "Volumes",
    type: "calculation",
    difficulty: "hard",
    q: "What is the surface area of a cone with radius 5 cm and slant height 13 cm? (Use π = 3.14)",
    a: "282.6 cm²",
    wrong: ["265 cm²", "300 cm²", "250 cm²"]
  },
  {
    topic: "Volumes",
    type: "formula",
    difficulty: "hard",
    q: "What is the formula for the curved surface area of a cone?",
    a: "πrl",
    wrong: ["πr²", "2πrl", "πr²h"]
  },
  {
    topic: "Volumes",
    type: "calculation",
    difficulty: "medium",
    q: "What is the volume of a cube with side 8 cm?",
    a: "512 cm³",
    wrong: ["484 cm³", "540 cm³", "480 cm³"]
  },
  {
    topic: "Volumes",
    type: "concept",
    difficulty: "easy",
    q: "How many faces does a cube have?",
    a: "6",
    wrong: ["4", "8", "12"]
  },
  {
    topic: "Volumes",
    type: "calculation",
    difficulty: "easy",
    q: "What is the surface area of a cube with side 6 cm?",
    a: "216 cm²",
    wrong: ["196 cm²", "236 cm²", "180 cm²"]
  },
  {
    topic: "Volumes",
    type: "concept",
    difficulty: "medium",
    q: "A cylinder has how many curved surfaces?",
    a: "1",
    wrong: ["2", "3", "0"]
  },

  // THEOREMS (Pythagoras) QUESTIONS (15 questions)
  {
    topic: "Theorems",
    type: "formula",
    difficulty: "easy",
    q: "What is the Pythagorean theorem?",
    a: "a² + b² = c²",
    wrong: ["a + b = c", "a² - b² = c²", "ab = c²"]
  },
  {
    topic: "Theorems",
    type: "calculation",
    difficulty: "medium",
    q: "In a right triangle, if a = 3 and b = 4, what is c?",
    a: "5",
    wrong: ["6", "7", "4.5"]
  },
  {
    topic: "Theorems",
    type: "calculation",
    difficulty: "medium",
    q: "In a right triangle, if a = 5 and b = 12, what is c?",
    a: "13",
    wrong: ["17", "11", "14"]
  },
  {
    topic: "Theorems",
    type: "calculation",
    difficulty: "hard",
    q: "In a right triangle, if a = 8 and b = 15, what is c?",
    a: "17",
    wrong: ["19", "16", "18"]
  },
  {
    topic: "Theorems",
    type: "calculation",
    difficulty: "medium",
    q: "In a right triangle, if c = 10 and a = 6, what is b?",
    a: "8",
    wrong: ["7", "9", "4"]
  },
  {
    topic: "Theorems",
    type: "calculation",
    difficulty: "hard",
    q: "In a right triangle, if c = 13 and a = 5, what is b?",
    a: "12",
    wrong: ["11", "10", "13"]
  },
  {
    topic: "Theorems",
    type: "concept",
    difficulty: "easy",
    q: "The Pythagorean theorem applies to which type of triangle?",
    a: "Right-angled",
    wrong: ["Equilateral", "Isosceles", "Scalene"]
  },
  {
    topic: "Theorems",
    type: "concept",
    difficulty: "medium",
    q: "In the Pythagorean theorem a² + b² = c², what does 'c' represent?",
    a: "Hypotenuse",
    wrong: ["Base", "Height", "Perpendicular"]
  },
  {
    topic: "Theorems",
    type: "calculation",
    difficulty: "easy",
    q: "Which set of numbers forms a Pythagorean triplet?",
    a: "3, 4, 5",
    wrong: ["2, 3, 4", "1, 2, 3", "4, 5, 6"]
  },
  {
    topic: "Theorems",
    type: "calculation",
    difficulty: "medium",
    q: "Which of these is a Pythagorean triplet?",
    a: "5, 12, 13",
    wrong: ["5, 10, 15", "6, 8, 9", "7, 9, 11"]
  },
  {
    topic: "Theorems",
    type: "calculation",
    difficulty: "hard",
    q: "In a right triangle, if a = 7 and b = 24, what is c?",
    a: "25",
    wrong: ["26", "23", "27"]
  },
  {
    topic: "Theorems",
    type: "calculation",
    difficulty: "hard",
    q: "In a right triangle, if c = 25 and a = 7, what is b?",
    a: "24",
    wrong: ["23", "22", "25"]
  },
  {
    topic: "Theorems",
    type: "application",
    difficulty: "hard",
    q: "A ladder 10m long reaches a window 8m high. How far is the base of the ladder from the wall?",
    a: "6 m",
    wrong: ["7 m", "5 m", "4 m"]
  },
  {
    topic: "Theorems",
    type: "calculation",
    difficulty: "medium",
    q: "In a right triangle, if a = 9 and b = 12, what is c?",
    a: "15",
    wrong: ["16", "14", "13"]
  },
  {
    topic: "Theorems",
    type: "concept",
    difficulty: "medium",
    q: "The Pythagorean theorem was discovered by:",
    a: "Pythagoras",
    wrong: ["Euclid", "Archimedes", "Newton"]
  },

  // ALGEBRA QUESTIONS (20 questions)
  {
    topic: "Algebra",
    type: "solve",
    difficulty: "easy",
    q: "Solve for x: x + 5 = 12",
    a: "7",
    wrong: ["6", "8", "17"]
  },
  {
    topic: "Algebra",
    type: "solve",
    difficulty: "easy",
    q: "Solve for x: x - 8 = 15",
    a: "23",
    wrong: ["7", "22", "24"]
  },
  {
    topic: "Algebra",
    type: "solve",
    difficulty: "medium",
    q: "Solve for x: 3x = 21",
    a: "7",
    wrong: ["6", "8", "24"]
  },
  {
    topic: "Algebra",
    type: "solve",
    difficulty: "medium",
    q: "Solve for x: 2x + 5 = 17",
    a: "6",
    wrong: ["5", "7", "11"]
  },
  {
    topic: "Algebra",
    type: "solve",
    difficulty: "medium",
    q: "Solve for x: 4x - 3 = 13",
    a: "4",
    wrong: ["3", "5", "2.5"]
  },
  {
    topic: "Algebra",
    type: "solve",
    difficulty: "hard",
    q: "Solve for x: 5x + 7 = 3x + 19",
    a: "6",
    wrong: ["5", "7", "8"]
  },
  {
    topic: "Algebra",
    type: "solve",
    difficulty: "hard",
    q: "Solve for x: 2(x + 3) = 18",
    a: "6",
    wrong: ["7", "5", "9"]
  },
  {
    topic: "Algebra",
    type: "simplify",
    difficulty: "medium",
    q: "Simplify: 3x + 5x",
    a: "8x",
    wrong: ["8x²", "15x", "3x"]
  },
  {
    topic: "Algebra",
    type: "simplify",
    difficulty: "medium",
    q: "Simplify: 7x - 2x",
    a: "5x",
    wrong: ["5", "9x", "14x"]
  },
  {
    topic: "Algebra",
    type: "simplify",
    difficulty: "hard",
    q: "Simplify: 4(2x + 3)",
    a: "8x + 12",
    wrong: ["8x + 3", "6x + 12", "8x + 7"]
  },
  {
    topic: "Algebra",
    type: "concept",
    difficulty: "easy",
    q: "What is a variable in algebra?",
    a: "A letter representing an unknown value",
    wrong: ["A constant number", "An operation", "An equation"]
  },
  {
    topic: "Algebra",
    type: "solve",
    difficulty: "hard",
    q: "Solve for x: x/4 = 8",
    a: "32",
    wrong: ["2", "12", "24"]
  },
  {
    topic: "Algebra",
    type: "solve",
    difficulty: "medium",
    q: "Solve for x: 3x - 5 = 10",
    a: "5",
    wrong: ["4", "6", "15"]
  },
  {
    topic: "Algebra",
    type: "simplify",
    difficulty: "medium",
    q: "Simplify: 2x × 3x",
    a: "6x²",
    wrong: ["5x²", "6x", "5x"]
  },
  {
    topic: "Algebra",
    type: "concept",
    difficulty: "medium",
    q: "What is the coefficient in 5x?",
    a: "5",
    wrong: ["x", "5x", "1"]
  },
  {
    topic: "Algebra",
    type: "solve",
    difficulty: "hard",
    q: "Solve for x: 7x - 3 = 4x + 12",
    a: "5",
    wrong: ["4", "6", "3"]
  },
  {
    topic: "Algebra",
    type: "simplify",
    difficulty: "hard",
    q: "Expand: (x + 3)(x + 2)",
    a: "x² + 5x + 6",
    wrong: ["x² + 6", "2x + 5", "x² + 5x"]
  },
  {
    topic: "Algebra",
    type: "concept",
    difficulty: "easy",
    q: "What is the degree of the expression 3x²?",
    a: "2",
    wrong: ["3", "1", "0"]
  },
  {
    topic: "Algebra",
    type: "solve",
    difficulty: "easy",
    q: "Solve for x: x/3 = 4",
    a: "12",
    wrong: ["7", "1.33", "16"]
  },
  {
    topic: "Algebra",
    type: "simplify",
    difficulty: "medium",
    q: "Simplify: 10x ÷ 2",
    a: "5x",
    wrong: ["8x", "5", "20x"]
  },

  // AXIOMS QUESTIONS (10 questions)
  {
    topic: "Axioms",
    type: "concept",
    difficulty: "medium",
    q: "Who is known as the 'Father of Geometry'?",
    a: "Euclid",
    wrong: ["Pythagoras", "Archimedes", "Aristotle"]
  },
  {
    topic: "Axioms",
    type: "concept",
    difficulty: "medium",
    q: "According to Euclid's first axiom, things which are equal to the same thing are:",
    a: "Equal to one another",
    wrong: ["Different from each other", "Greater than one another", "Less than one another"]
  },
  {
    topic: "Axioms",
    type: "concept",
    difficulty: "medium",
    q: "Euclid's second axiom states: If equals are added to equals, the wholes are:",
    a: "Equal",
    wrong: ["Unequal", "Greater", "Lesser"]
  },
  {
    topic: "Axioms",
    type: "concept",
    difficulty: "hard",
    q: "According to Euclid's third axiom, if equals are subtracted from equals, the remainders are:",
    a: "Equal",
    wrong: ["Unequal", "Greater", "Zero"]
  },
  {
    topic: "Axioms",
    type: "concept",
    difficulty: "medium",
    q: "Euclid's axiom: Things which coincide with one another are:",
    a: "Equal to one another",
    wrong: ["Different from one another", "Similar", "Parallel"]
  },
  {
    topic: "Axioms",
    type: "concept",
    difficulty: "hard",
    q: "According to Euclid, the whole is:",
    a: "Greater than the part",
    wrong: ["Equal to the part", "Less than the part", "Twice the part"]
  },
  {
    topic: "Axioms",
    type: "concept",
    difficulty: "easy",
    q: "An axiom is:",
    a: "A statement accepted as true without proof",
    wrong: ["A statement requiring proof", "A formula", "A theorem"]
  },
  {
    topic: "Axioms",
    type: "concept",
    difficulty: "medium",
    q: "A unique line can be drawn through:",
    a: "Two distinct points",
    wrong: ["One point", "Three points", "Infinite points"]
  },
  {
    topic: "Axioms",
    type: "concept",
    difficulty: "hard",
    q: "Euclid's famous book on geometry is called:",
    a: "Elements",
    wrong: ["Principles", "Geometry", "Mathematics"]
  },
  {
    topic: "Axioms",
    type: "concept",
    difficulty: "medium",
    q: "According to Euclidean geometry, parallel lines:",
    a: "Never meet",
    wrong: ["Always meet", "Meet at infinity", "Cross each other"]
  }
];

// Additional THEORY questions to increase variety and reduce repetition
questionBank.push(
  // Shapes properties
  {
    topic: "Shapes",
    type: "property",
    difficulty: "easy",
    q: "A square has:",
    a: "Four equal sides and four right angles",
    wrong: ["Two equal sides", "All angles acute", "Three right angles"]
  },
  {
    topic: "Shapes",
    type: "property",
    difficulty: "medium",
    q: "A rectangle is a:",
    a: "Parallelogram with right angles",
    wrong: ["Triangle with equal sides", "Quadrilateral with unequal angles", "Trapezium with one pair of parallel sides"]
  },
  {
    topic: "Shapes",
    type: "concept",
    difficulty: "easy",
    q: "Circumference refers to:",
    a: "Boundary length of a circle",
    wrong: ["Area of a circle", "Diameter of a circle", "Radius of a circle"]
  },
  {
    topic: "Shapes",
    type: "concept",
    difficulty: "medium",
    q: "In any triangle, the sum of interior angles is:",
    a: "180°",
    wrong: ["360°", "90°", "120°"]
  },
  {
    topic: "Shapes",
    type: "definition",
    difficulty: "medium",
    q: "An equilateral triangle has:",
    a: "All sides equal and all angles 60°",
    wrong: ["Two sides equal", "One right angle", "Angles 30°, 60°, 90°"]
  },

  // Volumes & surface areas concepts
  {
    topic: "Volumes",
    type: "concept",
    difficulty: "easy",
    q: "Volume measures:",
    a: "Space occupied by a 3D object",
    wrong: ["Boundary length of an object", "Outer area only", "Only base area"]
  },
  {
    topic: "Volumes",
    type: "property",
    difficulty: "medium",
    q: "For a cylinder, lateral surface area refers to:",
    a: "Curved surface excluding top and bottom",
    wrong: ["Top and bottom only", "Total surface area", "Base area only"]
  },
  {
    topic: "Volumes",
    type: "definition",
    difficulty: "medium",
    q: "The net of a cube consists of:",
    a: "Six equal squares",
    wrong: ["Four rectangles and two squares", "Six rectangles", "Eight triangles"]
  },
  {
    topic: "Volumes",
    type: "concept",
    difficulty: "hard",
    q: "For a sphere, surface area is proportional to:",
    a: "r²",
    wrong: ["r", "r³", "1/r"]
  },

  // Theorems concepts
  {
    topic: "Theorems",
    type: "concept",
    difficulty: "easy",
    q: "Pythagoras theorem applies to:",
    a: "Right-angled triangles",
    wrong: ["All triangles", "Equilateral triangles", "Isosceles triangles only"]
  },
  {
    topic: "Theorems",
    type: "property",
    difficulty: "medium",
    q: "In a right triangle, the hypotenuse is:",
    a: "Opposite the right angle and longest side",
    wrong: ["Adjacent to right angle", "Shortest side", "Equal to other sides"]
  },
  {
    topic: "Theorems",
    type: "concept",
    difficulty: "hard",
    q: "If a² + b² = c² and c = 13, possible integer pair (a,b) is:",
    a: "(5,12)",
    wrong: ["(6,8)", "(7,7)", "(9,9)"]
  },

  // Algebra concepts
  {
    topic: "Algebra",
    type: "definition",
    difficulty: "easy",
    q: "A linear equation in one variable has:",
    a: "Highest power of variable = 1",
    wrong: ["Power 2", "Power 3", "No variable"]
  },
  {
    topic: "Algebra",
    type: "concept",
    difficulty: "medium",
    q: "To solve 2x + 7 = 15, we:",
    a: "Subtract 7, then divide by 2",
    wrong: ["Add 7, divide by 2", "Subtract 2, then 7", "Multiply by 2"]
  },
  {
    topic: "Algebra",
    type: "property",
    difficulty: "medium",
    q: "Distributive property states:",
    a: "a(b + c) = ab + ac",
    wrong: ["a + (b + c) = ab + ac", "a(bc) = ab + c", "a/b + c = (a+c)/b"]
  },
  {
    topic: "Algebra",
    type: "concept",
    difficulty: "hard",
    q: "Standard quadratic form is:",
    a: "ax² + bx + c = 0",
    wrong: ["ax + b = 0", "x² = a", "a² + b² = c²"]
  },

  // Axioms concepts
  {
    topic: "Axioms",
    type: "definition",
    difficulty: "easy",
    q: "A postulate is:",
    a: "A geometrical assumption accepted without proof",
    wrong: ["A proven theorem", "A measurement unit", "A calculation method"]
  },
  {
    topic: "Axioms",
    type: "concept",
    difficulty: "medium",
    q: "Euclid's fifth postulate concerns:",
    a: "Parallel lines",
    wrong: ["Congruent triangles", "Circle chords", "Area of polygons"]
  },
  {
    topic: "Axioms",
    type: "property",
    difficulty: "hard",
    q: "If equals are subtracted from equals, results are:",
    a: "Equal",
    wrong: ["Unequal", "Zero", "Undefined"]
  }
);

// Utility function to get random questions
function getRandomQuestions(count = 20, topic = null) {
  let filteredQuestions = topic 
    ? questionBank.filter(q => q.topic === topic)
    : questionBank;
  
  const shuffled = filteredQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Utility function to get questions by difficulty
function getQuestionsByDifficulty(difficulty, count = 20) {
  const filtered = questionBank.filter(q => q.difficulty === difficulty);
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questionBank, getRandomQuestions, getQuestionsByDifficulty };
}
