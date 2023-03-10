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
      <a className="mt-4 text-sky-500/100" id="game_url" href={game.game_url}>
        {game.game_url}
      </a>

      <div className="sm:overflow-x-auto p-4">
        <table className="table-fixed w-full text-sm text-center m-4">
          <thead className="text-xs">
            <tr className="break-words">
              <th className="sm:w-auto">Criador</th>
              <th>Genero</th>
              <th>Plataforma</th>
              <th>Desenvolvedor</th>
              <th className="leading-8">Data lançamento</th>
              <th>Profile URL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="break-words">
              <td>{game.publisher}</td>
              <td>{game.genre}</td>
              <td>{game.platform}</td>
              <td>{game.developer}</td>
              <td>{game.release_date}</td>
              <td className="text-sky-500/100">
                <a href={`${game.freetogame_profile_url}`}>
                  {game.freetogame_profile_url}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )  
}

export default GameDetails
