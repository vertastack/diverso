import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакт | RS Schildersgroep BV",
  description: "Свържете се с RS Schildersgroep BV. Нашите локации в Зутфен, Ворден, Лохем и други градове. Безплатна консултация и оферта.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

