import React from "react";
import { formatDate } from "scripts/formatDate";

type BlogCardProps = {
  title: string;
  slug: string;
  heroImage: string;
  publishDate: string;
};

const BlogCard = ({ title, slug, heroImage, publishDate }: BlogCardProps) => {
  return (
    <a href={`/blog/${slug}`} className="group hover:-translate-y-0.5">
      <div className="flex h-full flex-col justify-between gap-4 rounded border border-gray-400 dark:border-white">
        <img
          src={heroImage}
          alt="hero-image"
          className="aspect-video object-cover"
        />
        <div className="space-y-2 p-2">
          <p className="italic">{formatDate(publishDate)}</p>
          <h4>{title}</h4>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
