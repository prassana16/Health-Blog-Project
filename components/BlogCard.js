'use client';
import Link from 'next/link';

const BlogCard = ({ title, excerpt, date, slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${slug}`}>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-gray-600 transition-colors">
            {title}
          </h2>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          <div className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
