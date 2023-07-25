//? Icons
import IconPlayerPlay from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/player-play.tsx";
//? Links
import { playLink } from "../../data/links.ts";

export function PlayButton() {
  return (
    <a
      href={playLink}
      class="px-3 py-2 bg-indigo-700 text-blue-200 transition-all duration-800 ease-in-out font-bold rounded-lg hover:(bg-indigo-800 scale-105) flex gap-2"
    >
      Play now
      <IconPlayerPlay class="w-6 h-6" color="rgb(191, 219, 254)" />
    </a>
  );
}
