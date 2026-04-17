export default function SectionTitle({ title, description }) {
  return (
    <div className="mb-8">
      <h2 className="page-heading">{title}</h2>
      {description ? <p className="page-subtext mt-4 max-w-3xl">{description}</p> : null}
    </div>
  );
}