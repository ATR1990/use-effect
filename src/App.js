import React, { useState } from 'react'

import { PlanetInfo } from "components/planetInfo"

const App = () => {
  const [value, setValue] = useState(1)
  const [visible, setVisible] = useState(true)

  if (visible) {
    return (
      <>
        <button onClick={() => setValue(v => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>Hide</button>
        <PlanetInfo id={value} />
        {/*<HookCounter value={value} />*/}
        {/*<Notification />*/}
      </>
    )
  } else {
    return <button onClick={() => setVisible(true)}>Show</button>
  }
}

/*const HookCounter = ({ value }) => {

  useEffect(() => {
    console.log('update')
    return () => console.log('unmount')
  }, [value])

  return (
    <p>{ value }</p>
  )
}*/

/*const Notification = () => {

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 2500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      { visible && <p>Hello</p> }
    </>
  )
}*/

export default App