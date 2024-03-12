import type { CollectionEntry } from "astro:content";
import BlogCard from "./BlogCard";
import { useState } from "react";

type BlogGridProps = {
  articleList: CollectionEntry<"posts">[];
};

const BlogGrid = ({ articleList }: BlogGridProps) => {
  const filterBy = ["All", "Random", "Technical"];
  const [categoryState, setCategoryState] = useState<string>("All");

  const filteredArticle =
    categoryState === "All"
      ? articleList
      : articleList.filter(
          article => article.data.blogType === categoryState.toLowerCase(),
        );

  return (
    <section className="mt-8">
      <div className="flex items-center justify-end gap-4">
        <p className="text-sm font-bold italic">Filter by</p>
        {filterBy.map(category => (
          <button
            className={`rounded border border-black px-2 py-1 text-base text-black hover:bg-gray-300 dark:border-white dark:text-white dark:hover:bg-gray-600 ${category === categoryState ? "bg-gray-300 dark:bg-gray-600" : ""}`}
            onClick={() => setCategoryState(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {filteredArticle.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {filteredArticle.map(article => (
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
      ) : (
        <p className="text-sm italic">
          The articles with this category is not exist.
        </p>
      )}
    </section>
  );
};

export default BlogGrid;
