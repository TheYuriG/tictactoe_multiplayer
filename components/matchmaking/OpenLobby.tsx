import { OpenLobby_type } from "../../types/OpenLobby_type.ts";

export function OpenLobby({ lobby }: { lobby: OpenLobby_type }) {
  return (
    <a
      href={"/play/" + lobby.lobbyIdentifier}
      key={lobby.lobbyCreatedAt}
    >
      <div class="flex flex-col my-1 px-4 py-2 bg-blue-300 hover:bg-blue-400 border-2 border-blue-500 rounded">
        <h4 class="text-xl text-left font-bold">
          {lobby.playerName}
        </h4>
        <div class="flex flex-row items-center text-sm">
          <p class="mr-2">{lobby.gameMode}</p>&bull;
          <p class="ml-2">
            {new Date(lobby.lobbyCreatedAt).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </a>
  );
}
