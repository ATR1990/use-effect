import { GET_PLANET_LIST } from "constants/url"

export const getPlanetById = (id) => {
  return fetch(`${GET_PLANET_LIST}${id}`)
    .then(res => res.json())
    .then(data => data)
}