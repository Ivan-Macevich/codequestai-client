
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">CodeQuestAI</h3>
            <p className="text-gray-600 max-w-xs">
              Revolutionizing interview preparation with AI-powered practice sessions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>contact@codequestai.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>123 AI Street, Tech Valley</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 CodeQuestAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
