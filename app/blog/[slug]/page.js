import { blogPosts } from '../../../data/blogPosts';

export default function BlogPost({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800">Post not found</h1>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <div className="flex items-center text-gray-600 mb-8">
        <span className="mr-4">By {post.author}</span>
        <span>{new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</span>
      </div>
      <div className="prose max-w-none">
        {post.content.split('\\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-700">
            {paragraph.trim()}
          </p>
        ))}
      </div>
    </article>
  );
}
