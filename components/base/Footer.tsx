//? Icons
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import { TicTacToeIcon } from "../../assets/TicTacToeIcon.tsx";
//? Links
import {
  accountLink,
  accountStatsLink,
  discordLink,
  leaderboardLink,
  playLink,
  registerLink,
} from "../../data/links.ts";
import { DiscordIcon } from "../../assets/DiscordIcon.tsx";

const sitemap = [
  {
    title: "About you",
    children: [
      // Create an account
      { name: "Register", href: registerLink },
      // Check account
      { name: "Account", href: accountLink },
      // See overall player stats
      { name: "Statistics", href: accountStatsLink },
    ],
  },
  {
    title: "Other People",
    children: [
      // Play now
      { name: "Play now", href: playLink },
      // Connect with people on Discord
      {
        name: "Make friends",
        href: discordLink,
      },
      // Check leaderboards
      {
        name: "Leaderboards",
        href: leaderboardLink,
      },
    ],
  },
];

// Color pallete: bg = indigo-800; title: blue-400; text&icon: blue-200;
export function Footer() {
  return (
    <div class="bg-indigo-800 flex flex-col md:flex-row w-full gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        {/* Icon, brand name */}
        <div class="flex items-center mb-1 gap-2">
          {/* Brand icon with fill blue-400 */}
          <TicTacToeIcon size="2.5em" fill="rgb(96, 165, 250)" />
          {/* Brand name */}
          <div class="font-bold text-2xl text-blue-400">
            Tic Tac Toe
          </div>
        </div>
        {/* Slogan */}
        <div class="text-blue-200">
          Play, Compete, Win
        </div>

        {/* Trademark, icons */}
        <div class="flex flex-col text-blue-200 mt-2 space-y-1">
          <div class="text-xs">
            Copyright © 2023{" "}
            <a
              href="https://github.com/TheYuriG"
              target="_blank"
              class="underline text-blue-400 hover:text-blue-300"
            >
              TheYuriG
            </a>
            <p>
              All right reserved.
            </p>
          </div>

          {/* Icons */}
          <div class="flex shrink-0">
            <a
              href="https://github.com/TheYuriG/tictactoe_multiplayer"
              class="hover:text-blue-300"
              target="_blank"
              aria-label="GitHub"
              title="Star it maybe?"
            >
              <BrandGithub />
            </a>
            <a
              class="hover:text-blue-300"
              href={discordLink}
              title="Connect with other players on Discord"
            >
              <DiscordIcon fill="currentColor" size="2em" />
            </a>
          </div>
        </div>
      </div>

      {/* Sitemap */}
      {sitemap.map((item) => (
        // Sitemap title
        <div class="mb-4" key={item.title}>
          <div class="font-bold text-lg text-blue-400">{item.title}</div>
          <ul class="mt-2">
            {/* Sitemap links */}
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-blue-200 hover:text-blue-100"
                  href={child.href}
                  target="_blank"
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
