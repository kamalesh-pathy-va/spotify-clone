import { useState } from "react"

export const useToggle = (initalState = false) => {
  const [state, setState] = useState(initalState)

  const toogleState = () => {
    setState((prevState) => !prevState)
  }

  return [state, toogleState]
}
