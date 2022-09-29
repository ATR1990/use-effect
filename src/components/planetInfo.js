import React from "react"

import { usePlanetInfo } from "hooks/use-planet-info"

export const PlanetInfo = ({ id }) => {
  const { data, loading, error } = usePlanetInfo(id)

  if (error) {
    return <div>Something is wrong</div>
  }

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <>{ id } - { data.name }</>
  )
}