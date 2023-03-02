import Image from "../Image/Image"
import { Game } from "../../interfaces/interfaces"

interface GameProps {
  game: Game
}

const Card = ({ game }: GameProps) => {
  return (
    <li 
      className="flex flex-col items-center"
      key={game.id}
    >
      <Image game={game} />
      <p>
        {game.title.length > 25
          ? game.title.substring(0, 24).concat("...")
          : game.title}
      </p>
    </li>
  )
}

export default Card
