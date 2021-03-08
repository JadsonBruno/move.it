/**
 * IMPORTS
 */
import {createContext} from "react";
import {useEffect} from 'react';
import {useContext} from 'react';
import {useState} from 'react';
import {ChallengesContext} from "./ChallengesContext";


/**
 * TYPES
 */
import {ICountdownContextData} from './countdownContext.d';
import {ICountdownProviderProps} from './countdownContext.d';


/**
 * CONSTANTS AND DEFINITIONS
 */
const MINUTE = 60;
const TIME_START = 25;
let countdownTimeout: NodeJS.Timeout | null = null;


/**
 * EXPORTS
 */
export const CountdownContext = createContext({} as ICountdownContextData);


/**
 * I render the countdown provider component.
 *
 * returns: countdown provider component
 */
export function CountdownProvider ({children}: ICountdownProviderProps): JSX.Element
{
    // initialize states
    const [time, setTime] = useState(TIME_START * MINUTE);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    const {startNewChallenge} = useContext(ChallengesContext);

    // format time
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    /**
     * I reset the countdown.
     *
     * returns: nothing
     */
    function resetCountdown ()
    {
        clearTimeout(countdownTimeout);
        setHasFinished(false);
        setIsActive(false);
        setTime(TIME_START * MINUTE);
    }


    /**
     * I reset the countdown.
     *
     * returns: nothing
     */
    function startCountdown ()
    {
        setIsActive(true);
    }

    // listen to time changes
    useEffect(() =>
    {
        // countdown it's active and not in the final value: set a timeout
        if (isActive === true &&
            time > 0)
        {
            countdownTimeout = setTimeout(() =>
            {
                setTime(time - 1);
            }, 1000);
            return;
        }

        // countdown it's active and in the final value: reset countdown
        if (isActive === true &&
            time === 0)
        {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    // return component
    return (
        <CountdownContext.Provider
            value={{
                hasFinished,
                isActive,
                minutes,
                resetCountdown,
                seconds,
                startCountdown
            }}
        >
            {children}
        </CountdownContext.Provider>
    );
}
