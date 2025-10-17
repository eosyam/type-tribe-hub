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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-glow animate-glow-pulse" />
        
        <div className="container relative mx-auto px-4 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Logo & Badge */}
            <div className="flex items-center justify-center gap-3 animate-fade-in">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary animate-float" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
                Typely
              </h1>
            </div>

            {/* Tagline */}
            <div className="space-y-4 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Kendini tanı, senin gibilerle takıl,
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  başkalarını çöz.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Z kuşağı için tipoloji odaklı sosyal platform. Identity + connection + debate bir arada.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="text-lg px-8 shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] transition-all"
                onClick={() => navigate("/feed")}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Explore Feed
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
              >
                <Brain className="mr-2 h-5 w-5" />
                Find Your Type
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-8 text-sm">
              <div>
                <div className="text-2xl font-bold text-primary">2.8K+</div>
                <div className="text-muted-foreground">Active Typologists</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-secondary">15K+</div>
                <div className="text-muted-foreground">Characters Analyzed</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-primary-glow">43K+</div>
                <div className="text-muted-foreground">Votes Cast</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <TrendingUp className="mr-1 h-3 w-3" />
              Features
            </Badge>
            <h3 className="text-3xl font-bold mb-4">
              Neden Typely?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tipoloji bilgisini kuru veri olmaktan çıkarıp, oyunlaştırılmış kimliğe dönüştürüyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <Card
                key={i}
                className="p-6 border-border hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Nasıl Çalışır?
            </h3>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Tipini Keşfet",
                desc: "MBTI, Enneagram ve cognitive functions ile profilini oluştur.",
              },
              {
                step: "2",
                title: "Feed'de Tartış",
                desc: "Ünlülerin, karakterlerin tiplerini tahmin et, oy ver ve tartışmalara katıl.",
              },
              {
                step: "3",
                title: "Topluluğunu Bul",
                desc: "Kendi tipin için özel odalarda mikro-topluluklar kur.",
              },
              {
                step: "4",
                title: "XP Topla & Yüksel",
                desc: "Analyst XP kazan, leaderboard'da zirveye çık, exclusive rozetler aç.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-card via-card to-primary/5 border-primary/20">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">
              Benim gibi düşünen insanlar var
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ve ben burada anlaşılıyorum.
              </span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Typely'de kimliğini yaşa, başkalarını anla, topluluğunla bağlan.
            </p>
            <Button
              size="lg"
              className="text-lg px-8 shadow-[0_0_30px_rgba(147,51,234,0.3)]"
              onClick={() => navigate("/feed")}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Start Exploring
            </Button>
          </div>
        </Card>
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
