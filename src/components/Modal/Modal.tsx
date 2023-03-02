import * as Dialog from "@radix-ui/react-dialog"
import GameDetails from "../GameDetails/GameDetails"
import { ModalProps } from "../../interfaces/interfaces"

const Modal = ({ open, setOpen, game }: ModalProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto">

    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

        <Dialog.Content className="fixed p-10 bg-zinc-300 rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-3xl leading-tight font-extrabold text-center">
            {game.title}
          </Dialog.Title>

          <GameDetails game={game} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    </div>
  )
}

export default Modal
