import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to HealthyHue
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your trusted source for health and wellness insights, helping you live a balanced and vibrant life.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
