import { formatDate } from "scripts/formatDate";

type BlogCardProps = {
  title: string;
  slug: string;
  heroImage: string;
  publishDate: string;
  blogType: string;
};

const BlogCard = ({
  title,
  slug,
  heroImage,
  publishDate,
  blogType,
}: BlogCardProps) => {
  return (
    <a href={`/blog/${slug}`} className="group hover:-translate-y-0.5">
      <div className="flex h-full flex-col justify-between gap-4 rounded border border-gray-400 dark:border-white">
        <img
          src={heroImage}
          alt="hero-image"
          className="aspect-video object-cover"
        />
        <div className="space-y-2 p-2">
          <div className="flex items-center gap-4">
            <p className="italic">{formatDate(publishDate)}</p>
            <p className="rounded bg-black px-1 py-0.5 text-xs font-semibold text-white dark:bg-white dark:text-black md:text-sm">
              {blogType.charAt(0).toUpperCase() + blogType.slice(1)}
            </p>
          </div>
          <h4>{title}</h4>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
