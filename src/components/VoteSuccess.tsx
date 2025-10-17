import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, MessageSquare } from "lucide-react";

interface VoteSuccessProps {
  xpEarned: number;
  isMinority: boolean;
  minorityPercentage?: number;
  onComment: () => void;
  onClose: () => void;
}

export const VoteSuccess = ({
  xpEarned,
  isMinority,
  minorityPercentage,
  onComment,
  onClose,
}: VoteSuccessProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div className={`space-y-4 transition-all duration-500 ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
      {/* XP Animation */}
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-primary mb-3 animate-float">
          <Sparkles className="h-8 w-8 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Vote Kaydedildi!</h3>
        <div className="flex items-center justify-center gap-2 text-primary">
          <TrendingUp className="h-5 w-5" />
          <span className="text-xl font-bold">+{xpEarned} Analyst XP</span>
        </div>
      </Card>

      {/* Minority Opinion */}
      {isMinority && minorityPercentage && (
        <Card className="p-4 bg-amber-500/10 border-amber-500/20 animate-slide-up">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-lg">🔥</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold mb-1">Azınlık Görüşündesin!</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Oyun sadece %{minorityPercentage} ile aynı görüşte. Argümanını paylaş ve +25 bonus XP kazan!
              </p>
              <Button
                size="sm"
                variant="outline"
                onClick={onComment}
                className="gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                Argümanımı Paylaş
              </Button>
            </div>
          </div>
        </Card>
      )}

      <Button onClick={onClose} variant="outline" className="w-full">
        Devam Et
      </Button>
    </div>
  );
};
