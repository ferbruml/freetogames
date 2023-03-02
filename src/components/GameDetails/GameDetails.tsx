import { GameProps } from "../../interfaces/interfaces"

const GameDetails = ({ game }: GameProps) => {
  return (
    <div className="flex flex-col items-center">
      <img className="mt-4 mb-4" src={game.thumbnail} alt="" />
      <label
        htmlFor="short_description"
        className="font-semibold leading-tight mt-4 flex items-center"
      >
        Descrição curta
      </label>
      <p className="mt-4" id="short_description">
        {game.short_description}
      </p>

      <label
        htmlFor="game_url"
        className="font-semibold leading-tight mt-4 flex items-center"
      >
        URL do game
      </label>
      <a className="mt-4" id="game_url" href={game.game_url}>
        {game.game_url}
      </a>

      <table className="max-sm:overflow-auto table-fixed max-sm:grid-cols-1 w-full text-sm text-center m-4">
        <thead className="text-xs">
          <tr>
            <th className="p-8">Criador</th>
            <th>Genero</th>
            <th>Plataforma</th>
            <th>Desenvolvedor</th>
            <th className="leading-8">Data lançamento</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          <tr>
            <td>{game.publisher}</td>
            <td>{game.genre}</td>
            <td>{game.platform}</td>
            <td>{game.developer}</td>
            <td>{game.release_date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )  
}

export default GameDetails
