import { contacts } from "../data/contacts";
import SocialLinks from "./SocialLinks";

export default function Footer() {

  return (
    <footer className="bg-gray-50 dark:bg-mosf-dark-alt border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <p className="text-center text-gray-600 dark:text-gray-400">
          © 2025 Muslim Open Source Foundation - All rights reserved.
        </p>
        <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-2">
          Muslim Open Source Foundation is a Washington State nonprofit corporation pursuing 501(c)(3) status.
        </p>
        
        {/* Legal and Compliance Section */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed text-center">
              Muslim Open Source Foundation is registered with the Washington State Charities Program as required by law. Additional information is available at 1-800-332-4483 or www.sos.wa.gov/charities.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Washington Charity Registration Number: 2012232.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <SocialLinks 
            contacts={contacts}
            className="flex justify-center gap-4"
            iconClassName="w-6 h-6"
          />
        </div>
      </div>
    </footer>
  );
}
