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

      <table className="table-fixed w-full text-sm text-center m-4">
        <thead className="text-xs">
          <tr>
            <th>Criador</th>
            <th>Genero</th>
            <th>Plataforma</th>
            <th>Desenvolvedor</th>
            <th>Data de lancamento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{game.publisher}</td>
            <td>{game.genre}</td>
            <td>{game.platform}</td>
            <td>{game.developer}</td>
            <td>{game.release_date}</td>
          </tr>
        </tbody>
        {/*
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

        <label
          htmlFor="publisher"
          className="font-semibold leading-tight mt-4 flex items-center"
        >
          Criador
        </label>
        <p className="mt-4" id="publisher">
          {game.publisher}
        </p>

        <label
          htmlFor="genre"
          className="font-semibold leading-tight mt-4 flex items-center"
        >
          Genero
        </label>
        <p className="mt-4" id="genre">
          {game.genre}
        </p>

        <label
          htmlFor="platform"
          className="font-semibold leading-tight mt-4 flex items-center"
        >
          Plataforma
        </label>
        <p className="mt-4" id="platform">
          {game.platform}
        </p>

        <label
          htmlFor="developer"
          className="font-semibold leading-tight mt-4 flex items-center"
        >
          Desenvolvedor
        </label>
        <p className="mt-4">{game.developer}</p>

        <label
          htmlFor="release_date"
          className="font-semibold leading-tight mt-4"
        >
          Data de lancamento
        </label>
        <p className="mt-4 flex items-center">{game.release_date}</p>    
        */}
      </table>
    </div>
  )  
}

export default GameDetails