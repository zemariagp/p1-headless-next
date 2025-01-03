interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  const contentWithoutManualFooter = content.split(
    `<p><strong>PÁGINA UM &#8211; <em>O jornalismo independente (só) depende dos leitores.</em></strong></p>`
  )[0];

  return (
    <div
      className="prose prose-lg max-w-none font-body-sans text-lg space-y-8 [&_figcaption]:text-sm [&_figcaption]:italic [&_a]:underline [&_a]:text-[var(--color-primary)] [&_hr]:last-of-type:hidden"
      dangerouslySetInnerHTML={{ __html: contentWithoutManualFooter }}
    />
  );
}
