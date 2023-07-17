//? Icons
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-right.tsx";
//? Links
import { playLink, registerLink } from "../../data/links.ts";

export function Hero() {
  return (
    <div class="w-full flex px-8 py-10 min-h-[20em] justify-center items-center flex-col gap-8 bg-gradient-to-b from-indigo-600 to-blue-900 rounded-xl text-white drop-shadow-lg">
      <div class="space-y-4 text-center">
        {/* Hero title */}
        <h1 class="text-4xl inline-block text-blue-100 font-bold">
          Fancy a match?
        </h1>
        {/* Hero introduction */}
        <p class="text-xl max-w-lg text-blue-100">
          Play competitively against other players.
        </p>
        {/* Hero call to action */}
        <p class="text-xl max-w-lg text-blue-100">
          Create an account to be able to track your match progress and much
          more!
        </p>
      </div>

      {/* Hero action buttons */}
      <div class="flex flex-col md:flex-row items-center">
        {/* Primary interaction */}
        <a
          href={playLink}
          class="block mt-4 text-blue-500 cursor-pointer inline-flex items-center group text-blue-800 bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold"
        >
          Play now
        </a>
        {/* Secondary interaction */}
        <a
          href={registerLink}
          class="block mt-4 transition-colors text-blue-300 cursor-pointer inline-flex items-center group px-4 py-2 hover:text-blue-100"
        >
          Create an account{" "}
          <IconChevronRight class="inline-block w-5 h-5 transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
