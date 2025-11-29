import { useState, useEffect } from 'react';

export function NumberMatchGame() {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState({ num1: 5, num2: 3, answer: 8 });
  const [options, setOptions] = useState<number[]>([]);
  const [feedback, setFeedback] = useState('');

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const answer = num1 + num2;
    const wrong1 = answer + Math.floor(Math.random() * 5) + 1;
    const wrong2 = answer - Math.floor(Math.random() * 5) - 1;
    const allOptions = [answer, wrong1, wrong2].sort(() => Math.random() - 0.5);
    
    setQuestion({ num1, num2, answer });
    setOptions(allOptions);
    setFeedback('');
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleAnswer = (selected: number) => {
    if (selected === question.answer) {
      setScore(score + 10);
      setFeedback('✓ Correct! +10 points');
      setTimeout(generateQuestion, 1000);
    } else {
      setFeedback('✗ Try again!');
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">🎯 Number Match</h3>
        <div className="bg-white/20 px-4 py-2 rounded-lg font-bold">Score: {score}</div>
      </div>
      
      <div className="bg-white/10 rounded-lg p-6 mb-4 text-center">
        <div className="text-4xl font-bold mb-4">
          {question.num1} + {question.num2} = ?
        </div>
        <div className="grid grid-cols-3 gap-3">
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(opt)}
              className="bg-white text-blue-600 hover:bg-blue-100 font-bold text-2xl py-4 rounded-lg transition transform hover:scale-105"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      
      {feedback && (
        <div className={`text-center font-bold text-lg ${feedback.includes('✓') ? 'text-green-300' : 'text-red-300'}`}>
          {feedback}
        </div>
      )}
    </div>
  );
}

export function QuickMathQuiz() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState({ text: '5 × 3', correct: 15 });

  const operations = [
    { op: '+', fn: (a: number, b: number) => a + b },
    { op: '-', fn: (a: number, b: number) => a - b },
    { op: '×', fn: (a: number, b: number) => a * b }
  ];

  const generateQuestion = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const operation = operations[Math.floor(Math.random() * operations.length)];
    setQuestion({
      text: `${a} ${operation.op} ${b}`,
      correct: operation.fn(a, b)
    });
    setAnswer('');
  };

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
    }
  }, [isPlaying, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(true);
    generateQuestion();
  };

  const checkAnswer = () => {
    if (parseInt(answer) === question.correct) {
      setScore(score + 5);
      generateQuestion();
    } else {
      setAnswer('');
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl p-6 text-white shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">⚡ Quick Math</h3>
        <div className="flex gap-2">
          <div className="bg-white/20 px-4 py-2 rounded-lg font-bold">⏱️ {timeLeft}s</div>
          <div className="bg-white/20 px-4 py-2 rounded-lg font-bold">Score: {score}</div>
        </div>
      </div>

      {!isPlaying ? (
        <div className="bg-white/10 rounded-lg p-8 text-center">
          <p className="mb-4 text-lg">Solve as many problems as you can in 30 seconds!</p>
          <button
            onClick={startGame}
            className="bg-white text-green-600 hover:bg-green-100 font-bold text-xl px-8 py-3 rounded-lg transition transform hover:scale-105"
          >
            Start Game
          </button>
        </div>
      ) : (
        <div className="bg-white/10 rounded-lg p-6">
          <div className="text-4xl font-bold text-center mb-4">{question.text} = ?</div>
          <div className="flex gap-2">
            <input
              type="number"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
              className="flex-1 px-4 py-3 text-2xl text-center text-gray-800 rounded-lg font-bold"
              placeholder="?"
              autoFocus
            />
            <button
              onClick={checkAnswer}
              className="bg-white text-green-600 hover:bg-green-100 font-bold px-6 rounded-lg transition"
            >
              ✓
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function PatternBuilder() {
  const [score, setScore] = useState(0);
  const [pattern, setPattern] = useState<number[]>([2, 4, 6]);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const generatePattern = () => {
    const start = Math.floor(Math.random() * 5) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    const newPattern = [start, start + step, start + step * 2];
    setPattern(newPattern);
    setAnswer('');
    setFeedback('');
  };

  useEffect(() => {
    generatePattern();
  }, []);

  const checkAnswer = () => {
    const correctAnswer = pattern[2] + (pattern[1] - pattern[0]);
    if (parseInt(answer) === correctAnswer) {
      setScore(score + 15);
      setFeedback('🎉 Perfect! +15 points');
      setTimeout(generatePattern, 1500);
    } else {
      setFeedback('❌ Not quite! Try again');
      setAnswer('');
    }
  };

  return (
    <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl p-6 text-white shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">🧩 Pattern Builder</h3>
        <div className="bg-white/20 px-4 py-2 rounded-lg font-bold">Score: {score}</div>
      </div>

      <div className="bg-white/10 rounded-lg p-6 mb-4">
        <p className="text-center mb-4 text-lg">What comes next in the pattern?</p>
        <div className="flex justify-center items-center gap-3 mb-4">
          {pattern.map((num, idx) => (
            <div key={idx} className="bg-white text-orange-600 w-16 h-16 flex items-center justify-center rounded-lg font-bold text-2xl shadow-lg">
              {num}
            </div>
          ))}
          <div className="text-3xl">→</div>
          <div className="bg-white/30 w-16 h-16 flex items-center justify-center rounded-lg font-bold text-2xl border-2 border-white border-dashed">
            ?
          </div>
        </div>

        <div className="flex gap-2">
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
            className="flex-1 px-4 py-3 text-2xl text-center text-gray-800 rounded-lg font-bold"
            placeholder="?"
          />
          <button
            onClick={checkAnswer}
            className="bg-white text-orange-600 hover:bg-orange-100 font-bold px-6 rounded-lg transition"
          >
            Check
          </button>
        </div>
      </div>

      {feedback && (
        <div className={`text-center font-bold text-lg ${feedback.includes('🎉') ? 'text-green-300' : 'text-yellow-300'}`}>
          {feedback}
        </div>
      )}
    </div>
  );
}
