'use client';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© {new Date().getFullYear()} HealthyHue. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
