/**
 * IMPORTS
 */
import {useContext} from 'react'
import {ChallengesContext} from '../../contexts/ChallengesContext'
import styles from '../../styles/components/Profile.module.css'


/**
 * CODE
 */

/**
 * I render the profile component.
 *
 * returns: profile component
 */
function Profile()
{
    // get data from context
    const {level} = useContext(ChallengesContext);

    // return component
    return(
        <div
            className={styles.profileContainer}
            data-testid="profile"
        >
            <img src='http://github.com/JadsonBruno.png' alt='Jadson Bruno'/>
            <div>
                <strong>Jadson Bruno</strong>
                <p>
                    <img src='icons/level.svg' alt='Level'/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}


/**
 * EXPORTS
 */
export {
    Profile
}
