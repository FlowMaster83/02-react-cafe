import { useState } from 'react';

import type { Votes } from '../../types/votes'
import type { VoteType } from '../../types/votes'

import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';
import css from './App.module.css';

function App() {

  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleVote = (type: VoteType) => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    })
  }

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  return (
    <div className={css.app}>
      <CafeInfo />

      <VoteOptions onVote={handleVote} onReset={resetVotes} />

      <VoteStats />
      <Notification />
    </div>
  )
}

export default App