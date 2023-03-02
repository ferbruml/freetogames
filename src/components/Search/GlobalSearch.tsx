import { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import { Game } from "../../interfaces/interfaces"

const GlobalSearch = () => {
  const { games, setFilteredGames } = useContext(GameContext)

  /* 
    TODO: make this filter dynamic, iterating an array of specific
    keys like:
      const array = ["title", "short_description", "publisher"]
    and using it to make the search by filter
  */
  const searchForGames = (filter: string) => {
    setFilteredGames(
      games.filter(
        (game: Game) =>
          game.title.toUpperCase().includes(filter.toUpperCase()) ||
          game.short_description.toUpperCase().includes(filter.toUpperCase()) ||
          filter === ""
      )
    )
  }

  return (
    <>
      <label 
        htmlFor="filter" 
        className="sr-only"
      >
        Search
      </label>
      <input
        className="bg-zinc-200 rounded min-w-[50%] p-2 text-zinc-500"
        id="filter"
        name="filter"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          searchForGames(e.target.value)
        }}
      />
    </>
  )
}

export default GlobalSearch
