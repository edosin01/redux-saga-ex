import { useMemo } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import useAction from '../action/user'

function useUser() {
  const data = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators(useAction, dispatch),
    [dispatch],
  )
  return {
    actions,
    data,
  }
}
export default useUser