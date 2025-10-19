import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Brain, Users, TrendingUp, Sparkles, MessageSquare, Trophy, Flame, Eye, ArrowUp, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "tipini keşfet 🧠",
      description: "MBTI, Enneagram, Socionics - hangisiysen o. Cognitive functions ile deep dive yap.",
    },
    {
      icon: Users,
      title: "kendi gibileri bul 🤝",
      description: "INFP lounge'da chill mi yapcan, ENTJ hub'da world domination mu planlıcan? Sen seç.",
    },
    {
      icon: MessageSquare,
      title: "hot takes paylaş 🔥",
      description: "Tyler Durden ENTP mi ENTJ mi? Tartış, oy ver, XP kazan. No cap.",
    },
    {
      icon: Trophy,
      title: "leaderboard'u bas 👑",
      description: "Analyst XP topla, exclusive badge'ler aç, flex yap. Typologist Sage ol.",
    },
  ];

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
      recentVote: "ENTP confirmed. dude literally invented chaos for fun 💀"
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
      recentVote: "bro is 100% INTJ, vision + execution = Te-Ni"
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
      recentVote: "Fe dom vibes everywhere, clearly ESFJ"
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
      recentVote: "peak Ni-Te energy, no debate needed"
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
      recentVote: "Ne-Ti god, argues for sport lmao"
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
      recentVote: "Si-Te stack obvious, but some say ESTJ 🤔"
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.12),transparent_70%)] animate-glow-pulse pointer-events-none" />
      
      {/* Compact Hero */}
      <section className="relative border-b border-border">
        <div className="container relative mx-auto px-4 py-8">
          {/* Auth Buttons - Top Right */}
          <div className="absolute top-4 right-6 flex gap-2">
            <Button variant="ghost" size="sm" className="text-sm">
              Sign In
            </Button>
            <Button size="sm" className="text-sm bg-gradient-primary">
              Sign Up
            </Button>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Brain className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl font-black">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Typology</span>
                  </h1>
                  <p className="text-xs text-muted-foreground">MBTI • Enneagram • Socionics</p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-muted-foreground">2.8K online</span>
                </div>
                <div className="text-muted-foreground">15K+ typed</div>
                <div className="text-muted-foreground">43K votes today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
          
          {/* Left Sidebar - Quick Actions */}
          <div className="hidden lg:block space-y-4">
            <Card className="p-4 border-border bg-card">
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                quick start
              </h3>
              <div className="space-y-2">
                <Button 
                  size="sm" 
                  className="w-full justify-start text-sm bg-gradient-primary"
                  onClick={() => navigate("/onboarding")}
                >
                  <Brain className="mr-2 h-4 w-4" />
                  tipini keşfet 🧠
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="w-full justify-start text-sm"
                  onClick={() => navigate("/feed")}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  hot debates 🔥
                </Button>
              </div>
            </Card>

            <Card className="p-4 border-border bg-card">
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                <Trophy className="h-4 w-4 text-primary" />
                top analysts
              </h3>
              <div className="space-y-3">
                {[
                  { name: "typology_god", xp: "12.4K", badge: "👑" },
                  { name: "mbti_master", xp: "9.8K", badge: "🔥" },
                  { name: "enneagram_pro", xp: "8.2K", badge: "⚡" },
                ].map((user, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">#{i + 1}</span>
                      <span className="font-medium">{user.name}</span>
                      <span>{user.badge}</span>
                    </div>
                    <span className="text-primary font-bold">{user.xp} XP</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Feed - Character Grid */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Flame className="h-6 w-6 text-orange-500" />
                trending now
              </h2>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-primary"
                onClick={() => navigate("/feed")}
              >
                view all →
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {characters.map((char, i) => (
                <Card
                  key={i}
                  className="group p-5 border-border bg-card hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
                  onClick={() => navigate("/feed")}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl">{char.image}</div>
                        <div>
                          <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                            {char.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className="bg-gradient-primary text-primary-foreground text-xs">
                              {char.mbti}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {char.enneagram}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      {char.hot && (
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                          <Flame className="h-3 w-3 mr-1" />
                          HOT
                        </Badge>
                      )}
                    </div>

                    {/* Consensus Bar */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">consensus</span>
                        <span className="font-bold text-primary">{char.consensus}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary transition-all duration-500"
                          style={{ width: `${char.consensus}%` }}
                        />
                      </div>
                    </div>

                    {/* Recent Vote */}
                    <div className="p-3 rounded-lg bg-muted/50 border border-border">
                      <p className="text-xs text-foreground/80 line-clamp-2">
                        "{char.recentVote}"
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <ArrowUp className="h-3.5 w-3.5" />
                          {char.votes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3.5 w-3.5" />
                          {char.comments}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3.5 w-3.5" />
                          {char.views}
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="h-7 text-xs text-primary">
                        vote now →
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* XP Banner */}
            <Card className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">
                      her doğru tahmin <span className="text-primary font-bold">+15 XP</span>
                    </p>
                    <p className="text-xs text-muted-foreground">leaderboard'u bas, exclusive badge'ler topla 👑</p>
                  </div>
                </div>
                <Button size="sm" className="bg-gradient-primary" onClick={() => navigate("/feed")}>
                  başla
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Features - Compact */}
      <section className="container mx-auto px-4 py-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">neden buradayız? 🤔</h3>
            <p className="text-sm text-muted-foreground">kişilik tiplerini sosyal bir deneyime dönüştürdük</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <Card
                key={i}
                className="p-4 border-border bg-card hover:border-primary/40 transition-all"
              >
                <div className="text-center space-y-2">
                  <div className="h-10 w-10 mx-auto rounded-lg bg-gradient-primary flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section - Compact */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 text-center border-primary/30 bg-gradient-card">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              kendi gibilerini bul, anlaşıl ✨
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              kişiliğini keşfet, hot takes paylaş, leaderboard'u bas
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                className="bg-gradient-primary shadow-glow hover:scale-105 transition-transform"
                onClick={() => navigate("/feed")}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                explore debates 🔥
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/onboarding")}
              >
                <Brain className="mr-2 h-5 w-5" />
                tipimi bul
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-lg bg-gradient-primary" />
              <span>© 2025 Typology Community</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">about</a>
              <a href="#" className="hover:text-primary transition-colors">community guidelines</a>
              <a href="#" className="hover:text-primary transition-colors">privacy</a>
              <a href="#" className="hover:text-primary transition-colors">discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
