import { createContext, useState, useEffect, ReactNode } from "react"
import api from "../service/api"
import { Game, GameContextData } from "../interfaces/interfaces"

interface ChildrenProviderProps {
  children: ReactNode
}

export const GameContext = createContext({} as GameContextData)

export default function GameContextProvider({
  children,
}: ChildrenProviderProps) {
  const [games, setGames] = useState<Game[]>([])
  const [filtered, setFiltered] = useState<Game[]>([])
  const [selected, setSelected] = useState<Game[]>([])

  const setFilteredGames = (filteredGames: Game[]) => {
    setFiltered(filteredGames)
  }

  const setSelectedGames = (selectedGame: Game) => {
    setSelected([...selected, selectedGame])
  }

  const removeSelectedGame = (id: number) => {
    setSelected(selected.filter((sel) => sel.id !== id))
  }

  useEffect(() => {
    api
      .getData()
      .then((response) => setGames(response.data))
      .catch((error) => console.log("fernanda error = ", error))
  }, [])

  return (
    <GameContext.Provider
      value={{
        games,
        filtered,
        selected,
        setFilteredGames,
        setSelectedGames,
        removeSelectedGame,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
