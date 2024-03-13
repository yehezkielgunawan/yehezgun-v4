import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { FaCheck, FaTwitter } from "react-icons/fa6";

type ArticleCopyButtonProps = {
  title: string;
};

const ArticleCopyButton = ({ title }: ArticleCopyButtonProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const twitterCaption = `${title} by @YehezGun`;
  const twitterUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        className="flex items-center justify-center gap-2 rounded bg-black p-1 text-xs font-semibold text-white hover:shadow-md hover:shadow-gray-600 dark:bg-white dark:text-black dark:hover:shadow-gray-200 md:text-sm"
        onClick={() => handleCopyLink()}
      >
        {isCopied ? (
          <>
            <FaCheck size={16} />
            Copied
          </>
        ) : (
          <>
            <FaCopy size={16} />
            Copy Blog Link
          </>
        )}
      </button>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterCaption)}&url=${twitterUrl}`}
        target="_blank"
        className="flex items-center justify-center gap-2 rounded bg-black p-1 text-xs text-white hover:shadow-md hover:shadow-gray-600 dark:bg-white dark:text-black dark:hover:shadow-gray-200 md:text-sm"
      >
        <FaTwitter size={16} /> Share to Twitter
      </a>
    </div>
  );
};

export default ArticleCopyButton;
