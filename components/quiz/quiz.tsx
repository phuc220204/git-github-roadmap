"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

export interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

interface QuizProps {
  title: string
  description: string
  questions: QuizQuestion[]
}

export function Quiz({ title, description, questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null))

  const handleOptionSelect = (value: string) => {
    if (!isAnswered) {
      setSelectedOption(Number.parseInt(value))
    }
  }

  const handleCheckAnswer = () => {
    if (selectedOption === null) return

    setIsAnswered(true)
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedOption
    setAnswers(newAnswers)

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setIsAnswered(false)
    } else {
      setShowResults(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setShowResults(false)
    setAnswers(Array(questions.length).fill(null))
  }

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100

  if (showResults) {
    return (
      <Card className="w-full border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-xl sm:text-2xl">Kết quả bài kiểm tra</CardTitle>
          <CardDescription>
            Bạn đã hoàn thành bài kiểm tra {title} với số điểm {score}/{questions.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center py-4 sm:py-6">
            <Trophy className="h-12 w-12 sm:h-16 sm:w-16 text-yellow-500 mb-3 sm:mb-4" />
            <div className="text-2xl sm:text-3xl font-bold">
              {score}/{questions.length}
            </div>
            <div className="text-base sm:text-lg text-muted-foreground mt-2 text-center px-4">
              {score === questions.length
                ? "Tuyệt vời! Bạn đã trả lời đúng tất cả các câu hỏi."
                : score >= questions.length / 2
                  ? "Tốt lắm! Bạn đã nắm được hầu hết các khái niệm."
                  : "Hãy xem lại bài học để hiểu rõ hơn nhé!"}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Chi tiết câu trả lời:</h3>
            {questions.map((q, index) => (
              <div key={index} className="border rounded-lg p-3 sm:p-4">
                <div className="flex items-start">
                  {answers[index] === q.correctAnswer ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-medium text-sm sm:text-base">
                      Câu hỏi {index + 1}: {q.question}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Câu trả lời của bạn: {answers[index] !== null ? q.options[answers[index]] : "Không trả lời"}
                    </p>
                    <p className="text-xs sm:text-sm text-green-600 dark:text-green-400 mt-1">
                      Đáp án đúng: {q.options[q.correctAnswer]}
                    </p>
                    {q.explanation && (
                      <p className="text-xs sm:text-sm mt-2 bg-blue-50 dark:bg-slate-800 p-2 rounded">
                        {q.explanation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleRestart} className="w-full">
            <RotateCcw className="mr-2 h-4 w-4" /> Làm lại bài kiểm tra
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full border-primary/20">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
          <span className="text-sm font-medium">
            Câu {currentQuestion + 1}/{questions.length}
          </span>
        </div>
        <CardDescription>{description}</CardDescription>
        <Progress value={progressPercentage} className="h-2 mt-2" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-base sm:text-lg font-medium">{questions[currentQuestion].question}</div>
        <RadioGroup value={selectedOption?.toString()} onValueChange={handleOptionSelect}>
          {questions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center space-x-2 border rounded-lg p-3 cursor-pointer transition-colors quiz-option touch-target",
                isAnswered &&
                  index === questions[currentQuestion].correctAnswer &&
                  "bg-green-50 border-green-200 dark:bg-green-900/30 dark:border-green-800",
                isAnswered &&
                  selectedOption === index &&
                  index !== questions[currentQuestion].correctAnswer &&
                  "bg-red-50 border-red-200 dark:bg-red-900/30 dark:border-red-800",
                !isAnswered && "hover:bg-secondary",
              )}
            >
              <RadioGroupItem
                value={index.toString()}
                id={`option-${index}`}
                disabled={isAnswered}
                className="h-5 w-5"
              />
              <Label
                htmlFor={`option-${index}`}
                className={cn(
                  "cursor-pointer w-full text-sm sm:text-base",
                  isAnswered &&
                    index === questions[currentQuestion].correctAnswer &&
                    "text-green-700 dark:text-green-400 font-medium",
                  isAnswered &&
                    selectedOption === index &&
                    index !== questions[currentQuestion].correctAnswer &&
                    "text-red-700 dark:text-red-400 font-medium",
                )}
              >
                {option}
              </Label>
              {isAnswered && index === questions[currentQuestion].correctAnswer && (
                <CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0" />
              )}
              {isAnswered && selectedOption === index && index !== questions[currentQuestion].correctAnswer && (
                <XCircle className="h-5 w-5 text-red-500 dark:text-red-400 flex-shrink-0" />
              )}
            </div>
          ))}
        </RadioGroup>

        {isAnswered && questions[currentQuestion].explanation && (
          <div className="bg-blue-50 dark:bg-slate-800 p-3 rounded-lg text-xs sm:text-sm">
            <p className="font-medium text-blue-700 dark:text-blue-400">Giải thích:</p>
            <p>{questions[currentQuestion].explanation}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {!isAnswered ? (
          <Button onClick={handleCheckAnswer} disabled={selectedOption === null} className="w-full h-10">
            Kiểm tra
          </Button>
        ) : (
          <Button onClick={handleNextQuestion} className="w-full h-10">
            {currentQuestion < questions.length - 1 ? "Câu hỏi tiếp theo" : "Xem kết quả"}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
