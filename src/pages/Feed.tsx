import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, TrendingUp, Sparkles } from "lucide-react";
import { CharacterCard } from "@/components/CharacterCard";
import { VoteModal } from "@/components/VoteModal";

const SAMPLE_CHARACTERS = [
  {
    id: 1,
    name: "Elon Musk",
    image: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=400&h=400&fit=crop",
    topTypes: [
      { type: "INTJ", percentage: 45 },
      { type: "ENTJ", percentage: 38 },
      { type: "INTP", percentage: 12 },
    ],
    votes: 2847,
    comments: 456,
    topComment: "Kesinlikle INTJ - Te dominant davranışlar gösteriyor ama core Ni.",
    topCommenter: "NiNavigator",
    topCommenterType: "INTJ",
  },
  {
    id: 2,
    name: "Taylor Swift",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    topTypes: [
      { type: "ENFJ", percentage: 52 },
      { type: "ESFJ", percentage: 28 },
      { type: "INFJ", percentage: 15 },
    ],
    votes: 3201,
    comments: 678,
    topComment: "Fe dom açık - şarkılarındaki duygusal hikayeler bunu gösteriyor.",
    topCommenter: "FeelingFirst",
    topCommenterType: "ENFJ",
  },
];

const Feed = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"hot" | "new" | "foryou">("hot");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary" />
              <h1 className="text-2xl font-bold">Typely</h1>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="gap-1">
                <Sparkles className="h-3 w-3" />
                247 XP
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Feed Content */}
      <main className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-border">
          {(["hot", "new", "foryou"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium transition-colors relative ${
                activeTab === tab
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === "hot" && (
                <>
                  <TrendingUp className="inline h-4 w-4 mr-1" />
                  Hot
                </>
              )}
              {tab === "new" && "New"}
              {tab === "foryou" && "For You"}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Character Cards */}
        <div className="space-y-6">
          {SAMPLE_CHARACTERS.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onVote={() => setSelectedCharacter(character.id)}
            />
          ))}
        </div>
      </main>

      {/* Vote Modal */}
      {selectedCharacter && (
        <VoteModal
          isOpen={!!selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
          character={SAMPLE_CHARACTERS.find((c) => c.id === selectedCharacter)!}
        />
      )}
    </div>
  );
};

export default Feed;
