// 1회성 스크립트: /admin에 로그인할 계정을 Supabase Auth에 직접 생성합니다.
// 이메일/비밀번호는 터미널에서 직접 입력받아 채팅/파일에 남기지 않습니다.
// 실행: npm run admin:create-user
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error(".env.local에 NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY가 필요합니다.");
  process.exit(1);
}

const rl = createInterface({ input: stdin, output: stdout });

async function main() {
  const email = await rl.question("관리자 이메일: ");
  const password = await rl.question("관리자 비밀번호 (8자 이상): ");
  rl.close();

  const admin = createClient(supabaseUrl!, serviceRoleKey!, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) {
    console.error("생성 실패:", error.message);
    process.exit(1);
  }

  console.log(`계정 생성 완료: ${data.user.email} (id: ${data.user.id})`);
  console.log("이제 /login에서 로그인할 수 있습니다.");
}

main();
