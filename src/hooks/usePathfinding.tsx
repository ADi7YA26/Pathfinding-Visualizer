import { useContext } from "react"
import { PathfindingContext } from "../context/PathfindingContext"

const usePathfinding = () => {
  const context = useContext(PathfindingContext)

  if(!context){
    throw new Error("usePathfinding must be used within a PathFindingProvider")
  }
}

export default usePathfinding