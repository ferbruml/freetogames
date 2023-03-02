import List from "./components/List/List"
import GlobalSearch from "./components/Search/GlobalSearch"
import Email from "./components/Email/Email"
import GameContextProvider from "./context/GameContext"
import "./styles/global.css"

function App() {
  return (
    <div className="bg-zinc-300 max-h-full">
      <GameContextProvider>
        <div className="flex max-sm:flex-col gap-4 items-center mb-4 mt-2">
          <GlobalSearch />
          <Email />
        </div>
        <List />
      </GameContextProvider>
    </div>
  )
}

export default App
