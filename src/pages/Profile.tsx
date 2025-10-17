import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useUserProfile } from "@/hooks/useUserProfile";
import { Brain, Heart, Star, Flame, Shield, Compass, TrendingUp, MessageSquare, Sparkles, ArrowLeft } from "lucide-react";
import { AuraSymbol } from "@/lib/types";

const SYMBOL_ICONS: Record<AuraSymbol, any> = {
  brain: Brain,
  heart: Heart,
  star: Star,
  flame: Flame,
  shield: Shield,
  compass: Compass,
};

const Profile = () => {
  const navigate = useNavigate();
  const { profile, resetProfile } = useUserProfile();

  if (!profile) {
    navigate("/onboarding");
    return null;
  }

  const SymbolIcon = SYMBOL_ICONS[profile.auraSymbol];
  const progressToNextLevel = (profile.xp % 100);

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/feed")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Feed'e Dön
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Profile Header */}
        <Card className="p-8 mb-6 bg-gradient-to-br from-card to-primary/5 border-primary/20">
          <div className="flex items-start gap-6">
            <div className={`h-24 w-24 rounded-full ${getAuraColorClass(profile.auraColor)} flex items-center justify-center flex-shrink-0`}>
              <SymbolIcon className="h-12 w-12 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{profile.username}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="default" className="text-lg">
                  {profile.mbtiType}
                </Badge>
                {profile.enneagramType && (
                  <Badge variant="secondary">
                    Enneagram {profile.enneagramType}
                  </Badge>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Level {profile.level}</span>
                  <span className="text-primary font-medium">{profile.xp} XP</span>
                </div>
                <Progress value={progressToNextLevel} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {100 - progressToNextLevel} XP until Level {profile.level + 1}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{profile.analystXP}</div>
                <div className="text-sm text-muted-foreground">Analyst XP</div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{profile.socialXP}</div>
                <div className="text-sm text-muted-foreground">Social XP</div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <div className="text-2xl font-bold">{profile.votesCount}</div>
                <div className="text-sm text-muted-foreground">Votes Cast</div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <div className="text-2xl font-bold">{profile.commentsCount}</div>
                <div className="text-sm text-muted-foreground">Comments</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Activity */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Member since</span>
              <span className="font-medium">
                {new Date(profile.joinedAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Accuracy Score</span>
              <span className="font-medium">{profile.accuracyScore}%</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-muted-foreground">Total XP</span>
              <span className="font-medium">{profile.xp}</span>
            </div>
          </div>
        </Card>

        {/* Debug Button */}
        <Button
          variant="destructive"
          onClick={() => {
            if (confirm("Are you sure? This will reset your profile.")) {
              resetProfile();
              navigate("/onboarding");
            }
          }}
          className="w-full"
        >
          Reset Profile (Debug)
        </Button>
      </main>
    </div>
  );
};

export default Profile;
