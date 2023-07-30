//? Create customized Head with appropriate meta tags
import { Head } from "$fresh/runtime.ts";
//? Components
import { Layout } from "../components/base/Layout.tsx";
import { BackgroundBlob } from "../components/UI/BackgroundBlob.tsx";
import { LobbyCard } from "../components/matchmaking/LobbyCard.tsx";
import { LobbyMatchmaking } from "../components/matchmaking/LobbyMatchmaking.tsx";
//? Interface
import type { OpenLobby_type } from "../types/OpenLobby_type.ts";

const lobbiesInProgress: OpenLobby_type[] = [{
  playerName: "John",
  lobbyCreatedAt: Date.now(),
  gameMode: "Competitive",
  lobbyIdentifier: "1234578",
}, {
  playerName: "Mom",
  lobbyCreatedAt: Date.now() - 12000,
  gameMode: "Just for fun",
  lobbyIdentifier: "21567",
}, {
  playerName: "Poppy",
  lobbyCreatedAt: Date.now() - 64000,
  gameMode: "Learning",
  lobbyIdentifier: "87845142",
}, {
  playerName: "Maria",
  lobbyCreatedAt: Date.now() - 89000,
  gameMode: "Just for fun",
  lobbyIdentifier: "321547",
}, {
  playerName: "Angela",
  lobbyCreatedAt: Date.now() - 112000,
  gameMode: "Learning",
  lobbyIdentifier: "859472",
}];

export default function Home() {
  return (
    <>
      <Head>
        <title>Find a game | Tic Tac Toe</title>
      </Head>
      <Layout>
        <BackgroundBlob />
        <h2 class="my-4 text-center text-4xl font-bold uppercase">
          Lobbies browser
        </h2>
        <div class="flex w-full space-x-4 my-4">
          <LobbyCard title="Host a lobby">
            <p>AAAA</p>
          </LobbyCard>
          <LobbyCard title="Join an existing lobby">
            <LobbyMatchmaking lobbies={lobbiesInProgress} />
          </LobbyCard>
        </div>
      </Layout>
    </>
  );
}
