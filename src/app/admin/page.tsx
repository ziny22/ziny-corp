import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">관리자</h1>
      <div className="flex gap-4">
        <Link
          href="/admin/careers"
          className="rounded-lg border border-black/[.08] px-4 py-2 text-sm font-medium hover:border-indigo-400 dark:border-white/[.12] dark:hover:border-indigo-500"
        >
          경력 관리
        </Link>
        <Link
          href="/admin/projects"
          className="rounded-lg border border-black/[.08] px-4 py-2 text-sm font-medium hover:border-indigo-400 dark:border-white/[.12] dark:hover:border-indigo-500"
        >
          프로젝트 관리
        </Link>
      </div>
    </div>
  );
}
