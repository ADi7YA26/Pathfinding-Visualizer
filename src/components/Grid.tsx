import { twMerge } from "tailwind-merge";
import usePathfinding from "../hooks/usePathfinding"
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import Tile from "./Tile";

const Grid = () => {
  const { grid } = usePathfinding();

  return (
    <div className={twMerge(
      // Base classes
      "flex flex-center flex-col justify-center border-sky-300",
      // Control Grid height
      `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
      // Controlling grid width
      `lg:min-h-[${MAX_COLS * 17}px] md:min-h-[${MAX_COLS * 15}px] xs:min-h-[${MAX_COLS * 8}px] min-h-[${MAX_COLS * 7}px]`
    )}>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((tile, tileIndex) => {
            const { isEnd, isStart, isPath, isTraversed, isWall } = tile;
            return (
              <Tile
                key={tileIndex}
                row = {tile.row}
                col={tile.col}
                isStart={isStart}
                isEnd={isEnd}
                isPath={isPath}
                isTraversed={isTraversed}
                isWall={isWall}
              />
            )
          })}
        </div>
      ))}
      Grid
    </div>
  )
}

export default Grid