import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <iframe
        src="/x9_slides.pdf#toolbar=0&navpanes=0&scrollbar=0"
        className="w-full h-screen"
        title="X9 Slides"
      />
    </main>
  );
}
