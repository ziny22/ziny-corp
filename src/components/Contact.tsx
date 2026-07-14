import { contact } from "@/data/portfolio";

const links = [
  { label: "이메일", href: `mailto:${contact.email}`, value: contact.email },
  { label: "전화", href: `tel:+${contact.phone.replace(/-/g, "")}`, value: contact.phone },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          연락처
        </h2>
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
