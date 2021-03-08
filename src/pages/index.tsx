/**
 * IMPORTS
 */
import Head from 'next/head';
import {GetServerSideProps} from 'next';
import {ChallengeBox} from '../components/ChallengeBox';
import {CompletedChallenges} from '../components/CompletedChallenges';
import {Countdown} from '../components/Countdown';
import {ExperienceBar} from "../components/ExperienceBar";
import {Profile} from '../components/Profile';
import {CountdownProvider} from '../contexts/CountdownContex';
import {ChallengesProvider} from '../contexts/ChallengesContext';
import styles from '../styles/pages/Home.module.css';


/**
 * TYPES
 */
interface IHome
{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}



/**
 * EXPORTS
 */

/**
 * I render the home page component.
 *
 * returns: home page component
 */
export default function Home(
  {level, challengesCompleted, currentExperience}: IHome
): JSX.Element
{
  return (
    <ChallengesProvider
      level={level}
      challengesCompleted={challengesCompleted}
      currentExperience={currentExperience}
    >
      <div className={styles.container}>
        <Head>
          <title>
            Início | Move.it
          </title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}


/**
 * I get the server side props before generate the page.
 * 
 * :param ctx: context object param
 *
 * returns: server side props
 */
export const getServerSideProps: GetServerSideProps = async (ctx) =>
{
  // get data from cookies
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

  // return props
  return {
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
