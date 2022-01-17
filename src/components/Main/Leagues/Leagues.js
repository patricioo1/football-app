import React, { useEffect } from 'react'
import { SingleLeague, CountryFlag } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllLeaguesRequest, setSelectedLeague } from '../../../redux/allleagues/actions';
import { useNavigate } from 'react-router-dom'
// import { getSingleLeagueInfo } from '../../API/API';
// import {getMatchday} from './../../API/API'

const Leagues = () => {
  const leagues = useSelector(state => state.leagues.allLeagues)
  const loading = useSelector(state => state.leagues.loading)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllLeaguesRequest())
  }, [loading, dispatch])

    return (
      <>
      {/* <button onClick={async () => console.log(await getSingleTeam())}>KLIK</button> */}
        {loading ? leagues.map((item) => {
          const countryFlag = item.area.ensignUrl;
          return (
            <SingleLeague key={item.id} onClick={() => {dispatch(setSelectedLeague(item)); navigate(`/league/${item.id}`)}}>
              <p>{item.area.name}: {item.name}</p>
              {countryFlag ? <CountryFlag src={item.area.ensignUrl} alt="Flaga kraju" /> : null}
            </SingleLeague>
          )
        }) : ''}
      </>
    );
};

export default Leagues;