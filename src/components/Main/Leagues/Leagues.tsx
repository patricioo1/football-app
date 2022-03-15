import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SingleLeague, CountryFlag } from './styled'
import {
  fetchAllLeaguesRequest,
  setSelectedLeague,
} from '../../../redux/allleagues/actions/actions'
import { RootState } from '../../../redux/rootReducer'

type LeagueProperties = {
  name: string,
  area: {
    name: string,
    ensignUrl: string
  },
  id: number,
}

const Leagues: React.FC = () => {
  const leagues = useSelector((state: RootState) => state.leagues.allLeagues)
  const loading = useSelector((state: RootState) => state.leagues.loading)
  const error = useSelector((state: RootState) => state.leagues.error)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllLeaguesRequest())
  }, [loading, dispatch])

  const loadedData: boolean = !loading && error === null && leagues;

  return (
    loadedData ? (
      leagues.map((item: LeagueProperties) => {
        const countryFlag = item.area.ensignUrl
        return (
          <SingleLeague
            key={item.id}
            onClick={() => {
              dispatch(setSelectedLeague(item));
              navigate(`/league/${item.id}`)
            }}
          >
            <p>
              {item.area.name}: {item.name}
            </p>
            {countryFlag ? (
              <CountryFlag src={countryFlag} alt="Flaga kraju" />
            ) : null}
          </SingleLeague>
        )
      })
    ) : (
      <p>{error}</p>
    )
  )
}

export default Leagues
