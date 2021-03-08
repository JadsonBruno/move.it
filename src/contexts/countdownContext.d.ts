import { ReactNode } from "react";

export interface ICountdownContextData
{
    hasFinished: boolean;
    isActive: boolean;
    minutes: number;
    resetCountdown: () => void;
    startCountdown: () => void;
    seconds: number;
}

export interface ICountdownProviderProps
{
    children: ReactNode;
}
