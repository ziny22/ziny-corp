type ProjectFormValues = {
  title: string;
  description: string;
  startDate: string;
  endDate: string | null;
  tags: string[] | null;
  link: string | null;
  repo: string | null;
};

export default function ProjectForm({
  action,
  defaultValues,
}: {
  action: (formData: FormData) => void;
  defaultValues?: ProjectFormValues;
}) {
  return (
    <form action={action} className="flex max-w-lg flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="title" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          제목
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
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="description"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          설명
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          defaultValue={defaultValues?.description}
          className="rounded-lg border border-black/[.08] px-3 py-2 text-sm dark:border-white/[.12] dark:bg-black"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-1 flex-col gap-1.5">
          <label
            htmlFor="startDate"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            시작일
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
            종료일 (진행중이면 비워두세요)
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
      <div className="flex flex-col gap-1.5">
        <label htmlFor="tags" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          태그 (쉼표로 구분, 선택)
        </label>
        <input
          id="tags"
          name="tags"
          type="text"
          defaultValue={defaultValues?.tags?.join(", ") ?? ""}
          className="rounded-lg border border-black/[.08] px-3 py-2 text-sm dark:border-white/[.12] dark:bg-black"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="link" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          사이트 링크 (선택)
        </label>
        <input
          id="link"
          name="link"
          type="url"
          defaultValue={defaultValues?.link ?? ""}
          className="rounded-lg border border-black/[.08] px-3 py-2 text-sm dark:border-white/[.12] dark:bg-black"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="repo" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          저장소 링크 (선택)
        </label>
        <input
          id="repo"
          name="repo"
          type="url"
          defaultValue={defaultValues?.repo ?? ""}
          className="rounded-lg border border-black/[.08] px-3 py-2 text-sm dark:border-white/[.12] dark:bg-black"
        />
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
