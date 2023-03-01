import { useState, useContext } from "react"
import Actions from "../Actions/Actions"
import { GameContext } from "../../context/GameContext"
import { GameProps } from "../../interfaces/interfaces"

const Image = ({ game }: GameProps) => {
  const [isHovered, setIsHovered] = useState<Boolean>(false)
  const [isSelected, setIsSelected] = useState<Boolean>(false)
  const { setSelectedGames, removeSelectedGame } = useContext(GameContext)

  const src: string = `${game.thumbnail}`
  const alt: string = `${game.title}`

  function setIsGameSelected(selected: Boolean) {
    setIsSelected(selected)
    selected ? setSelectedGames(game) : removeSelectedGame(game.id)
  }

  return (
    <div
      className="relative"
      onMouseOver={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}
    >
      <img
        className="cursor-pointer m-2 rounded-lg ttransform transition duration-500 hover:scale-110"
        src={src}
        alt={alt}
      />
      {isHovered && (
        <Actions
          setIsGameSelected={setIsGameSelected}
          selected={isSelected}
          game={game}
        />
      )}
    </div>
  )
}

export default Image
