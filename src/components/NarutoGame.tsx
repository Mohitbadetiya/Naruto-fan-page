import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NarutoGame = () => {
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is Naruto's signature jutsu?",
      options: ["Chidori", "Shadow Clone", "Rasengan", "Fireball"],
      correct: 2
    },
    {
      question: "Who is Naruto's rival?",
      options: ["Kakashi", "Sasuke", "Gaara", "Neji"],
      correct: 1
    },
    {
      question: "What village is Naruto from?",
      options: ["Sand Village", "Mist Village", "Leaf Village", "Cloud Village"],
      correct: 2
    },
    {
      question: "What is sealed inside Naruto?",
      options: ["One-Tail", "Nine-Tails", "Eight-Tails", "Seven-Tails"],
      correct: 1
    },
    {
      question: "Who taught Naruto the Rasengan?",
      options: ["Kakashi", "Jiraiya", "Iruka", "Sasuke"],
      correct: 1
    }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
    return () => clearTimeout(timer);
  }, [gameActive, timeLeft]);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setCurrentQuestion(0);
    setTimeLeft(15);
    setShowResult(false);
  };

  const handleAnswer = (selectedIndex: number) => {
    if (selectedIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(15);
    } else {
      setGameActive(false);
      setShowResult(true);
    }
  };

  const resetGame = () => {
    setGameActive(false);
    setShowResult(false);
    setScore(0);
    setCurrentQuestion(0);
    setTimeLeft(15);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Naruto Quiz Game
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge of the ninja world! How well do you know Naruto and his friends?
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">
                {!gameActive && !showResult && "Ready to Test Your Ninja Knowledge?"}
                {gameActive && `Question ${currentQuestion + 1} of ${questions.length}`}
                {showResult && "Quiz Complete!"}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              {!gameActive && !showResult && (
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Answer questions about Naruto characters, jutsu, and the ninja world!
                  </p>
                  <Button 
                    size="lg" 
                    onClick={startGame}
                    className="text-lg px-8 py-6"
                  >
                    Start Quiz
                  </Button>
                </div>
              )}

              {gameActive && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">Score: {score}</span>
                    <span className={`font-semibold ${timeLeft <= 5 ? 'text-destructive' : 'text-accent'}`}>
                      Time: {timeLeft}s
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {questions[currentQuestion].question}
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {questions[currentQuestion].options.map((option, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="text-left justify-start p-4 h-auto hover:bg-primary/10 hover:border-primary"
                          onClick={() => handleAnswer(index)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {showResult && (
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-4">
                    {score >= 4 ? "🥇" : score >= 3 ? "🥈" : score >= 2 ? "🥉" : "📚"}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    You scored {score} out of {questions.length}!
                  </h3>
                  <p className="text-muted-foreground">
                    {score >= 4 && "Hokage level! You're a true ninja master!"}
                    {score === 3 && "Jounin level! Excellent ninja knowledge!"}
                    {score === 2 && "Chunin level! Good but keep studying!"}
                    {score <= 1 && "Genin level! Time to rewatch the series!"}
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button onClick={startGame}>Play Again</Button>
                    <Button variant="outline" onClick={resetGame}>Back to Start</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NarutoGame;