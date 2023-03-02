import React from "react"
import Modal from "../Modal/Modal"
import { Game } from "../../interfaces/interfaces"
import { FaHeart, FaRegHeart, FaInfo } from "react-icons/fa"
interface ActionsProps {
  setIsGameSelected: (selected: Boolean) => void
  selected: Boolean
  game: Game
}

const Actions = ({ setIsGameSelected, selected, game }: ActionsProps) => {
  const [open, setOpen] = React.useState<boolean>(false)

  function handleModalOpen() {
    setOpen(true)
  }

  /*
    TODO: make icons more pleasant instead of just painting them white
  */
  return (
    <div className="flex gap-3 absolute top-[20px] right-[20px]">
      <button
        onClick={() => {
          setIsGameSelected(!selected)
        }}
      >
        {selected ? (
          <FaHeart className="bg-white" />
        ) : (
          <FaRegHeart className="bg-white" />
        )}
      </button>
      <button onClick={handleModalOpen}>
        <FaInfo className="bg-white" />
      </button>
      {
        open 
        ? <Modal open={open} setOpen={setOpen} game={game} /> 
        : null
      }
    </div>
  )
}

export default Actions
