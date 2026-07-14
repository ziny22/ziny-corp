import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="about"
      className="flex min-h-screen scroll-mt-16 flex-col items-center justify-center gap-8 px-6 py-24 text-center sm:flex-row sm:text-left"
    >
      <Image
        src={profile.avatar}
        alt={`${profile.name} 프로필 사진`}
        width={160}
        height={160}
        priority
        unoptimized
        className="h-40 w-40 shrink-0 rounded-full object-cover shadow-lg"
      />
      <div className="flex max-w-xl flex-col items-center gap-3 sm:items-start">
        <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400">
          {profile.role}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
          {profile.name}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">{profile.tagline}</p>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">{profile.bio}</p>
      </div>
    </section>
  );
}
