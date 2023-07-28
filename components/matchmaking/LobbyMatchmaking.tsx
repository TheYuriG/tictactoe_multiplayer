//? Components
import { OpenLobby } from "./OpenLobby.tsx";
//? Interface
import type { OpenLobby_type } from "../../types/OpenLobby_type.ts";

export function LobbyMatchmaking({ lobbies }: { lobbies: OpenLobby_type[] }) {
  if (lobbies.length === 0) {
    return <div>No lobbies available!</div>;
  }

  return (
    <div class="flex flex-col h-full overflow-auto">
      {lobbies.map((lobby) => (
        <OpenLobby key={lobby.lobbyIdentifier} lobby={lobby} />
      ))}
    </div>
  );
}
