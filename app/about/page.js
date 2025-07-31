export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About HealthyHue</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to HealthyHue, your trusted companion on the journey to a healthier, more balanced life.
          We believe that wellness is not just about diet and exercise—it's about nurturing your mind,
          body, and spirit in harmony.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is to provide reliable, science-based information about health and wellness,
          making it accessible and actionable for everyone. We strive to empower our readers with
          knowledge that helps them make informed decisions about their health.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">What We Offer</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
          <li className="mb-2">Evidence-based health and wellness articles</li>
          <li className="mb-2">Practical tips for healthy living</li>
          <li className="mb-2">Expert insights and latest research</li>
          <li className="mb-2">Inspiring success stories</li>
        </ul>
      </div>
    </div>
  );
}
