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

  const trendingDebates = [
    { character: "Elon Musk", votes: "1.2K", question: "ENTJ mi INTJ mi?", type: "ENTJ", hot: true, views: "12.4K" },
    { character: "Taylor Swift", votes: "987", question: "ESFJ mi ENFJ mi?", type: "ESFJ", hot: false, views: "8.2K" },
    { character: "Tyler Durden", votes: "2.4K", question: "ENTP mi ENTJ mi?", type: "ENTP", hot: true, views: "18.9K" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.12),transparent_70%)] animate-glow-pulse pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="container relative mx-auto px-4 pt-20 pb-16">
          {/* Auth Buttons - Top Right */}
          <div className="absolute top-6 right-6 flex gap-3">
            <Button variant="ghost" size="sm" className="gap-2 text-foreground/80 hover:text-foreground">
              Sign In
            </Button>
            <Button size="sm" className="gap-2 bg-gradient-primary hover:shadow-glow">
              Sign Up
            </Button>
          </div>

          <div className="max-w-6xl mx-auto text-center space-y-8">
            {/* Logo & Brand */}
            <div className="flex flex-col items-center gap-4 animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-40 animate-glow-pulse" />
                <div className="relative h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center animate-float shadow-glow">
                  <Brain className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-black">
                <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">Typology</span>{" "}
                <span className="text-foreground">Community</span>
              </h1>
            </div>

            {/* Hero Headline */}
            <div className="space-y-4 animate-slide-up">
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                kişilik tiplerini tartış, ünlülere oy ver, cognitive functions ile deep dive yap.
                <br />
                <span className="text-foreground/60">MBTI • Enneagram • Socionics</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-xl shadow-glow hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] hover:scale-105 transition-all duration-300 group bg-gradient-primary"
                onClick={() => navigate("/feed")}
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                explore hot debates 🔥
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-xl border-2 border-border hover:bg-card hover:border-primary/50 transition-all duration-300"
                onClick={() => navigate("/onboarding")}
              >
                <Brain className="mr-2 h-5 w-5" />
                tipini bul
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-8">
              <div className="group cursor-default">
                <div className="text-3xl font-black bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  2.8K+
                </div>
                <div className="text-xs text-muted-foreground mt-1">typologists online</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
              <div className="group cursor-default">
                <div className="text-3xl font-black bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  15K+
                </div>
                <div className="text-xs text-muted-foreground mt-1">personalities typed</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
              <div className="group cursor-default">
                <div className="text-3xl font-black bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  43K+
                </div>
                <div className="text-xs text-muted-foreground mt-1">votes today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              neden buradayız? 🤔
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              kişilik tiplerini sosyal bir deneyime dönüştürdük. vibe check passed ✅
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <Card
                key={i}
                className="group p-6 border-border bg-card hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-primary blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Debates Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
                <Flame className="h-8 w-8 text-orange-500" />
                trending debates
              </h3>
              <p className="text-sm text-muted-foreground">
                2.8K people vibing rn 👀
              </p>
            </div>
            <Button 
              variant="ghost" 
              className="text-primary hover:text-primary-glow"
              onClick={() => navigate("/feed")}
            >
              view all →
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {trendingDebates.map((debate, i) => (
              <Card
                key={i}
                className="group p-5 border-border bg-card hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
                onClick={() => navigate("/feed")}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge 
                      className={`gap-1.5 ${debate.hot ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' : 'bg-muted text-muted-foreground'}`}
                    >
                      {debate.hot && <Flame className="h-3 w-3" />}
                      {debate.hot ? 'HOT' : 'NEW'}
                    </Badge>
                    <Badge variant="outline" className="gap-1 text-xs">
                      {debate.type}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {debate.character}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">{debate.question}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <ArrowUp className="h-3.5 w-3.5" />
                        {debate.votes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        {debate.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-3.5 w-3.5" />
                        {Math.floor(Math.random() * 200) + 50}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Quick XP Teaser */}
          <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">
                  her doğru tahmin <span className="text-primary font-bold">+15 XP</span>. analyst badge'i topla, leaderboard'u bas 👑
                </span>
              </div>
              <Button size="sm" variant="outline" className="border-primary/30 hover:bg-primary/10">
                başla
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              nasıl çalışıyor? 🤔
            </h3>
            <p className="text-lg text-muted-foreground">
              4 adımda typology pro ol
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                step: "01",
                title: "tipini keşfet",
                desc: "quick test yap, MBTI/Enneagram/Socionics tipini bul. cognitive functions ile deep dive.",
                icon: Brain,
                emoji: "🧠"
              },
              {
                step: "02",
                title: "tartışmalara gir",
                desc: "ünlülerin ve karakterlerin tiplerini tahmin et, oy ver, hot takes paylaş.",
                icon: MessageSquare,
                emoji: "💬"
              },
              {
                step: "03",
                title: "communitiy'ni bul",
                desc: "kendi tipindeki insanlarla exclusive odalarda takıl. senin gibi düşünenler burada.",
                icon: Users,
                emoji: "🤝"
              },
              {
                step: "04",
                title: "XP topla, yüksel",
                desc: "her doğru tahmin XP getiriyor. leaderboard'da zirveye çık, exclusive badge'ler topla.",
                icon: Trophy,
                emoji: "👑"
              },
            ].map((item, i) => (
              <Card 
                key={item.step} 
                className="group p-6 border-border bg-card hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-primary blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center text-lg font-black shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                      {item.title} {item.emoji}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="max-w-6xl mx-auto relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-15" />
          
          <Card className="relative p-12 md:p-16 text-center border-primary/30 bg-gradient-card backdrop-blur-xl shadow-card-hover">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                "benim gibi düşünen insanlar var
                <br />
                <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
                  ve burada anlaşılıyorum" ✨
                </span>
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                kişiliğini keşfet, senin gibilerle bağlan, hot takes paylaş.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="text-lg px-10 py-6 rounded-xl shadow-glow hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] hover:scale-105 transition-all duration-300 group bg-gradient-primary"
                  onClick={() => navigate("/feed")}
                >
                  <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  explore now 🔥
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-6 rounded-xl border-2 border-border hover:bg-card hover:border-primary/50 transition-all duration-300"
                  onClick={() => navigate("/onboarding")}
                >
                  <Brain className="mr-2 h-5 w-5" />
                  tipimi bul
                </Button>
              </div>
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
