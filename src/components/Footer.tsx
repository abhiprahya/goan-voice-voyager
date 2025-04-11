
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-goa-ocean text-white mt-20">
      <div className="wave-background h-5 bg-goa-teal"></div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-montserrat mb-4">
              <span className="text-goa-sand">Goa</span>Voice
            </h3>
            <p className="text-gray-300 mb-4 max-w-sm">
              Discover the beauty, culture, and experiences of Goa through our interactive voice-guided platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-goa-coral transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-goa-coral transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-goa-coral transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-goa-coral transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-goa-sand transition-colors">Places</a></li>
              <li><a href="#" className="text-gray-300 hover:text-goa-sand transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-goa-sand transition-colors">Culture</a></li>
              <li><a href="#" className="text-gray-300 hover:text-goa-sand transition-colors">Merchandise</a></li>
              <li><a href="#" className="text-gray-300 hover:text-goa-sand transition-colors">Travel Tips</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <div className="flex items-center space-x-2 mb-2">
              <Mail size={16} />
              <a href="mailto:info@goanvoice.com" className="text-gray-300 hover:text-goa-sand transition-colors">
                info@goanvoice.com
              </a>
            </div>
            <p className="text-gray-300">
              Follow us for updates on new destinations, events, and featured content.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} GoaVoice Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
