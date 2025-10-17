import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, Send } from "lucide-react";
import { Character, Comment } from "@/lib/types";
import { useUserProfile } from "@/hooks/useUserProfile";
import { toast } from "sonner";

interface CommentThreadProps {
  isOpen: boolean;
  onClose: () => void;
  character: Character;
}

const MOCK_COMMENTS: Comment[] = [
  {
    id: "1",
    userId: "user1",
    username: "NiNavigator",
    userType: "INTJ",
    userAura: "purple",
    content: "Kesinlikle INTJ - Te dominant davranışlar gösteriyor ama core Ni. Uzun vadeli stratejik düşünme şekli çok belirgin.",
    likes: 42,
    timestamp: "2h ago",
    replies: [
      {
        id: "1-1",
        userId: "user2",
        username: "TeLogician",
        userType: "ENTJ",
        userAura: "indigo",
        content: "ENTJ olabilir. Te-Ni sıralaması daha dominant görünüyor.",
        likes: 15,
        timestamp: "1h ago",
      },
    ],
  },
  {
    id: "2",
    userId: "user3",
    username: "CognitiveExplorer",
    userType: "INTP",
    userAura: "emerald",
    content: "Ne-Ti kombinasyonu var gibi ama kesin değilim. Daha fazla veri lazım.",
    likes: 23,
    timestamp: "4h ago",
  },
];

export const CommentThread = ({ isOpen, onClose, character }: CommentThreadProps) => {
  const { profile, incrementComments, addXP } = useUserProfile();
  const [newComment, setNewComment] = useState("");
  const [comments] = useState<Comment[]>(MOCK_COMMENTS);

  const handleSubmit = () => {
    if (!newComment.trim()) return;
    
    incrementComments();
    addXP("social", 10);
    
    toast.success("Yorum eklendi!", {
      description: "+10 Social XP kazandın",
    });
    
    setNewComment("");
  };

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

  const CommentItem = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => (
    <div className={`flex gap-3 ${isReply ? "ml-12 mt-3" : ""}`}>
      <div className={`h-10 w-10 rounded-full ${getAuraColorClass(comment.userAura)} flex-shrink-0`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium">@{comment.username}</span>
          <Badge variant="secondary" className="text-xs">
            {comment.userType}
          </Badge>
          <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
        </div>
        <p className="text-sm mb-2">{comment.content}</p>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
            <ThumbsUp className="h-3 w-3" />
            {comment.likes}
          </Button>
          {!isReply && (
            <Button variant="ghost" size="sm" className="h-7 text-xs">
              Reply
            </Button>
          )}
        </div>
        {comment.replies?.map((reply) => (
          <CommentItem key={reply.id} comment={reply} isReply />
        ))}
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <img
              src={character.image}
              alt={character.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span>{character.name} - Tartışma</span>
          </DialogTitle>
        </DialogHeader>

        {/* Comments */}
        <div className="flex-1 overflow-y-auto space-y-4 py-4">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>

        {/* New Comment */}
        {profile && (
          <div className="border-t pt-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className={`h-10 w-10 rounded-full ${getAuraColorClass(profile.auraColor)} flex-shrink-0`} />
              <div className="flex-1 space-y-2">
                <Textarea
                  placeholder="Analizini paylaş..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-[80px] resize-none"
                />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    @{profile.username} • {profile.mbtiType}
                  </span>
                  <Button
                    onClick={handleSubmit}
                    disabled={!newComment.trim()}
                    size="sm"
                    className="gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Gönder
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
