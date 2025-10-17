import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MBTIType } from "@/lib/types";

const MBTI_GRID: MBTIType[][] = [
  ["INTJ", "INTP", "ENTJ", "ENTP"],
  ["INFJ", "INFP", "ENFJ", "ENFP"],
  ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
  ["ISTP", "ISFP", "ESTP", "ESFP"],
];

const TYPE_DESCRIPTIONS: Record<string, string> = {
  INTJ: "The Architect - Strategic, independent, visionary",
  INTP: "The Logician - Innovative, curious, analytical",
  ENTJ: "The Commander - Bold, decisive, strategic",
  ENTP: "The Debater - Quick-witted, innovative, enthusiastic",
  INFJ: "The Advocate - Idealistic, insightful, principled",
  INFP: "The Mediator - Creative, passionate, empathetic",
  ENFJ: "The Protagonist - Charismatic, inspiring, altruistic",
  ENFP: "The Campaigner - Enthusiastic, creative, spontaneous",
  ISTJ: "The Logistician - Practical, reliable, organized",
  ISFJ: "The Defender - Warm, responsible, devoted",
  ESTJ: "The Executive - Organized, decisive, traditional",
  ESFJ: "The Consul - Caring, social, cooperative",
  ISTP: "The Virtuoso - Bold, practical, experimental",
  ISFP: "The Adventurer - Flexible, charming, artistic",
  ESTP: "The Entrepreneur - Energetic, perceptive, bold",
  ESFP: "The Entertainer - Spontaneous, enthusiastic, playful",
};

interface TypeSelectionProps {
  onSelect: (type: MBTIType) => void;
}

export const TypeSelection = ({ onSelect }: TypeSelectionProps) => {
  const [selected, setSelected] = useState<MBTIType | null>(null);
  const [hoveredType, setHoveredType] = useState<MBTIType | null>(null);

  const handleSelect = (type: MBTIType) => {
    setSelected(type);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Tipini Seç</h2>
        <p className="text-muted-foreground">
          MBTI tipini biliyorsan direkt seçebilirsin
        </p>
      </div>

      <div className="space-y-3">
        {MBTI_GRID.map((row, i) => (
          <div key={i} className="grid grid-cols-4 gap-3">
            {row.map((type) => (
              <Button
                key={type}
                variant={selected === type ? "default" : "outline"}
                size="lg"
                onClick={() => handleSelect(type)}
                onMouseEnter={() => setHoveredType(type)}
                onMouseLeave={() => setHoveredType(null)}
                className="font-mono h-16 text-lg transition-all hover:scale-105"
              >
                {type}
              </Button>
            ))}
          </div>
        ))}
      </div>

      {(selected || hoveredType) && (
        <Card className="p-4 bg-muted/50 border-primary/20 animate-slide-up">
          <p className="text-sm text-center">
            <span className="font-bold">{selected || hoveredType}</span>
            {" - "}
            {TYPE_DESCRIPTIONS[selected || hoveredType || "INTJ"]}
          </p>
        </Card>
      )}

      {selected && (
        <Button
          size="lg"
          onClick={() => onSelect(selected)}
          className="w-full"
        >
          Devam Et
        </Button>
      )}
    </div>
  );
};
