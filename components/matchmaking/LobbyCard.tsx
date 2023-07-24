import { JSX } from "preact/jsx-runtime";

export function LobbyCard(
  { title, children }: { title: string; children: JSX.Element },
) {
  return (
    <div class="flex-1 h-[40em] overflow-hidden px-8 py-2 bg-blue-200/25 rounded-lg border-4 border-blue-600 text-center">
      <h3 class="my-2 text-xl font-bold uppercase">{title}</h3>
      {children}
    </div>
  );
}
