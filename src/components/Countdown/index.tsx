/**
 * IMPORTS
 */
import {useContext} from 'react';
import {CountdownContext} from '../../contexts/CountdownContex';
import styles from '../../styles/components/Countdown.module.css';


/**
 * CODE
 */

/**
 * I render the countdown component.
 *
 * returns: countdown component
 */
function Countdown ()
{
    // get data from context
    const {
        hasFinished,
        isActive,
        minutes,
        resetCountdown,
        startCountdown,
        seconds,
    } = useContext(CountdownContext)

    // format time information
    const [minDecimal, minUnity] = String(minutes).padStart(2, '0').split('');
    const [secondDecimal, secondUnity] = String(seconds).padStart(2, '0').split('');

    // return component
    return (
        <>
            <div
                className={styles.countdownContainer}
                data-testid="countdown"
            >
                <div>
                    <span>{minDecimal}</span>
                    <span>{minUnity}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondDecimal}</span>
                    <span>{secondUnity}</span>
                </div>
            </div>
            {hasFinished ?
            (
                <button
                    disabled
                    className={styles.countdownButton}
                    data-testid="button-countdown"
                >
                    Ciclo encerrado
                </button>
            )
            :
            (
                <>
                    {isActive ? 
                (
                    <button
                        type="button"
                        className={
                            `${styles.countdownButton}
                             ${styles.countdownButtonActive}
                            `
                        }
                        onClick={resetCountdown}
                        data-testid="button-countdown"
                    >
                        Abandonar ciclo
                    </button>
                )
                :
                (
                    <button
                        type="button"
                        className={styles.countdownButton}
                        onClick={startCountdown}
                        data-testid="button-countdown"
                    >
                        Iniciar um ciclo
                    </button>
                )
            }
                </>
            )
        
            }
        </>
    );
}


export {
    Countdown
}