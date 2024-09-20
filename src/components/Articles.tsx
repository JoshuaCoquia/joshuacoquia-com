import ArticlePreview from "./ArticlePreview";

interface Props {
  articles: any[];
  columns?: 1 | 2 | 3 | "1" | "2" | "3" | undefined;
}

const gridCols = [
  "",
  "lg:grid-cols-1",
  "lg:grid-cols-2",
  "lg:grid-cols-3",
];

export default function Articles(props: Props) {
  const { columns } = props;
  return (
    <ul
      className={`lg:ps-0 grid auto-rows-min gap-8 mt-3 ${gridCols[columns!]}`}
    >
      {props.articles
        .filter((article) => article.data.publishDate.getTime() < Date.now())
        .map((article) => {
          return (
            <li key={article.slug} className="lg:ps-0 h-fit">
              <ArticlePreview
                title={article.data.title}
                publishDate={article.data.publishDate}
                slug={article.slug}
                description={article.data.description}
              />
            </li>
          );
        })}
    </ul>
  );
}
