import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMatchday } from '../../../redux/allleagues/actions/actions'
import * as s from './styled'
import { RootState } from '../../../redux/rootReducer'

type Props = {
  onLoading: Dispatch<SetStateAction<boolean>>
}

dayjs().format()

const MatchdayNavigation = ({ onLoading }: Props) => {
  const [date, setDate] = useState(new Date())
  const dispatch = useDispatch()

  useEffect(() => {
    if (date) {
      dispatch(fetchMatchday(date.toISOString().slice(0, 10)))
    }
  }, [dispatch, date])
  const loading = useSelector((state: RootState) => state.matchday.loading)

  useEffect(() => {
    if (!loading) {
      onLoading(false)
    }
  }, [loading])

  return (
    <s.MatchdayNavigation>
      <s.ButtonLeft
        onClick={() => setDate(dayjs(date).subtract(1, 'day').toDate())}
      />
      <s.MatchdayDate>
        {date.toISOString().slice(0, 10)}{' '}
        {new Date().toLocaleString('en-EN', { weekday: 'long' })}
      </s.MatchdayDate>
      <s.ButtonRight
        onClick={() => setDate(dayjs(date).add(1, 'day').toDate())}
      />
    </s.MatchdayNavigation>
  )
}

export default MatchdayNavigation
