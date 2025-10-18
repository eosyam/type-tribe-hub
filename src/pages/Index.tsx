import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Brain, Users, TrendingUp, Sparkles, MessageSquare, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Kendini Tanı",
      description: "MBTI ve Enneagram ile kişiliğini keşfet, cognitive stack'ini analiz et.",
    },
    {
      icon: Users,
      title: "Senin Gibilerle Takıl",
      description: "Kendi tipin için özel topluluklarda mikro-sosyal yaşam kur.",
    },
    {
      icon: MessageSquare,
      title: "Başkalarını Çöz",
      description: "Ünlüleri, karakterleri analiz et, tartış ve oy ver.",
    },
    {
      icon: Trophy,
      title: "XP Kazan & Yüksel",
      description: "Analyst XP topla, leaderboard'da zirveye çık, exclusive rozetler aç.",
    },
  ];

  const trendingDebates = [
    { character: "Elon Musk", votes: "1.2K", question: "ENTJ mi INTJ mi?" },
    { character: "Taylor Swift", votes: "987", question: "ESFJ mi ENFJ mi?" },
    { character: "Tyler Durden", votes: "2.4K", question: "ENTP mi ENTJ mi?" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15),transparent_70%)] animate-glow-pulse pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="container relative mx-auto px-4 pt-32 pb-24">
          {/* Auth Buttons - Top Right */}
          <div className="absolute top-8 right-8 flex gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Sign in with Discord
            </Button>
          </div>

          <div className="max-w-5xl mx-auto text-center space-y-12">
            {/* Logo & Brand */}
            <div className="flex flex-col items-center gap-6 animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-50 animate-glow-pulse" />
                <div className="relative h-20 w-20 rounded-2xl bg-gradient-primary flex items-center justify-center animate-float shadow-[0_0_40px_rgba(147,51,234,0.4)]">
                  <Brain className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
                Typely
              </h1>
            </div>

            {/* Hero Headline */}
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Kendini tanı,
                <br />
                senin gibilerle takıl,
                <br />
                <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
                  başkalarını çöz.
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Z kuşağı için tipoloji odaklı sosyal platform.
                <br />
                <span className="text-foreground/80">Identity + connection + debate bir arada.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="text-xl px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.6)] hover:scale-105 transition-all duration-300 group"
                onClick={() => navigate("/feed")}
              >
                <Sparkles className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Explore Feed
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-10 py-7 rounded-xl border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                onClick={() => navigate("/onboarding")}
              >
                <Brain className="mr-2 h-6 w-6" />
                Find Your Type
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-12">
              <div className="group cursor-default">
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  2.8K+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Active Typologists</div>
              </div>
              <div className="h-16 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
              <div className="group cursor-default">
                <div className="text-4xl font-black bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  15K+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Characters Analyzed</div>
              </div>
              <div className="h-16 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
              <div className="group cursor-default">
                <div className="text-4xl font-black bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  43K+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Votes Cast</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="mb-4 text-base px-4 py-2 border-primary/30">
              <TrendingUp className="mr-2 h-4 w-4" />
              Platform Features
            </Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Neden <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Typely</span>?
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tipoloji bilgisini kuru veri olmaktan çıkarıp, oyunlaştırılmış kimliğe dönüştürüyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <Card
                key={i}
                className="group p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-primary blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    <div className="relative h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Debates Section */}
      <section className="container mx-auto px-4 py-32 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="mb-4 text-base px-4 py-2 border-secondary/30">
              <TrendingUp className="mr-2 h-4 w-4" />
              Live Activity
            </Badge>
            <h3 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Trending</span> Debates
            </h3>
            <p className="text-xl text-muted-foreground">
              Join thousands discussing personality types right now
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trendingDebates.map((debate, i) => (
              <Card
                key={i}
                className="group p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.15)] transition-all duration-500 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
                onClick={() => navigate("/feed")}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Hot
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {debate.votes}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                      {debate.character}
                    </h4>
                    <p className="text-muted-foreground">{debate.question}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-secondary/10 group-hover:text-secondary transition-colors"
                  >
                    Join Discussion
                    <MessageSquare className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-32 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Nasıl Çalışır?
            </h3>
            <p className="text-xl text-muted-foreground">
              4 adımda Typely deneyimini yaşa
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Tipini Keşfet",
                  desc: "MBTI, Enneagram ve cognitive functions ile profilini oluştur. Aura'nı özelleştir, kimliğini dijital dünyada yaşa.",
                  icon: Brain,
                },
                {
                  step: "2",
                  title: "Feed'de Tartış",
                  desc: "Ünlülerin, karakterlerin tiplerini tahmin et, oy ver ve tartışmalara katıl. Her doğru tahmin XP kazandırır.",
                  icon: MessageSquare,
                },
                {
                  step: "3",
                  title: "Topluluğunu Bul",
                  desc: "Kendi tipin için özel odalarda mikro-topluluklar kur. INFP Lounge'da mı takılacaksın, yoksa ENTJ Hub'da mı?",
                  icon: Users,
                },
                {
                  step: "4",
                  title: "XP Topla & Yüksel",
                  desc: "Analyst XP kazan, leaderboard'da zirveye çık, exclusive rozetler ve özel auralar aç. Typologist Sage ol.",
                  icon: Trophy,
                },
              ].map((item, i) => (
                <div 
                  key={item.step} 
                  className="flex items-start gap-8 animate-fade-in"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-primary blur-xl opacity-50" />
                    <div className="relative h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-black shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <Card className="flex-1 p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <item.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                        <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-32 relative">
        <div className="max-w-5xl mx-auto relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20" />
          
          <Card className="relative p-16 text-center border-primary/30 bg-card/80 backdrop-blur-xl shadow-[0_0_60px_hsl(var(--primary)/0.2)]">
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Benim gibi düşünen insanlar var
                <br />
                <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
                  ve ben burada anlaşılıyorum.
                </span>
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Typely'de kimliğini yaşa, başkalarını anla, topluluğunla bağlan.
              </p>
              <div className="pt-4">
                <Button
                  size="lg"
                  className="text-xl px-12 py-7 rounded-xl shadow-[0_0_40px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.7)] hover:scale-105 transition-all duration-300 group"
                  onClick={() => navigate("/feed")}
                >
                  <Sparkles className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Start Exploring
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-primary" />
              <span>© 2025 Typely</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">About</a>
              <a href="#" className="hover:text-foreground transition-colors">Community</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
