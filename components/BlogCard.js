'use client';
import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ title, excerpt, date, slug, category, readingTime, coverImage }) => {
  return (
    <Link href={`/blog/${slug}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          {coverImage && (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            {category && (
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
                {category}
              </span>
            )}
            {readingTime && (
              <span className="text-gray-500 text-sm">{readingTime} min read</span>
            )}
          </div>
          <h2 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
            {title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
          <div className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
