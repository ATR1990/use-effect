import { useCallback } from "react"

import { useRequest } from "hooks/use-request"
import { getPlanetById } from "api/getPlanetById"

export const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanetById(id), [id])

  return useRequest(request)
}