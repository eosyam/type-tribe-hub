import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CharacterCard } from "@/components/CharacterCard";
import { VoteModal } from "@/components/VoteModal";
import { CommentThread } from "@/components/CommentThread";
import { useUserProfile } from "@/hooks/useUserProfile";
import { Character, MBTIType } from "@/lib/types";
import { Logo } from "@/components/Logo";

const SAMPLE_CHARACTERS: Character[] = [
  {
    id: 1,
    name: "Elon Musk",
    image: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=400&h=400&fit=crop",
    topTypes: [
      { type: "INTJ" as MBTIType, percentage: 45 },
      { type: "ENTJ" as MBTIType, percentage: 38 },
      { type: "INTP" as MBTIType, percentage: 12 },
    ],
    votes: 2847,
    comments: 456,
    topComment: "Kesinlikle INTJ - Te dominant davranışlar gösteriyor ama core Ni.",
    topCommenter: "NiNavigator",
    topCommenterType: "INTJ" as MBTIType,
  },
  {
    id: 2,
    name: "Taylor Swift",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    topTypes: [
      { type: "ENFJ" as MBTIType, percentage: 52 },
      { type: "ESFJ" as MBTIType, percentage: 28 },
      { type: "INFJ" as MBTIType, percentage: 15 },
    ],
    votes: 3201,
    comments: 678,
    topComment: "Fe dom açık - şarkılarındaki duygusal hikayeler bunu gösteriyor.",
    topCommenter: "FeelingFirst",
    topCommenterType: "ENFJ" as MBTIType,
  },
];

const Feed = () => {
  const navigate = useNavigate();
  const { profile } = useUserProfile();
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
  const [commentCharacter, setCommentCharacter] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"hot" | "new" | "foryou">("hot");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate("/")}
              className="hover:opacity-80 transition-opacity"
            >
              <Logo />
            </button>
            {profile && (
              <button
                onClick={() => navigate("/profile")}
                className="flex items-center gap-2 hover:bg-muted/50 rounded-lg p-2 transition-colors"
              >
                <Badge variant="secondary" className="gap-1">
                  <Sparkles className="h-3 w-3" />
                  {profile.xp} XP
                </Badge>
                <div className={`h-8 w-8 rounded-full bg-${profile.auraColor}-500`} />
              </button>
            )}
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
              onOpenComments={() => setCommentCharacter(character.id)}
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
          onOpenComments={() => {
            setCommentCharacter(selectedCharacter);
            setSelectedCharacter(null);
          }}
        />
      )}

      {/* Comment Thread */}
      {commentCharacter && (
        <CommentThread
          isOpen={!!commentCharacter}
          onClose={() => setCommentCharacter(null)}
          character={SAMPLE_CHARACTERS.find((c) => c.id === commentCharacter)!}
        />
      )}
    </div>
  );
};

export default Feed;
