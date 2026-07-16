import Link from "next/link";
import { getCareers } from "@/db/queries";
import { deleteCareer } from "./actions";

export default async function AdminCareersPage() {
  const careers = await getCareers();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">경력 관리</h1>
        <Link
          href="/admin/careers/new"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
        >
          새 경력 추가
        </Link>
      </div>
      <ul className="flex flex-col gap-3">
        {careers.map((career) => (
          <li
            key={career.id}
            className="flex items-center justify-between gap-4 rounded-xl border border-black/[.08] p-4 dark:border-white/[.12]"
          >
            <div>
              <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                {career.company} {career.title}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {career.startDate} ~ {career.endDate ?? "현재"}
              </p>
            </div>
            <div className="flex shrink-0 gap-2 text-sm font-medium">
              <Link
                href={`/admin/careers/${career.id}/edit`}
                className="text-indigo-600 hover:underline dark:text-indigo-400"
              >
                수정
              </Link>
              <form action={deleteCareer.bind(null, career.id)}>
                <button type="submit" className="text-red-600 hover:underline dark:text-red-400">
                  삭제
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
