import ArticlePreview from "./ArticlePreview.astro";

interface Props {
    articles: any[];
}

export default function Articles(props: Props) {
    console.log('h')
    return (
        props.articles.filter(article => article.data.publishDate.getTime() < Date.now()).map(article => {
            return <li className="lg:ps-0 h-fit">
                <ArticlePreview title={article.data.title} publishDate={article.data.publishDate} slug={article.slug} description={article.data.description}/>
            </li>;
        })
    );
}