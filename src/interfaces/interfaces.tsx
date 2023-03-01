export interface Game {
  id: number
  title: string
  thumbnail: string
  short_description: string
  game_url: string
  genre: string
  platform: string
  publisher: string
  developer: string
  release_date: string
  freetogame_profile_url: string
}

export interface GameContextData {
  games: Game[]
  filtered: Game[]
  selected: Game[]
  setFilteredGames: (filteredGames: Game[]) => void
  setSelectedGames: (selectedGame: Game) => void
  removeSelectedGame: (id: number) => void
}

export interface ModalProps {
  open: boolean
  setOpen: (open: boolean) => void
  game: Game
}

export interface GameProps {
  game: Game
}