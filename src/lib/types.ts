export type MBTIType = 
  | "INTJ" | "INTP" | "ENTJ" | "ENTP"
  | "INFJ" | "INFP" | "ENFJ" | "ENFP"
  | "ISTJ" | "ISFJ" | "ESTJ" | "ESFJ"
  | "ISTP" | "ISFP" | "ESTP" | "ESFP";

export type EnneagramType = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export type AuraColor = "purple" | "cyan" | "emerald" | "amber" | "rose" | "indigo";

export type AuraSymbol = "brain" | "heart" | "star" | "flame" | "shield" | "compass";

export interface UserProfile {
  id: string;
  username: string;
  mbtiType: MBTIType;
  enneagramType?: EnneagramType;
  auraColor: AuraColor;
  auraSymbol: AuraSymbol;
  level: number;
  xp: number;
  analystXP: number;
  socialXP: number;
  creatorXP: number;
  votesCount: number;
  commentsCount: number;
  accuracyScore: number;
  joinedAt: string;
}

export interface Character {
  id: number;
  name: string;
  image: string;
  topTypes: Array<{ type: MBTIType; percentage: number }>;
  votes: number;
  comments: number;
  topComment?: string;
  topCommenter?: string;
  topCommenterType?: MBTIType;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  userType: MBTIType;
  userAura: AuraColor;
  content: string;
  likes: number;
  timestamp: string;
  replies?: Comment[];
}

export interface Vote {
  characterId: number;
  selectedType: MBTIType;
  timestamp: string;
}
