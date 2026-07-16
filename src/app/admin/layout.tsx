import Link from "next/link";
import { requireUser } from "@/lib/auth";
import { logout } from "@/app/login/actions";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireUser();

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <nav className="mb-10 flex items-center justify-between border-b border-black/[.08] pb-4 dark:border-white/[.12]">
        <div className="flex gap-4 text-sm font-medium">
          <Link href="/admin/careers" className="text-zinc-700 hover:underline dark:text-zinc-300">
            경력 관리
          </Link>
          <Link href="/admin/projects" className="text-zinc-700 hover:underline dark:text-zinc-300">
            프로젝트 관리
          </Link>
          <Link href="/" className="text-zinc-500 hover:underline dark:text-zinc-500">
            사이트로 돌아가기
          </Link>
        </div>
        <form action={logout}>
          <button type="submit" className="text-sm text-zinc-500 hover:underline dark:text-zinc-500">
            로그아웃
          </button>
        </form>
      </nav>
      {children}
    </div>
  );
}
