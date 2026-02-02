import Image from "next/image";

const sites = [
  {
    name: "Mandala Adventures",
    url: "https://mandalaadventures.com",
    description: "Travel & Adventure",
  },
  {
    name: "NAPCO Pumps",
    url: "https://napcopumps.com",
    description: "Industrial Pumps & Equipment",
  },
  {
    name: "Pixels Foto",
    url: "https://pixels-foto.vercel.app",
    description: "Photography Portfolio",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-16 font-sans">
      <main className="flex w-full max-w-md flex-col items-center gap-12">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="In Your Grill"
          width={280}
          height={100}
          priority
          className="h-auto w-auto max-w-[280px]"
        />

        {/* Site Links */}
        <ul className="flex w-full flex-col gap-4">
          {sites.map((site) => (
            <li key={site.url}>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full flex-col rounded-lg border border-neutral-200 bg-white px-5 py-4 transition-all hover:border-neutral-300 hover:shadow-sm"
              >
                <span className="text-lg font-medium text-neutral-900 group-hover:text-orange-600 transition-colors">
                  {site.name}
                </span>
                <span className="text-sm text-neutral-500">
                  {site.description}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <p className="text-sm text-neutral-400">
          Built by Taylor Warnick
        </p>
      </main>
    </div>
  );
}
