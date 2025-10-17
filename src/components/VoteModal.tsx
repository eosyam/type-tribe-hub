import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MBTIType } from "@/lib/types";
import { VoteSuccess } from "@/components/VoteSuccess";
import { useUserProfile } from "@/hooks/useUserProfile";

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
    topTypes: Array<{ type: MBTIType; percentage: number }>;
  };
  onOpenComments?: () => void;
}

export const VoteModal = ({ isOpen, onClose, character, onOpenComments }: VoteModalProps) => {
  const { incrementVotes, addXP } = useUserProfile();
  const [selectedType, setSelectedType] = useState<MBTIType | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMinority, setIsMinority] = useState(false);
  const [minorityPercentage, setMinorityPercentage] = useState(0);

  const handleVote = () => {
    if (!selectedType) return;

    // Check if minority opinion
    const selectedTypeData = character.topTypes.find((t) => t.type === selectedType);
    const isMinorityVote = !selectedTypeData || selectedTypeData.percentage < 30;
    
    setIsMinority(isMinorityVote);
    setMinorityPercentage(selectedTypeData?.percentage || 5);

    // Add XP
    incrementVotes();
    addXP("analyst", 15);

    setShowSuccess(true);
  };

  const handleClose = () => {
    setSelectedType(null);
    setShowSuccess(false);
    setIsMinority(false);
    onClose();
  };

  const handleComment = () => {
    handleClose();
    onOpenComments?.();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!showSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">
                {character.name}'in tipi ne?
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
                <p className="text-sm text-muted-foreground">MBTI Tipi Seç:</p>
                {MBTI_TYPES.map((row, i) => (
                  <div key={i} className="grid grid-cols-4 gap-2">
                    {row.map((type) => (
                      <Button
                        key={type}
                        variant={selectedType === type ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedType(type as MBTIType)}
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
                Oyla
              </Button>
            </div>
          </>
        ) : (
          <VoteSuccess
            xpEarned={15}
            isMinority={isMinority}
            minorityPercentage={minorityPercentage}
            onComment={handleComment}
            onClose={handleClose}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
