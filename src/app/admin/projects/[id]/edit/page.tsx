import { notFound } from "next/navigation";
import { getProjectById } from "@/db/queries";
import ProjectForm from "../../ProjectForm";
import { updateProject } from "../../actions";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectById(Number(id));

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">프로젝트 수정</h1>
      <ProjectForm action={updateProject.bind(null, project.id)} defaultValues={project} />
    </div>
  );
}
