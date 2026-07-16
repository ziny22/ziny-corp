import CareerForm from "../CareerForm";
import { createCareer } from "../actions";

export default function NewCareerPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">새 경력 추가</h1>
      <CareerForm action={createCareer} />
    </div>
  );
}
