import { useState, useEffect } from "react";
import { UserProfile, MBTIType, AuraColor, AuraSymbol } from "@/lib/types";

const STORAGE_KEY = "typely_user_profile";

const createDefaultProfile = (): UserProfile => ({
  id: crypto.randomUUID(),
  username: `User${Math.floor(Math.random() * 9999)}`,
  mbtiType: "INTJ",
  auraColor: "purple",
  auraSymbol: "brain",
  level: 1,
  xp: 0,
  analystXP: 0,
  socialXP: 0,
  creatorXP: 0,
  votesCount: 0,
  commentsCount: 0,
  accuracyScore: 0,
  joinedAt: new Date().toISOString(),
});

export const useUserProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setProfile(JSON.parse(stored));
    }
    setIsLoading(false);
  }, []);

  const saveProfile = (updates: Partial<UserProfile>) => {
    const updated = profile ? { ...profile, ...updates } : createDefaultProfile();
    setProfile(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const createProfile = (
    mbtiType: MBTIType,
    auraColor: AuraColor,
    auraSymbol: AuraSymbol,
    username?: string
  ) => {
    const newProfile: UserProfile = {
      ...createDefaultProfile(),
      mbtiType,
      auraColor,
      auraSymbol,
      username: username || `User${Math.floor(Math.random() * 9999)}`,
    };
    setProfile(newProfile);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProfile));
    return newProfile;
  };

  const addXP = (type: "analyst" | "social" | "creator", amount: number) => {
    if (!profile) return;

    const updates: Partial<UserProfile> = {
      xp: profile.xp + amount,
    };

    if (type === "analyst") updates.analystXP = profile.analystXP + amount;
    if (type === "social") updates.socialXP = profile.socialXP + amount;
    if (type === "creator") updates.creatorXP = profile.creatorXP + amount;

    // Calculate new level (100 XP per level)
    const newLevel = Math.floor((profile.xp + amount) / 100) + 1;
    if (newLevel > profile.level) {
      updates.level = newLevel;
    }

    saveProfile(updates);
  };

  const incrementVotes = () => {
    if (!profile) return;
    saveProfile({ votesCount: profile.votesCount + 1 });
  };

  const incrementComments = () => {
    if (!profile) return;
    saveProfile({ commentsCount: profile.commentsCount + 1 });
  };

  const hasCompletedOnboarding = () => !!profile;

  const resetProfile = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProfile(null);
  };

  return {
    profile,
    isLoading,
    hasCompletedOnboarding,
    createProfile,
    saveProfile,
    addXP,
    incrementVotes,
    incrementComments,
    resetProfile,
  };
};
