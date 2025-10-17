import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypeSelection } from "@/components/OnboardingSteps/TypeSelection";
import { QuickTest } from "@/components/OnboardingSteps/QuickTest";
import { AuraCustomization } from "@/components/OnboardingSteps/AuraCustomization";
import { useUserProfile } from "@/hooks/useUserProfile";
import { MBTIType, AuraColor, AuraSymbol } from "@/lib/types";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";

type OnboardingStep = "welcome" | "test-or-select" | "quick-test" | "type-selection" | "aura";

const Onboarding = () => {
  const navigate = useNavigate();
  const { createProfile } = useUserProfile();
  const [step, setStep] = useState<OnboardingStep>("welcome");
  const [selectedType, setSelectedType] = useState<MBTIType | null>(null);

  const handleTestComplete = (type: MBTIType) => {
    setSelectedType(type);
    setStep("aura");
  };

  const handleTypeSelect = (type: MBTIType) => {
    setSelectedType(type);
    setStep("aura");
  };

  const handleAuraComplete = (color: AuraColor, symbol: AuraSymbol, username: string) => {
    if (!selectedType) return;

    createProfile(selectedType, color, symbol, username);
    
    toast.success("Profil oluşturuldu!", {
      description: `İlk vote'unu kullanarak +50 XP kazan!`,
    });

    navigate("/feed");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-10 w-10 rounded-xl bg-gradient-primary" />
          <h1 className="text-3xl font-bold">Typely</h1>
        </div>

        {/* Content */}
        <Card className="p-8 border-border">
          {step === "welcome" && (
            <div className="space-y-6 text-center animate-fade-in">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold">Hoş Geldin! 👋</h2>
                <p className="text-lg text-muted-foreground">
                  Kendini tanı, senin gibilerle takıl, başkalarını çöz.
                </p>
              </div>

              <div className="py-6">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-primary mb-4 animate-float">
                  <Sparkles className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  size="lg"
                  onClick={() => setStep("test-or-select")}
                  className="w-full"
                >
                  Başla
                </Button>
                <p className="text-xs text-muted-foreground">
                  2 dakika sürecek bir yolculuğa hazır mısın?
                </p>
              </div>
            </div>
          )}

          {step === "test-or-select" && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">Tipini Biliyor musun?</h2>
                <p className="text-muted-foreground">
                  MBTI tipini biliyorsan direkt seçebilir,<br />
                  bilmiyorsan hızlı testle öğrenebilirsin
                </p>
              </div>

              <div className="grid gap-4 pt-4">
                <Button
                  size="lg"
                  variant="default"
                  onClick={() => setStep("type-selection")}
                  className="h-auto py-6"
                >
                  <div className="text-left">
                    <div className="font-bold text-lg mb-1">Evet, biliyorum</div>
                    <div className="text-sm opacity-90">Tipimi direkt seçeceğim</div>
                  </div>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setStep("quick-test")}
                  className="h-auto py-6"
                >
                  <div className="text-left">
                    <div className="font-bold text-lg mb-1">Hayır, bilmiyorum</div>
                    <div className="text-sm text-muted-foreground">5 soruluk hızlı test yapacağım</div>
                  </div>
                </Button>
              </div>
            </div>
          )}

          {step === "quick-test" && <QuickTest onComplete={handleTestComplete} />}

          {step === "type-selection" && <TypeSelection onSelect={handleTypeSelect} />}

          {step === "aura" && selectedType && (
            <AuraCustomization mbtiType={selectedType} onComplete={handleAuraComplete} />
          )}
        </Card>

        {/* Back button */}
        {step !== "welcome" && step !== "aura" && (
          <Button
            variant="ghost"
            onClick={() => {
              if (step === "quick-test" || step === "type-selection") setStep("test-or-select");
              else if (step === "test-or-select") setStep("welcome");
            }}
            className="w-full mt-4"
          >
            ← Geri
          </Button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
