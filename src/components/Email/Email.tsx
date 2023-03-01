import axios from "axios";
import { FormEvent, useContext } from "react"
import { GameContext } from "../../context/GameContext";

const Email = () => {
  const { selected } = useContext(GameContext)

  async function send() {
    const formData = new FormData()
    formData.append('image', selected[0].thumbnail)
    formData.append('description', selected[0].short_description)

    //console.log('fernanda image = ', formData.get("image"))
    //console.log("fernanda description = ", formData.get("description"))

    try {
      const result = await axios.post('http://localhost:3047/send', formData, {
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
    <div className="flex gap-2">
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        className="min-w-[50%] bg-zinc-200 rounded"
        id="email"
        name="email"
        type="text"
        placeholder="Email"
      />
      <button className="border rounded bg-zinc-400 w-20" onClick={handleSend}>
        Enviar
      </button>
    </div>
  )
}

export default Email