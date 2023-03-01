import "./styles/global.css"
import GameContextProvider from "./context/GameContext"

function App() {
  return <div className="bg-zinc-300 max-h-full">
    <GameContextProvider>

    </GameContextProvider>
  </div>
}

export default App
