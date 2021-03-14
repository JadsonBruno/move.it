/**
 * IMPORTS
 */
import {createContext,useEffect,useState} from 'react';
import Cookies from 'js-cookie';
import {IChallengesContextData, IChallengeProviderProps} from './challengesContext.d';
import challenges from '../../challenges.json';
import {LevelUpModal} from '../components/LevelUpModal';


/**
 * EXPORTS
 */
export const ChallengesContext = createContext({} as IChallengesContextData);


/**
 * I render the challenges provider component.
 *
 * returns: challenges provider component
 */
export function ChallengesProvider(
    {children,
    ...rest}: IChallengeProviderProps
)
{
    // initialize states
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

    // format experience level
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


    /**
     * I close the level up modal.
     *
     * returns: nothing
     */
    function closeLevelUpModal ()
    {
        setIsLevelUpModalOpen(false);
    }

    // listen to component mount
    // useEffect(()=> 
    // {
    //     Notification.requestPermission();
    // }, [])

    // listen to data changes
    useEffect(() =>
    {
        // set data changes at cookies
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    }, [level, currentExperience, challengesCompleted]);


    /**
     * I increase the level up.
     *
     * returns: nothing
     */
    function levelUp()
    {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
    }


    /**
     * I start a new challenge.
     *
     * returns: nothing
     */
    function startNewChallenge()
    {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio 🔥', {
                body: `Valendo ${challenge.amount}xp`
            });
        }
    }


    /**
     * I reset a challenge.
     *
     * returns: nothing
     */
    function resetChallenge()
    {
        setActiveChallenge(null)
    }


    /**
     * I handle the challenges completed.
     *
     * returns: nothing
     */
    function completedChallenges()
    {
        // there is a challenge active: abort
        if(!activeChallenge){
            return;
        }

        // there is not a challenge active: get amount of active challenge
        const {amount} = activeChallenge

        // define final experience
        let finalExperience = currentExperience + amount;

        // final experience is greater than experience to next level: define final experience and increase level
        if(finalExperience >= experienceToNextLevel)
        {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp()
        }

        // define values
        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }

    // return component
    return(
        <ChallengesContext.Provider
            value={{ 
                level, 
                currentExperience, 
                challengesCompleted, 
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
                completedChallenges,
                closeLevelUpModal
            }}
        >
            {children}
            {isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    );
}
