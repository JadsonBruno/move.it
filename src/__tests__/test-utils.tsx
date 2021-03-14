import React, { FC } from 'react';
import {render} from '@testing-library/react';
import {RenderOptions} from '@testing-library/react';
import {CountdownProvider} from '../contexts/CountdownContex';
import {ChallengesProvider} from '../contexts/ChallengesContext';

const AllTheProviders: FC = ({ children }) => {

  Object.defineProperty(window, 'Notification', Object.create({
    requestPermission: Promise.resolve(jest.fn())
  }));

    return (
      <ChallengesProvider
       challengesCompleted={0}
       currentExperience={0}
       level={0}
      >
          <CountdownProvider>
            {children}
          </CountdownProvider>
      </ChallengesProvider>
    )
}

const customRender = (
    ui: JSX.Element,
    options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options })
  
export * from '@testing-library/react'

export { customRender as render }
