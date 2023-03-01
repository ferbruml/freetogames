import { FormEvent, useContext } from "react"
import GameContext from "../../context/GameContext"

const Sort = () => {
  const { games } = useContext(GameContext)

  function handleOrdering(event: FormEvent) {
    event.stopPropagation()

    if (event.currentTarget.id === 'order-by-release-date') {

    }
    else if (event.currentTarget.id === 'order-by-publisher') {

    }
  }

  return (
    <>
      <button id="order-by-release-date" className="border rounded bg-zinc-400 w-20" onClick={handleOrdering}>
        Ordenar por data de lançamento
      </button>
      <button id="order-by-publisher" className="border rounded bg-zinc-400 w-20" onClick={handleOrdering}>
        Ordenar por criador
      </button>
    </>
  )
}

export default Sort