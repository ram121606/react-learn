import { useContext } from "react"
import { Context } from "./ContextProvider"

const Result = () => {
  const context = useContext(Context)
  
  return (
    <>
      Hello {context.state}!!
    </>
  )
}

export default Result