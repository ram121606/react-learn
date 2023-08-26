import { useContext } from "react"
import { Context } from "./ContextProvider"

const Result = () => {
  const context = useContext(Context)
  return (
    <>
      {context.state}
    </>
  )
}

export default Result