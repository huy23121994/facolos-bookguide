interface Props {
  label: string;
  title: string;
  description?: string;
  titleHtml?: string;
}

export default function SectionHeader({ label, title, description, titleHtml }: Props) {
  return (
    <>
      <span className="section-label">{label}</span>
      {titleHtml ? (
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />
      ) : (
        <h2 className="section-title">{title}</h2>
      )}
      {description && <p className="section-desc">{description}</p>}
    </>
  );
}
