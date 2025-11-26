import { useEffect } from "react";
import ProfilePhotoContainer from "../components/ProfilePhotoContainer";
import SocialLinks from "../components/SocialLinks";

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us | MOSF";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About Us
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Meet the team behind the Muslim Open Source Foundation
          </p>
        </header>

        <section className="space-y-8">
          {/* Beder Bourahmah Profile */}
          <div className="bg-white dark:bg-mosf-dark-alt border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Photo placeholder - will be replaced when photo is provided */}
              <ProfilePhotoContainer photoUrl="/images/profiles/beder-bourahmah.jpg" />

              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Beder Bourahmah
                  </h2>
                  <p className="text-xl text-mosf-navy-dark dark:text-mosf-navy-300 font-medium">
                    Executive Director and Founder
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Bio
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Beder Bourahmah is a software engineer and backend tech lead with full-stack experience in manufacturing, fintech, and blockchain industries, specializing in scalable backend systems. His passions at work are related to ethical technology and building accessible educational tools for global Muslim communities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Why MOSF?
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      I founded MOSF to create a global hub for open-source, faith-aligned technology and to empower Muslims everywhere through transparent, ethical, and accessible digital tools. I believe open knowledge and community collaboration are essential to uplifting the ummah.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Professional Focus Areas
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      <li className="px-3 py-1 bg-mosf-navy-50 dark:bg-mosf-navy-900/30 text-mosf-navy-dark dark:text-mosf-navy-300 rounded-full text-sm font-medium">
                        Full-stack engineering
                      </li>
                      <li className="px-3 py-1 bg-mosf-navy-50 dark:bg-mosf-navy-900/30 text-mosf-navy-dark dark:text-mosf-navy-300 rounded-full text-sm font-medium">
                        Open source ecosystems
                      </li>
                      <li className="px-3 py-1 bg-mosf-navy-50 dark:bg-mosf-navy-900/30 text-mosf-navy-dark dark:text-mosf-navy-300 rounded-full text-sm font-medium">
                        Ethical technology
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Location
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Pullman, Washington, USA
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Connect
                    </h3>
                    <SocialLinks
                      contacts={{
                        linkedin: "https://www.linkedin.com/in/beder-b-402487123/",
                        github: "https://github.com/BederBourahmah",
                        "github-mosf": "https://github.com/bederbourahmah-mof",
                        email: "beder.bourahmah@muslimopensource.org"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Zahra Hanifah Khoerunnisa Profile */}
          <div className="bg-white dark:bg-mosf-dark-alt border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Photo placeholder */}
              <ProfilePhotoContainer />

              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Zahra Hanifah Khoerunnisa
                  </h2>
                  <p className="text-xl text-mosf-navy-dark dark:text-mosf-navy-300 font-medium">
                    Secretary
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Bio
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      I am passionate about digital branding and communication that balances clarity, modesty, and healing-friendly values. My background includes research, workflow documentation, and community support initiatives focused on Muslim wellbeing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Why MOSF?
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      I was drawn to MOSF because of its mission to empower Muslim communities through open source collaboration and technology, which aligns with my values of authenticity and service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Professional Focus Areas
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      <li className="px-3 py-1 bg-mosf-navy-50 dark:bg-mosf-navy-900/30 text-mosf-navy-dark dark:text-mosf-navy-300 rounded-full text-sm font-medium">
                        Digital branding
                      </li>
                      <li className="px-3 py-1 bg-mosf-navy-50 dark:bg-mosf-navy-900/30 text-mosf-navy-dark dark:text-mosf-navy-300 rounded-full text-sm font-medium">
                        Communication design
                      </li>
                      <li className="px-3 py-1 bg-mosf-navy-50 dark:bg-mosf-navy-900/30 text-mosf-navy-dark dark:text-mosf-navy-300 rounded-full text-sm font-medium">
                        Muslim community support
                      </li>
                      <li className="px-3 py-1 bg-mosf-navy-50 dark:bg-mosf-navy-900/30 text-mosf-navy-dark dark:text-mosf-navy-300 rounded-full text-sm font-medium">
                        Open source collaboration
                      </li>
                      <li className="px-3 py-1 bg-mosf-navy-50 dark:bg-mosf-navy-900/30 text-mosf-navy-dark dark:text-mosf-navy-300 rounded-full text-sm font-medium">
                        Nonprofit initiatives
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Location
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Bandung, West Java, Indonesia
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Connect
                    </h3>
                    <SocialLinks
                      contacts={{
                        linkedin: "https://www.linkedin.com/in/zahra-khoerunnisa-61b881243/"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

