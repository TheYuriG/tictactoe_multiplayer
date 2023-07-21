import { JSX } from "preact/jsx-runtime";
//? Components
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";

export function Layout({ children }: { children: JSX.Element[] }) {
  return (
    <body
      class="min-h-[100dvh] w-[100dvw] overflow-x-hidden custom-scrollbar bg-gradient-to-b from-blue-400 to-blue-500"
      style="font-family: 'Montserrat', sans-serif;"
    >
      <Header />
      <main class="flex flex-col h-full p-4 mx-auto max-w-screen-lg">
        {...children}
      </main>
      <Footer />
    </body>
  );
}
