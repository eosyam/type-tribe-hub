import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, Heart, Star, Flame, Shield, Compass } from "lucide-react";
import { AuraColor, AuraSymbol, MBTIType } from "@/lib/types";

const AURA_COLORS: { value: AuraColor; label: string; class: string }[] = [
  { value: "purple", label: "Ni (Purple)", class: "bg-purple-500" },
  { value: "cyan", label: "Fe (Cyan)", class: "bg-cyan-500" },
  { value: "emerald", label: "Ti (Emerald)", class: "bg-emerald-500" },
  { value: "amber", label: "Se (Amber)", class: "bg-amber-500" },
  { value: "rose", label: "Fi (Rose)", class: "bg-rose-500" },
  { value: "indigo", label: "Te (Indigo)", class: "bg-indigo-500" },
];

const AURA_SYMBOLS: { value: AuraSymbol; label: string; Icon: any }[] = [
  { value: "brain", label: "Brain", Icon: Brain },
  { value: "heart", label: "Heart", Icon: Heart },
  { value: "star", label: "Star", Icon: Star },
  { value: "flame", label: "Flame", Icon: Flame },
  { value: "shield", label: "Shield", Icon: Shield },
  { value: "compass", label: "Compass", Icon: Compass },
];

interface AuraCustomizationProps {
  mbtiType: MBTIType;
  onComplete: (color: AuraColor, symbol: AuraSymbol, username: string) => void;
}

export const AuraCustomization = ({ mbtiType, onComplete }: AuraCustomizationProps) => {
  const [color, setColor] = useState<AuraColor>("purple");
  const [symbol, setSymbol] = useState<AuraSymbol>("brain");
  const [username, setUsername] = useState("");

  const handleComplete = () => {
    onComplete(color, symbol, username || `User${Math.floor(Math.random() * 9999)}`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-primary mb-2">
          <span className="text-2xl font-bold">{mbtiType}</span>
        </div>
        <h2 className="text-3xl font-bold">Aura'nı Özelleştir</h2>
        <p className="text-muted-foreground">
          Dijital kimliğini oluştur - bu senin cognitive energy'ni temsil edecek
        </p>
      </div>

      {/* Username */}
      <div className="space-y-2">
        <Label htmlFor="username">Kullanıcı Adı (opsiyonel)</Label>
        <Input
          id="username"
          placeholder="CognitiveNinja"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="text-center text-lg"
        />
      </div>

      {/* Color Selection */}
      <div className="space-y-3">
        <Label>Aura Rengi</Label>
        <div className="grid grid-cols-3 gap-3">
          {AURA_COLORS.map((c) => (
            <Card
              key={c.value}
              className={`p-4 cursor-pointer transition-all hover:scale-105 ${
                color === c.value ? "border-primary ring-2 ring-primary" : "border-border"
              }`}
              onClick={() => setColor(c.value)}
            >
              <div className={`h-12 w-12 rounded-full ${c.class} mx-auto mb-2`} />
              <p className="text-xs text-center font-medium">{c.label}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Symbol Selection */}
      <div className="space-y-3">
        <Label>Aura Sembolü</Label>
        <div className="grid grid-cols-3 gap-3">
          {AURA_SYMBOLS.map((s) => (
            <Card
              key={s.value}
              className={`p-4 cursor-pointer transition-all hover:scale-105 ${
                symbol === s.value ? "border-primary ring-2 ring-primary" : "border-border"
              }`}
              onClick={() => setSymbol(s.value)}
            >
              <s.Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-xs text-center font-medium">{s.label}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Preview */}
      <Card className="p-6 bg-gradient-to-br from-card to-primary/5 border-primary/20">
        <p className="text-sm text-center text-muted-foreground mb-4">Önizleme</p>
        <div className="flex items-center justify-center gap-3">
          <div className={`h-12 w-12 rounded-full ${AURA_COLORS.find(c => c.value === color)?.class} flex items-center justify-center`}>
            {AURA_SYMBOLS.find(s => s.value === symbol)?.Icon && (
              <>
                {(() => {
                  const SymbolIcon = AURA_SYMBOLS.find(s => s.value === symbol)!.Icon;
                  return <SymbolIcon className="h-6 w-6 text-white" />;
                })()}
              </>
            )}
          </div>
          <div>
            <p className="font-bold">{username || "User####"}</p>
            <p className="text-sm text-muted-foreground">{mbtiType}</p>
          </div>
        </div>
      </Card>

      <Button size="lg" onClick={handleComplete} className="w-full">
        Profili Oluştur
      </Button>
    </div>
  );
};
