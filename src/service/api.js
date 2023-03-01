import axios from 'axios'

export default {
  getData: () =>
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_BASE_URL}/games`,
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    }),
}