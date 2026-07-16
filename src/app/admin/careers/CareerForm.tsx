type CareerFormValues = {
  company: string;
  title: string;
  startDate: string;
  endDate: string | null;
};

export default function CareerForm({
  action,
  defaultValues,
}: {
  action: (formData: FormData) => void;
  defaultValues?: CareerFormValues;
}) {
  return (
    <form action={action} className="flex max-w-lg flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          회사/조직명
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          defaultValue={defaultValues?.company}
          className="rounded-lg border border-black/[.08] px-3 py-2 text-sm dark:border-white/[.12] dark:bg-black"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="title" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          직책
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          defaultValue={defaultValues?.title}
          className="rounded-lg border border-black/[.08] px-3 py-2 text-sm dark:border-white/[.12] dark:bg-black"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-1 flex-col gap-1.5">
          <label
            htmlFor="startDate"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            입사일
          </label>
          <input
            id="startDate"
            name="startDate"
            type="date"
            required
            defaultValue={defaultValues?.startDate}
            className="rounded-lg border border-black/[.08] px-3 py-2 text-sm dark:border-white/[.12] dark:bg-black"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <label htmlFor="endDate" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            퇴사일 (재직중이면 비워두세요)
          </label>
          <input
            id="endDate"
            name="endDate"
            type="date"
            defaultValue={defaultValues?.endDate ?? ""}
            className="rounded-lg border border-black/[.08] px-3 py-2 text-sm dark:border-white/[.12] dark:bg-black"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-2 self-start rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
      >
        저장
      </button>
    </form>
  );
}
