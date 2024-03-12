import type { CollectionEntry } from "astro:content";
import BlogCard from "./BlogCard";

type BlogGridProps = {
  articleList: CollectionEntry<"posts">[];
};

const BlogGrid = ({ articleList }: BlogGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {articleList.map(article => (
        <BlogCard
          key={article.slug}
          title={article.data.title}
          slug={article.slug}
          publishDate={article.data.publishDate}
          heroImage={article.data.heroImage.src}
          blogType={article.data.blogType}
        />
      ))}
    </div>
  );
};

export default BlogGrid;
