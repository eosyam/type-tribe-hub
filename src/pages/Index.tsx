import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, TrendingUp, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";

const Index = () => {
  const navigate = useNavigate();

  const characters = [
    { 
      name: "Tyler Durden", 
      votes: "2.4K", 
      mbti: "ENTP", 
      enneagram: "8w7",
      image: "🎭",
      consensus: 68,
      hot: true, 
      views: "18.9K",
      comments: 234,
      recentVote: "ENTP kesin. Adam kaos yaratmayı seviyormuş gibi davranıyor."
    },
    { 
      name: "Elon Musk", 
      votes: "1.2K", 
      mbti: "INTJ", 
      enneagram: "5w6",
      image: "🚀",
      consensus: 45,
      hot: true, 
      views: "12.4K",
      comments: 189,
      recentVote: "Kesinlikle INTJ. Vizyon ve uygulama Te-Ni stack'i gösteriyor."
    },
    { 
      name: "Taylor Swift", 
      votes: "987", 
      mbti: "ESFJ", 
      enneagram: "3w2",
      image: "🎤",
      consensus: 72,
      hot: false, 
      views: "8.2K",
      comments: 156,
      recentVote: "Her yerde Fe dominant enerjisi var, açıkça ESFJ."
    },
    { 
      name: "Wednesday Addams", 
      votes: "3.1K", 
      mbti: "INTJ", 
      enneagram: "5w4",
      image: "🖤",
      consensus: 89,
      hot: true, 
      views: "22.1K",
      comments: 312,
      recentVote: "Tam Ni-Te enerjisi, tartışmaya gerek yok."
    },
    { 
      name: "Tony Stark", 
      votes: "2.8K", 
      mbti: "ENTP", 
      enneagram: "7w8",
      image: "⚡",
      consensus: 61,
      hot: true, 
      views: "19.7K",
      comments: 278,
      recentVote: "Ne-Ti'nin kralı, tartışmayı spor olarak görüyor."
    },
    { 
      name: "Hermione Granger", 
      votes: "1.9K", 
      mbti: "ISTJ", 
      enneagram: "1w2",
      image: "📚",
      consensus: 54,
      hot: false, 
      views: "14.3K",
      comments: 198,
      recentVote: "Si-Te stack açık, ama bazıları ESTJ diyor."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate("/")}
              className="hover:opacity-80 transition-opacity"
            >
              <Logo />
            </button>
            
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" onClick={() => navigate("/feed")}>
                Feed
              </Button>
              <Button variant="ghost" onClick={() => navigate("/insights")}>
                Insights
              </Button>
            </nav>

            <Button onClick={() => navigate("/auth")} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Giriş Yap
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Minimal */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ünlü Karakterlerin Kişilik Tiplerini Keşfet
          </h2>
          <p className="text-lg text-muted-foreground">
            Tyler Durden ENTP mi? Tony Stark'ın enneagram'ı ne? Tartış, oy ver, konsensüse ulaş.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Button
              size="lg"
              className="bg-primary"
              onClick={() => navigate("/feed")}
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Tartışmalara Katıl
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/onboarding")}
            >
              <Brain className="mr-2 h-5 w-5" />
              Kendi Tipini Bul
            </Button>
          </div>
        </div>
      </section>

      {/* Character Grid - Main Content */}
      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Trending Tartışmalar
            </h3>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/feed")}
            >
              Tümünü Gör →
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {characters.map((char, i) => (
              <Card
                key={i}
                className="group p-4 border-border bg-card hover:border-primary/40 transition-all cursor-pointer"
                onClick={() => navigate("/feed")}
              >
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{char.image}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm group-hover:text-primary transition-colors truncate">
                        {char.name}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Badge variant="secondary" className="text-xs px-2 py-0 h-5">
                          {char.mbti}
                        </Badge>
                        <Badge variant="outline" className="text-xs px-2 py-0 h-5">
                          {char.enneagram}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Consensus */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Konsensüs</span>
                      <span className="font-semibold text-primary">{char.consensus}%</span>
                    </div>
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all"
                        style={{ width: `${char.consensus}%` }}
                      />
                    </div>
                  </div>

                  {/* Recent Comment */}
                  <div className="p-2 rounded bg-muted/50 border border-border">
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      "{char.recentVote}"
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                    <div className="flex items-center gap-3">
                      <span>{char.votes} oy</span>
                      <span>{char.comments} yorum</span>
                    </div>
                    <Button size="sm" variant="link" className="h-auto p-0 text-xs text-primary">
                      Oy Ver →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Logo size="sm" showText={false} />
              <span>© 2025 Psyche</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Hakkında</a>
              <a href="#" className="hover:text-foreground transition-colors">Gizlilik</a>
              <a href="#" className="hover:text-foreground transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
