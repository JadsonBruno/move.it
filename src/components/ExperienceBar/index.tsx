/**
 * IMPORTS
 */
import {useContext} from 'react';
import {ChallengesContext} from '../../contexts/ChallengesContext';
import styles from '../../styles/components/ExperienceBar.module.css';


/**
 * CODE
 */

/**
 * I render the experience bar component.
 *
 * returns: experience bar component
 */
function ExperienceBar ()
{
    // get data from context
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);

    // format data to percentage
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    // return component
    return (
        <header
            className={styles.experienceBar}
            data-testid="experience-bar"
        >
            <span>8 xp</span>
            <div>
                <div style={{width: `${percentToNextLevel}%`}}/>

                <span
                    className={styles.currentExperience}
                    style={{left: `${percentToNextLevel}%`}}
                >
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}


/**
 * EXPORTS
 */
export {
    ExperienceBar
}
