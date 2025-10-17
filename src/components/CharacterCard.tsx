import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MessageSquare } from "lucide-react";
import { Character } from "@/lib/types";

interface CharacterCardProps {
  character: Character;
  onVote: () => void;
  onOpenComments: () => void;
}

export const CharacterCard = ({ character, onVote, onOpenComments }: CharacterCardProps) => {
  const getAuraColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      purple: "bg-purple-500",
      cyan: "bg-cyan-500",
      emerald: "bg-emerald-500",
      amber: "bg-amber-500",
      rose: "bg-rose-500",
      indigo: "bg-indigo-500",
    };
    return colorMap[color] || "bg-purple-500";
  };
  return (
    <Card className="overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 animate-fade-in">
      <div className="relative">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {character.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{character.votes.toLocaleString()} votes</span>
            <span>•</span>
            <span>{character.comments} comments</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Type Distribution */}
        <div className="space-y-2">
          {character.topTypes.map((typeData) => (
            <div key={typeData.type} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <Badge variant="outline" className="font-mono">
                  {typeData.type}
                </Badge>
                <span className="text-muted-foreground">
                  {typeData.percentage}%
                </span>
              </div>
              <Progress value={typeData.percentage} className="h-2" />
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button onClick={onVote} className="flex-1" variant="default">
            Oyla
          </Button>
          <Button variant="outline" className="gap-2" onClick={onOpenComments}>
            <MessageSquare className="h-4 w-4" />
            Yorum
          </Button>
        </div>

        {/* Top Comment */}
        {character.topComment && character.topCommenter && character.topCommenterType && (
          <div className="pt-4 border-t border-border">
            <div className="flex items-start gap-3">
              <div className={`h-8 w-8 rounded-full ${getAuraColorClass("purple")} flex-shrink-0`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">
                    @{character.topCommenter}
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    {character.topCommenterType}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {character.topComment}
                </p>
                <button
                  onClick={onOpenComments}
                  className="text-xs text-primary hover:underline mt-1"
                >
                  Tartışmayı gör
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
