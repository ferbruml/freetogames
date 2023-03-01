import "./styles/global.css"
import GameContextProvider from "./context/GameContext"
import List from "./components/List/List"

function App() {
  return (
    <div className="bg-zinc-300 max-h-full">
      <GameContextProvider>
        <List />
      </GameContextProvider>
    </div>
  )
}

export default App
