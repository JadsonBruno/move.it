/**
 * IMPORTS
 */
import {useContext} from 'react';
import {ChallengesContext} from '../../contexts/ChallengesContext';
import {CountdownContext} from '../../contexts/CountdownContex';
import styles from '../../styles/components/ChallengeBox.module.css';


/**
 * CODE
 */

/**
 * I render the challenge box component.
 *
 * returns: challenge box component
 */
function ChallengeBox ()
{
    // get data from contexts
    const {activeChallenge, resetChallenge, completedChallenges} = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext);

    /**
     * I handle a challenge succeeded.
     *
     * returns: nothing
     */
    function handleChallengeSucceeded (): void
    {
        completedChallenges();
        resetCountdown();
    }


    /**
     * I handle a challenge failed.
     *
     * returns: nothing
     */
    function handleChallengeFailed (): void
    {
        resetChallenge();
        resetCountdown();
    }

    // return component
    return (
        <div
            className={styles.challengeBoxContainer}
        >
            {
                activeChallenge ?
                (
                    <div className={styles.challengeActive}>
                        <header>
                            Ganhe {activeChallenge.amount} xp
                        </header>
                        <main>
                            <img 
                                src={`icons/${activeChallenge.type}.svg`}
                                alt="Body"
                            />
                            <strong>
                                Novo desafio
                            </strong>
                            <p>
                                {activeChallenge.description}
                            </p>
                        </main>
                        <footer>
                            <button
                                type="button"
                                className={styles.challengeFailedButton}
                                onClick={handleChallengeFailed}
                            >
                                Falhei
                            </button> 
                            <button
                                type="button"
                                className={styles.challengeSucceededButton}
                                onClick={handleChallengeSucceeded}
                            >
                                Completei
                            </button>
                        </footer>
                    </div>
                )
                :
                (
                    <div className={styles.challengeNotActive}>
                        <strong>
                            Finalize um ciclo para receber um desafio
                        </strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level up"/>
                            Avance de level completando desafios.
                        </p>
                    </div>
                )
            }
        </div>
    );
}


/**
 * EXPORTS
 */
export {
    ChallengeBox
}
