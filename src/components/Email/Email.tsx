import axios from "axios";
import { FormEvent, useContext, useState } from "react"
//import { GameContext } from "../../context/GameContext";

/*
  TODO: should send an array of selected games
*/
const Email = () => {
  const [ email, setEmail ] = useState<string>("")
  //const { selected } = useContext(GameContext)

  async function send() {
    const formData = new FormData()
    formData.append('email', email)

    try {
      const result = await axios.post('http://localhost:3035/send', formData, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      })
    }
    catch (error) {
      console.warn(error)
    }
  }

  function handleSend(event: FormEvent) {
    event.stopPropagation()

    send()
  }

  return (
    <div className="flex max-sm:flex-col gap-4">
      <label 
        htmlFor="email" 
        className="sr-only"
      >
        Email
      </label>
      <input
        className="min-w-[50%] bg-zinc-200 rounded p-2 text-zinc-500"
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button 
        className="border rounded bg-zinc-400 w-20 text-zinc-800" 
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  )
}

export default Email