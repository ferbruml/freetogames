import "./styles/global.css"
import GameContextProvider from "./context/GameContext"
import List from "./components/List/List"
import GlobalSearch from "./components/Search/GlobalSearch"
import Email from "./components/Email/Email"

function App() {
  return (
    <div className="bg-zinc-300 max-h-full">
      <GameContextProvider>
        <div className="flex gap-[80rem] items-center mb-4 mt-2">
          <GlobalSearch />
          <Email />
        </div>
        <List />
      </GameContextProvider>
    </div>
  )
}

export default App
