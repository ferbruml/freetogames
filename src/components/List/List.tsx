import { useContext } from "react"
import Card from "../Card/Card"
import { GameContext } from "../../context/GameContext"
import { Game } from "../../interfaces/interfaces"

const List = () => {
  const { games, filtered, setGames } = useContext(GameContext)

  function orderByDate() {
    setGames(
      ([] as Game[])
        .concat(games)
        .sort(
          (a, b) =>
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
        )
    )
  }

  function orderByPublisher() {
    setGames(
      ([] as Game[])
        .concat(games)
        .sort((a, b) => a.publisher.toLowerCase().localeCompare(b.publisher.toLowerCase()))
    )
  }

  return (
    <>
      <div className="flex gap-4 text-zinc-800">
        <button onClick={orderByDate}>By date</button>
        <button onClick={orderByPublisher}>Publisher</button>
      </div>
      <ul className="grid grid-cols-5 max-sm:grid-cols-1 max-md:grid-cols-3 max-lg:grid-cols-4 gap-4">
        {filtered?.length > 0
          ? filtered?.map((game) => <Card game={game} />)
          : games?.map((game) => <Card game={game} />)}
      </ul>
    </>
  )
}

export default List
