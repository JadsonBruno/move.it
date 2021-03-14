/**
 * IMPORTS
 */
import {useContext} from 'react';
import {ChallengesContext} from '../../contexts/ChallengesContext';
import styles from '../../styles/components/LevelUpModal.module.css';


/**
 * CODE
 */

/**
 * I render the level up modal component.
 *
 * returns: level up modal component
 */
function LevelUpModal ()
{
    // get data from context
    const {level, closeLevelUpModal} = useContext(ChallengesContext);

    // return component
    return (
        <div
            className={styles.overlay}
            data-testid="level-up-modal"
        >
            <div className={styles.container}>
                <header>
                    {level}
                </header>
                <strong>
                    Parabéns
                </strong>

                <p>
                    Você alcançou um novo level.
                </p>

                <button 
                    type="button"
                    onClick={closeLevelUpModal}
                >
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
    );
}


/**
 * EXPORTS
 */
export {
    LevelUpModal
}
