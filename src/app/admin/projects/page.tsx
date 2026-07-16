import Link from "next/link";
import { getProjects } from "@/db/queries";
import { deleteProject } from "./actions";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">프로젝트 관리</h1>
        <Link
          href="/admin/projects/new"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
        >
          새 프로젝트 추가
        </Link>
      </div>
      <ul className="flex flex-col gap-3">
        {projects.map((project) => (
          <li
            key={project.id}
            className="flex items-center justify-between gap-4 rounded-xl border border-black/[.08] p-4 dark:border-white/[.12]"
          >
            <div>
              <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                {project.title}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {project.startDate} ~ {project.endDate ?? "현재"}
              </p>
            </div>
            <div className="flex shrink-0 gap-2 text-sm font-medium">
              <Link
                href={`/admin/projects/${project.id}/edit`}
                className="text-indigo-600 hover:underline dark:text-indigo-400"
              >
                수정
              </Link>
              <form action={deleteProject.bind(null, project.id)}>
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
