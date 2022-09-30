import { useEffect, useMemo, useState } from "react"

export const useRequest = (request) => {
  const initialState = useMemo(() => ({
    data: null,
    loading: true,
    error: null
  }), [])

  const [ dataState, setDataState ] = useState(initialState)

  useEffect(() => {
    setDataState(initialState)

    let cancelled = false

    request()
      .then(data => !cancelled && setDataState({
        data,
        loading: false,
        error: null
      }))
      .catch(error => !cancelled && setDataState({
        data: null,
        loading: false,
        error
      }))

    return () => {
      cancelled = true
    }
  }, [ request, initialState ])

  return dataState
}