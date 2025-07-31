import { blogPosts } from '../../../data/blogPosts';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - HealthyHue',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} - HealthyHue`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [post.coverImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default function BlogPost({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const contentHtml = post.content
    .split('\\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => {
      if (line.startsWith('##')) {
        return `<h2 className="text-2xl font-bold mt-8 mb-4">${line.slice(2).trim()}</h2>`;
      }
      if (line.startsWith('- ')) {
        return `<li className="ml-6">${line.slice(2).trim()}</li>`;
      }
      return `<p className="mb-4">${line}</p>`;
    })
    .join('\\n');

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-gray-600">
          <div className="flex items-center">
            {post.author.image && (
              <img 
                src={post.author.image} 
                alt={post.author.name}
                className="w-10 h-10 rounded-full mr-3"
              />
            )}
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm">{post.author.credentials}</p>
            </div>
          </div>
          <span>•</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
        </div>
      </header>

      {post.coverImage && (
        <div className="mb-8">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
      )}

      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <footer className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">Category:</span>
            <span className="ml-2 text-primary-600 font-medium">{post.category}</span>
          </div>
        </div>
      </footer>
    </article>
  );
}
