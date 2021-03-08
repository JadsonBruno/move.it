/**
 * IMPORTS
 */
import {useContext} from 'react';
import {ChallengesContext} from '../../contexts/ChallengesContext';
import styles from '../../styles/components/CompletedChallenges.module.css';


/**
 * CODE
 */

/**
 * I render the completed challenges component.
 *
 * returns: completed challenges component
 */
function CompletedChallenges ()
{
    // get challenges completed data from context
    const {challengesCompleted} = useContext(ChallengesContext);

    // return component
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}


/**
 * EXPORTS
 */
export {
    CompletedChallenges
}