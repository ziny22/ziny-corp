import ProjectForm from "../ProjectForm";
import { createProject } from "../actions";

export default function NewProjectPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">새 프로젝트 추가</h1>
      <ProjectForm action={createProject} />
    </div>
  );
}
