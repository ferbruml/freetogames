import axios from "axios";
import { FormEvent, useContext, useState } from "react"

/*
  TODO: should send an array of selected games, probably with FormData
*/
const Email = () => {
  const [ email, setEmail ] = useState<string>('')

  async function send() {
    try {
      const result = await axios.post('http://localhost:3035/send', {email: `${email}`}, {
        headers: {
          'content-type': 'application/json',
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