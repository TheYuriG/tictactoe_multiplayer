//? Icons
import { TicTacToeIcon } from "../../assets/TicTacToeIcon.tsx";
//? Components
import { PlayButton } from "../UI/PlayButton.tsx";

export function Header() {
  return (
    <nav class="flex items-center justify-between py-2 px-4 bg-blue-200">
      {/* Header icon and text */}
      <a class="flex items-center my-2" href="/">
        {/* Icon */}
        <TicTacToeIcon fill="rgb(30, 64, 175)" size="2em" />
        {/* Logo name */}
        <div class="ml-2 font-bold uppercase text-xl text-center text-blue-800">
          Tic Tac Toe
        </div>
      </a>
      <PlayButton />
    </nav>
  );
}
