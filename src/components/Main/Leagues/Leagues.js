import React, { useEffect } from 'react'
import { SingleLeague, CountryFlag } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllLeaguesRequest, setSelectedLeague } from '../../../redux/allleagues/actions/actions';
import { useNavigate } from 'react-router-dom'

const Leagues = () => {
  const leagues = useSelector(state => state.leagues.allLeagues)
  const loading = useSelector(state => state.leagues.loading)
  const error = useSelector(state => state.leagues.error)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllLeaguesRequest())
  }, [loading, dispatch])

  const loadedData = !loading && error === null;

    return (
      <>
        {loadedData ? leagues.map((item) => {
          const countryFlag = item.area.ensignUrl;
          return (
            <SingleLeague key={item.id} onClick={() => {dispatch(setSelectedLeague(item)); navigate(`/league/${item.id}`)}}>
              <p>{item.area.name}: {item.name}</p>
              {countryFlag ? <CountryFlag src={countryFlag} alt="Flaga kraju" /> : null}
            </SingleLeague>
          )
        }) : <p>{error}</p>}
      </>
    );
};

export default Leagues;