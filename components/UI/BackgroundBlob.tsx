function randomizedNumbers30to70() {
  return Math.floor(Math.random() * 40) + 30;
}

export function BackgroundBlob() {
  return (
    <div
      class="absolute right-[-10em] top-40 -z-10 bg-gradient-to-tl from-indigo-800 to-indigo-500 w-[25em] h-[60dvh]"
      style={`border-radius: ${randomizedNumbers30to70()}% ${randomizedNumbers30to70()}% ${randomizedNumbers30to70()}% ${randomizedNumbers30to70()}% / ${randomizedNumbers30to70()}% ${randomizedNumbers30to70()}% ${randomizedNumbers30to70()}% ${randomizedNumbers30to70()}%`}
    >
    </div>
  );
}
