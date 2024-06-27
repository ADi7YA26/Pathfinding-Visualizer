import { useContext } from "react"
import { TileContext } from "../context/TileContext"

const useTile = () => {
  const context = useContext(TileContext)

  if(!context){
    throw new Error("useSpeed must be used within a useSpeed")
  }

  return context
}

export default useTile