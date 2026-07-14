import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 bg-zinc-50 px-6 py-24 dark:bg-zinc-950/50"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          기술 스택
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-black/[.08] bg-white px-3 py-1.5 text-sm text-zinc-700 dark:border-white/[.12] dark:bg-black dark:text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
