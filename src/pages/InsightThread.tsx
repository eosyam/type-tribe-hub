import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Heart, MessageSquare, Share2, Sparkles } from "lucide-react";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useToast } from "@/hooks/use-toast";

interface Reply {
  id: number;
  author: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
  likes: number;
  isLiked?: boolean;
}

const MOCK_THREAD = {
  id: 1,
  title: "INTJ vs ENTJ: Leadership style farklılıkları",
  content: "Her iki tip de liderlik konusunda güçlü ama yaklaşımları çok farklı. INTJ'ler daha stratejik ve uzun vadeli planlama yaparken, ENTJ'ler daha hızlı karar alıp execute ediyor. Sizce hangisi daha etkili?\n\nBenim gözlemlerime göre:\n- INTJ: Perfectionist, detail-oriented, risk-averse\n- ENTJ: Action-oriented, delegation master, risk-taker\n\nHer ikisinin de güçlü yanları var ama context'e göre değişiyor effectiveness.",
  author: "TypeAnalyst",
  authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=TypeAnalyst",
  createdAt: "2 saat önce",
  tags: ["INTJ", "ENTJ", "Leadership"],
};

const MOCK_REPLIES: Reply[] = [
  {
    id: 1,
    author: "MindMaster",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MindMaster",
    content: "INTJ olarak söyleyebilirim ki, leadership style'ım daha collaborative. ENTJ arkadaşlarım daha directive oluyor. Ama ikisi de context'e göre adapt edebiliyor.",
    createdAt: "1 saat önce",
    likes: 12,
    isLiked: false,
  },
  {
    id: 2,
    author: "StrategicThinker",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=StrategicThinker",
    content: "ENTJ perspective: Bence INTJ'ler over-think ediyor bazen. Leadership'te hızlı karar almak kritik. Ama long-term vision'da INTJ'lerin avantajı var.",
    createdAt: "45 dakika önce",
    likes: 8,
    isLiked: true,
  },
  {
    id: 3,
    author: "CognitiveCoach",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CognitiveCoach",
    content: "İkisi de Te dominant ama Ni vs Se auxiliary farkı büyük. INTJ'nin Ni'si daha future-focused, ENTJ'nin Se'si daha present-moment awareness getiriyor.",
    createdAt: "30 dakika önce",
    likes: 15,
    isLiked: false,
  },
];

const InsightThread = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { profile } = useUserProfile();
  const { toast } = useToast();
  const [replies, setReplies] = useState(MOCK_REPLIES);
  const [newReply, setNewReply] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLike = (replyId: number) => {
    setReplies(replies.map(reply => 
      reply.id === replyId 
        ? { ...reply, isLiked: !reply.isLiked, likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1 }
        : reply
    ));
  };

  const handleSubmitReply = async () => {
    if (!newReply.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const reply: Reply = {
      id: replies.length + 1,
      author: profile?.username || "Anonymous",
      authorAvatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${profile?.username}`,
      content: newReply,
      createdAt: "Az önce",
      likes: 0,
      isLiked: false,
    };

    setReplies([...replies, reply]);
    setNewReply("");
    setIsSubmitting(false);
    
    toast({
      title: "Yanıt gönderildi!",
      description: "+10 XP kazandınız",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate("/")}
              className="hover:opacity-80 transition-opacity"
            >
              <Logo />
            </button>

            <div className="flex items-center gap-3">
              {profile && (
                <Badge variant="secondary" className="gap-1 hidden sm:flex">
                  <Sparkles className="h-3 w-3" />
                  {profile.xp} XP
                </Badge>
              )}
              <Button onClick={() => navigate("/auth")}>
                Giriş Yap
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-3xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/insights")}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Insights'a Dön
        </Button>

        {/* Original Thread */}
        <Card className="p-6 mb-6">
          <div className="flex gap-4 mb-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={MOCK_THREAD.authorAvatar} />
              <AvatarFallback>{MOCK_THREAD.author[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-foreground">
                  {MOCK_THREAD.author}
                </span>
                <span className="text-sm text-muted-foreground">
                  {MOCK_THREAD.createdAt}
                </span>
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-3">
                {MOCK_THREAD.title}
              </h1>
            </div>
          </div>

          <div className="mb-4 text-foreground whitespace-pre-line">
            {MOCK_THREAD.content}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {MOCK_THREAD.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-muted/50">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <Button variant="ghost" size="sm" className="gap-2">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Beğen</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              <span className="text-sm">Paylaş</span>
            </Button>
          </div>
        </Card>

        {/* New Reply Form */}
        {profile && (
          <Card className="p-4 mb-6">
            <div className="flex gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.username}`} />
                <AvatarFallback>{profile.username[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea
                  placeholder="Düşüncelerini paylaş..."
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                  className="min-h-[80px] mb-3 resize-none"
                />
                <div className="flex justify-end">
                  <Button
                    onClick={handleSubmitReply}
                    disabled={!newReply.trim() || isSubmitting}
                    className="bg-gradient-to-r from-primary to-secondary"
                  >
                    {isSubmitting ? "Gönderiliyor..." : "Yanıtla"}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Replies */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            {replies.length} Yanıt
          </h2>
          
          {replies.map((reply) => (
            <Card key={reply.id} className="p-4 hover:border-primary/30 transition-colors">
              <div className="flex gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={reply.authorAvatar} />
                  <AvatarFallback>{reply.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-sm text-foreground">
                      {reply.author}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {reply.createdAt}
                    </span>
                  </div>
                  <p className="text-sm text-foreground mb-3 whitespace-pre-line">
                    {reply.content}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(reply.id)}
                    className={`gap-2 ${reply.isLiked ? 'text-rose-500' : ''}`}
                  >
                    <Heart className={`h-4 w-4 ${reply.isLiked ? 'fill-current' : ''}`} />
                    <span className="text-xs">{reply.likes}</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default InsightThread;
