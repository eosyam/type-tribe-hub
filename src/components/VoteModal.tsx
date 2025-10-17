import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const MBTI_TYPES = [
  ["INTJ", "INTP", "ENTJ", "ENTP"],
  ["INFJ", "INFP", "ENFJ", "ENFP"],
  ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
  ["ISTP", "ISFP", "ESTP", "ESFP"],
];

interface VoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  character: {
    name: string;
    image: string;
  };
}

export const VoteModal = ({ isOpen, onClose, character }: VoteModalProps) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleVote = () => {
    if (!selectedType) return;
    
    toast.success("Vote submitted!", {
      description: `You voted ${selectedType} for ${character.name}`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">
            What's {character.name}'s type?
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Character Preview */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <img
              src={character.image}
              alt={character.name}
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="font-medium">{character.name}</span>
          </div>

          {/* MBTI Grid */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Select MBTI Type:</p>
            {MBTI_TYPES.map((row, i) => (
              <div key={i} className="grid grid-cols-4 gap-2">
                {row.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className="font-mono"
                  >
                    {type}
                  </Button>
                ))}
              </div>
            ))}
          </div>

          {/* Submit */}
          <Button
            onClick={handleVote}
            disabled={!selectedType}
            className="w-full"
          >
            Submit Vote
          </Button>

          {selectedType && (
            <p className="text-xs text-center text-muted-foreground">
              Your vote will be counted and you'll earn Analyst XP!
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
