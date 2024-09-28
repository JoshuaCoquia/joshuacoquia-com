interface Props {
  description?: string;
  publishDate: Date;
  slug: string;
  title: string;
}

export default function ArticlePreview(props: Props) {
  const { slug, publishDate, title, description } = props;
  return (
    <article>
      <a href={"/articles/" + slug}>
        <div className="rounded-2xl border-oceanblue-950 bg-oceanblue-950">
          <time
            className="text-xs lg:text-sm"
            dateTime={publishDate.toISOString()}
          >
            {publishDate.toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <h3 className="text-xl lg:my-0 font-bold font-montserrat">{title}</h3>
          {description && <p>{description}</p>}
        </div>
      </a>
    </article>
  );
}
