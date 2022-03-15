import React from 'react'
import { SingleLeagueNavigation } from './styled'

type Props = {
  children: React.ReactNode,
  // eslint-disable-next-line
  defaultActiveKey: number
}

const SingleLeagueNav: React.FC<Props> = ({ children }: Props) => <SingleLeagueNavigation>{children}</SingleLeagueNavigation>

export default SingleLeagueNav
