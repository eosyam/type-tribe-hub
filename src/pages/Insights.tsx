import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Flame, Sparkles, Eye, MessageSquare, Plus } from "lucide-react";
import { useUserProfile } from "@/hooks/useUserProfile";

interface Thread {
  id: number;
  title: string;
  content: string;
  author: string;
  authorAvatar?: string;
  createdAt: string;
  views: number;
  replies: number;
  isPinned?: boolean;
  tags?: string[];
}

const MOCK_THREADS: Thread[] = [
  {
    id: 1,
    title: "INTJ vs ENTJ: Leadership style farklılıkları",
    content: "Her iki tip de liderlik konusunda güçlü ama yaklaşımları çok farklı. INTJ'ler daha stratejik ve uzun vadeli planlama yaparken, ENTJ'ler daha hızlı karar alıp execute ediyor. Sizce hangisi daha etkili?",
    author: "TypeAnalyst",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=TypeAnalyst",
    createdAt: "2 saat önce",
    views: 342,
    replies: 28,
    isPinned: true,
    tags: ["INTJ", "ENTJ", "Leadership"],
  },
  {
    id: 2,
    title: "9w1 vs 9w8: Conflict handling'de büyük fark",
    content: "9w1'ler çatışmadan kaçarken prensiplere sıkı sıkıya bağlı kalıyor. 9w8'ler ise daha assertive ama yine de barışçıl. Kendi deneyimlerinizi paylaşır mısınız?",
    author: "EnneaExpert",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=EnneaExpert",
    createdAt: "5 saat önce",
    views: 218,
    replies: 15,
    tags: ["Enneagram", "Type 9"],
  },
  {
    id: 3,
    title: "Fe vs Fi: Hangisi daha 'authentic'?",
    content: "Fe kullanıcıları grubu prioritize ederken, Fi kullanıcıları kendi değerlerini. Ama Fi'nin 'daha authentic' olduğu söylemi biased değil mi?",
    author: "CognitiveDebater",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CognitiveDebater",
    createdAt: "8 saat önce",
    views: 567,
    replies: 43,
    tags: ["Cognitive Functions", "Fe", "Fi"],
  },
  {
    id: 4,
    title: "INFP'ler gerçekten 'always late' mı?",
    content: "Bu stereotype'ı tartışalım. Ne kadarı doğru, ne kadarı Ne-Fi döngüsünden kaynaklanıyor?",
    author: "DebunkMyth",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DebunkMyth",
    createdAt: "12 saat önce",
    views: 891,
    replies: 67,
    tags: ["INFP", "Stereotypes"],
  },
];

const Insights = () => {
  const navigate = useNavigate();
  const { profile } = useUserProfile();
  const [activeFilter, setActiveFilter] = useState<"hot" | "new">("hot");

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
            
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" onClick={() => navigate("/")}>
                Ana Sayfa
              </Button>
              <Button variant="ghost" onClick={() => navigate("/feed")}>
                Feed
              </Button>
              <Button variant="ghost" className="text-primary">
                Insights
              </Button>
            </nav>

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
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Insights
          </h1>
          <p className="text-muted-foreground text-lg">
            Derin analizler, tartışmalar ve topluluk içgörüleri
          </p>
        </div>

        {/* Filters & New Thread Button */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <Button
              variant={activeFilter === "hot" ? "default" : "outline"}
              onClick={() => setActiveFilter("hot")}
              className="gap-2"
            >
              <Flame className="h-4 w-4" />
              Hot
            </Button>
            <Button
              variant={activeFilter === "new" ? "default" : "outline"}
              onClick={() => setActiveFilter("new")}
              className="gap-2"
            >
              <Sparkles className="h-4 w-4" />
              Yeni
            </Button>
          </div>
          
          <Button className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Yeni Thread</span>
          </Button>
        </div>

        {/* Threads List */}
        <div className="space-y-3">
          {MOCK_THREADS.map((thread) => (
            <Card
              key={thread.id}
              className="p-5 hover:border-primary/50 transition-all cursor-pointer group"
              onClick={() => navigate(`/insights/${thread.id}`)}
            >
              <div className="flex gap-4">
                {/* Author Avatar */}
                <Avatar className="h-10 w-10 flex-shrink-0">
                  <AvatarImage src={thread.authorAvatar} />
                  <AvatarFallback>{thread.author[0]}</AvatarFallback>
                </Avatar>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-foreground">
                          {thread.author}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {thread.createdAt}
                        </span>
                        {thread.isPinned && (
                          <Badge variant="secondary" className="text-xs">
                            Pinned
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {thread.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {thread.content}
                  </p>

                  {/* Tags & Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {thread.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs bg-muted/50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        <span>{thread.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-3.5 w-3.5" />
                        <span>{thread.replies}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Insights;
