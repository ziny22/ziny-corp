import { notFound } from "next/navigation";
import { getCareerById } from "@/db/queries";
import CareerForm from "../../CareerForm";
import { updateCareer } from "../../actions";

export default async function EditCareerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const career = await getCareerById(Number(id));

  if (!career) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">경력 수정</h1>
      <CareerForm action={updateCareer.bind(null, career.id)} defaultValues={career} />
    </div>
  );
}
