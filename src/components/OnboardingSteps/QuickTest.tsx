import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MBTIType } from "@/lib/types";

const QUESTIONS = [
  {
    id: 1,
    text: "Sosyal etkinliklerde nasıl enerji kazanırsın?",
    options: [
      { text: "İnsanlarla konuşarak, etkileşimde bulunarak", score: "E" },
      { text: "Daha az kişiyle derin sohbetler ederek", score: "I" },
    ],
  },
  {
    id: 2,
    text: "Bilgiyi nasıl işlersin?",
    options: [
      { text: "Somut gerçekler ve detaylara odaklanırım", score: "S" },
      { text: "Soyut fikirler ve örüntülere bakarım", score: "N" },
    ],
  },
  {
    id: 3,
    text: "Karar verirken neye öncelik verirsin?",
    options: [
      { text: "Mantık, objektif analiz", score: "T" },
      { text: "İnsanlar, değerler, uyum", score: "F" },
    ],
  },
  {
    id: 4,
    text: "Yaşam tarzın nasıl?",
    options: [
      { text: "Planlı, organize, yapılandırılmış", score: "J" },
      { text: "Esnek, spontane, açık uçlu", score: "P" },
    ],
  },
  {
    id: 5,
    text: "Problemlere nasıl yaklaşırsın?",
    options: [
      { text: "Adım adım, sistematik çözümler", score: "J" },
      { text: "Yaratıcı, alternatif yollar denerim", score: "P" },
    ],
  },
];

interface QuickTestProps {
  onComplete: (type: MBTIType) => void;
}

export const QuickTest = ({ onComplete }: QuickTestProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (score: string) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate MBTI type
      const type = calculateType(newAnswers);
      onComplete(type);
    }
  };

  const calculateType = (scores: string[]): MBTIType => {
    // Simple scoring logic
    const eCount = scores.filter((s) => s === "E").length;
    const iCount = scores.filter((s) => s === "I").length;
    const sCount = scores.filter((s) => s === "S").length;
    const nCount = scores.filter((s) => s === "N").length;
    const tCount = scores.filter((s) => s === "T").length;
    const fCount = scores.filter((s) => s === "F").length;
    const jCount = scores.filter((s) => s === "J").length;
    const pCount = scores.filter((s) => s === "P").length;

    const type =
      (eCount >= iCount ? "E" : "I") +
      (nCount >= sCount ? "N" : "S") +
      (tCount >= fCount ? "T" : "F") +
      (jCount >= pCount ? "J" : "P");

    return type as MBTIType;
  };

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Soru {currentQuestion + 1} / {QUESTIONS.length}
          </span>
          <span className="font-medium text-primary">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-6 border-primary/20 bg-gradient-to-br from-card to-primary/5">
        <h3 className="text-xl font-bold mb-6 text-center">
          {QUESTIONS[currentQuestion].text}
        </h3>

        <div className="space-y-3">
          {QUESTIONS[currentQuestion].options.map((option, i) => (
            <Button
              key={i}
              variant="outline"
              size="lg"
              onClick={() => handleAnswer(option.score)}
              className="w-full h-auto py-4 text-left justify-start hover:border-primary hover:bg-primary/10 transition-all"
            >
              <span className="flex-1">{option.text}</span>
            </Button>
          ))}
        </div>
      </Card>

      {currentQuestion > 0 && (
        <Button
          variant="ghost"
          onClick={() => {
            setCurrentQuestion(currentQuestion - 1);
            setAnswers(answers.slice(0, -1));
          }}
          className="w-full"
        >
          ← Geri
        </Button>
      )}
    </div>
  );
};
