import Card from "../Card/Card"
import { useContext } from "react"
import { GameContext } from "../../context/GameContext"

const List = () => {
  const { games, filtered } = useContext(GameContext)

  return (
    <ul className="grid grid-cols-5 max-sm:grid-cols-1 max-md:grid-cols-3 max-lg:grid-cols-4 gap-4">
      {filtered?.length > 0
        ? filtered?.map((game) => <Card game={game} />)
        : games?.map((game) => <Card game={game} />)}
    </ul>
  )
}

export default List
