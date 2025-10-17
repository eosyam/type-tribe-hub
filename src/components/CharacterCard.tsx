import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MessageSquare, ThumbsUp } from "lucide-react";

interface CharacterCardProps {
  character: {
    id: number;
    name: string;
    image: string;
    topTypes: Array<{ type: string; percentage: number }>;
    votes: number;
    comments: number;
    topComment: string;
    topCommenter: string;
    topCommenterType: string;
  };
  onVote: () => void;
}

export const CharacterCard = ({ character, onVote }: CharacterCardProps) => {
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
            Vote
          </Button>
          <Button variant="outline" className="gap-2">
            <MessageSquare className="h-4 w-4" />
            Comment
          </Button>
        </div>

        {/* Top Comment */}
        {character.topComment && (
          <div className="pt-4 border-t border-border">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-primary flex-shrink-0" />
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
                <button className="text-xs text-primary hover:underline mt-1">
                  View thread
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
