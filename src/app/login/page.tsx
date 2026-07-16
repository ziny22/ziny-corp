import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <form
        action={login}
        className="flex w-full max-w-sm flex-col gap-4 rounded-xl border border-black/[.08] p-8 dark:border-white/[.12]"
      >
        <h1 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">관리자 로그인</h1>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            이메일
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-lg border border-black/[.08] px-3 py-2 text-sm dark:border-white/[.12] dark:bg-black"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            비밀번호
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="rounded-lg border border-black/[.08] px-3 py-2 text-sm dark:border-white/[.12] dark:bg-black"
          />
        </div>
        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
        <button
          type="submit"
          className="mt-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
        >
          로그인
        </button>
      </form>
    </div>
  );
}
