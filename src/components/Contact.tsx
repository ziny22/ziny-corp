import { contact } from "@/data/portfolio";

const links = [
  { label: "이메일", href: `mailto:${contact.email}`, value: contact.email },
  { label: "GitHub", href: contact.github, value: contact.github.replace("https://", "") },
  { label: "LinkedIn", href: contact.linkedin, value: contact.linkedin.replace("https://", "") },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          연락처
        </h2>
        <p className="max-w-md text-zinc-600 dark:text-zinc-400">
          함께 일하고 싶으시거나 궁금한 점이 있으시면 편하게 연락 주세요.
        </p>
        <ul className="flex flex-col gap-2 text-sm">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
              >
                {link.label}: {link.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
