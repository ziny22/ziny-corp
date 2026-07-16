import Image from "next/image";
import Link from "next/link";
import { getCareers } from "@/db/queries";
import { profile } from "@/data/portfolio";
import { getCurrentUser } from "@/lib/auth";

function formatYearMonth(date: string) {
  const [year, month] = date.split("-");
  return `${year}.${month}`;
}

export default async function Hero() {
  const [careers, user] = await Promise.all([getCareers(), getCurrentUser()]);

  return (
    <section
      id="about"
      className="flex min-h-screen scroll-mt-16 items-center justify-center px-6 py-24"
    >
      <div className="grid w-full max-w-3xl grid-cols-1 gap-3 text-center sm:grid-cols-[160px_1fr] sm:items-start sm:gap-x-8 sm:gap-y-3 sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:col-start-2 sm:row-start-1 sm:items-start">
          <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400">
            {profile.role}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
            {profile.name}
          </h1>
          <p className="text-lg font-bold text-zinc-600 dark:text-zinc-400">{profile.tagline}</p>
        </div>
        <Image
          src={profile.avatar}
          alt={`${profile.name} 프로필 사진`}
          width={160}
          height={160}
          priority
          unoptimized
          className="mx-auto h-40 w-40 shrink-0 rounded-full object-cover shadow-lg sm:col-start-1 sm:row-start-2 sm:mx-0"
        />
        <div className="flex max-w-xl flex-col gap-3 sm:col-start-2 sm:row-start-2">
          {profile.bio.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-7 text-zinc-600 dark:text-zinc-400"
            >
              {paragraph}
            </p>
          ))}
          <hr className="mt-7 w-full border-t border-zinc-300 dark:border-zinc-700" />
          <div className="mt-7 flex w-full items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">경력</h2>
            {user && (
              <Link
                href="/admin/careers/new"
                className="text-xs font-medium text-indigo-600 hover:underline dark:text-indigo-400"
              >
                + 경력 추가
              </Link>
            )}
          </div>
          <ul className="flex w-full list-disc flex-col gap-2 pl-5 text-left">
            {careers.map((career) => (
              <li
                key={career.id}
                className="text-base leading-7 text-zinc-600 dark:text-zinc-400"
              >
                <span className="font-medium text-zinc-950 dark:text-zinc-50">
                  {formatYearMonth(career.startDate)} ~{" "}
                  {career.endDate ? formatYearMonth(career.endDate) : "현재"}
                </span>{" "}
                {career.company} {career.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
