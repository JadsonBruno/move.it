/**
 * IMPORTS
 */
import {ReactNode} from "react";


/**
 * EXPORTS
 */
export interface IChallengeProviderProps
{
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export interface IChallenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface IChallengesContextData {
    level: number;
    currentExperience: number; 
    challengesCompleted: number;
    completedChallenges: () => void;
    closeLevelUpModal: () => void;
    levelUp: () => void;
    startNewChallenge: () => void;
    activeChallenge: IChallenge;
    resetChallenge: () => void;
    experienceToNextLevel: number;
}
