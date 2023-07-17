//? Icons
import IconAlarm from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/alarm.tsx";
import IconDeviceGamepad from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/device-gamepad.tsx";
import IconChartBar from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chart-bar.tsx";
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-right.tsx";
//? Links
import {
  accountStatsLink,
  leaderboardLink,
  playLink,
} from "../../data/links.ts";

const featureItems = [
  // Play against anyone
  {
    icon: IconDeviceGamepad,
    description:
      "Play against anyone in the world, anytime, from your home or anywhere else using your phone!",
    link: playLink,
    linkText: "Play now!",
  },
  // Track your stats
  {
    icon: IconAlarm,
    description:
      "Track your fastest wins, best MMR win, longest win streak, best session, and more!",
    link: accountStatsLink,
    linkText: "Stats",
  },
  // Compete
  {
    icon: IconChartBar,
    description:
      "Compare yourself against other players, find your weekly, monthly and overall position, and more.",
    link: leaderboardLink,
    linkText: "Leaderboards",
  },
];

export function Features() {
  return (
    <div class="flex flex-col md:flex-row gap-8 bg-blue-200 rounded-lg my-4 p-8 drop-shadow-md">
      {featureItems.map(({ icon, description, link, linkText }) => {
        return (
          <div class="flex-1 space-y-2">
            {/* Icon */}
            <div class="bg-indigo-700 inline-block p-3 rounded-xl text-white">
              {icon({ class: "w-10 h-10" })}
            </div>
            {/* Description text */}
            <p class="text-xl text-indigo-900">
              {description}
            </p>
            {/* Link to another page */}
            <a class="block" href={link}>
              <p class="text-blue-500 cursor-pointer hover:underline inline-flex items-center group">
                {linkText}
                <IconChevronRight class="inline-block w-5 h-5 transition group-hover:translate-x-0.5" />
              </p>
            </a>
          </div>
        );
      })}
    </div>
  );
}
