export const getPlanetById = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
    .then(res => res.json())
    .then(data => data)
}