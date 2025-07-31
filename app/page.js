import Link from 'next/link';
import { blogPosts } from '../data/blogPosts';

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 3);
  const latestPosts = blogPosts.slice(3, 9);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-primary-600 text-white rounded-2xl p-8 md:p-12 overflow-hidden">
        <div className="relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Journey to <br />
            <span className="text-primary-200">Holistic Wellness</span> <br />
            Starts Here
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Discover evidence-based insights on health, nutrition, fitness, and mindful living.
            Join our community of wellness enthusiasts.
          </p>
          <Link 
            href="/blog"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Explore Articles
          </Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-50"></div>
      </section>

      {/* Featured Posts */}
      <section>
        <h2 className="font-heading text-3xl font-bold mb-8">Featured Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readingTime} min read</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary-600">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      <section>
        <h2 className="font-heading text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <div className="flex gap-4 items-start">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <span className="text-sm text-primary-600 mb-2 block">{post.category}</span>
                  <h3 className="font-heading font-semibold group-hover:text-primary-600">
                    {post.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-secondary-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Get the latest health insights and wellness tips delivered to your inbox.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
