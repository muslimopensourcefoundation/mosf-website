import { useEffect } from "react";

export default function Donate() {
  useEffect(() => {
    document.title = "Donate | MOSF";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Support the Muslim Open Source Foundation
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            MOSF builds ethical, high-quality open-source technology and learning resources for the global Muslim community. Your support helps us continue this work and expand accessible tools for learners and developers.
          </p>
        </header>

        <section className="space-y-6">
          <div className="w-full">
            <div style={{ position: 'relative', overflow: 'hidden', height: '450px', width: '100%' }}>
              <iframe
                title="Donation form powered by Zeffy"
                style={{
                  position: 'absolute',
                  border: 0,
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: '100%',
                  height: '100%'
                }}
                src="https://www.zeffy.com/embed/donation-form/general-support-8"
                {...({
                  allowPaymentRequest: true,
                  allowTransparency: true
                } as React.IframeHTMLAttributes<HTMLIFrameElement>)}
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Other Ways to Give
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            For direct transfers, email{" "}
            <a
              href="mailto:contact@muslimopensource.org"
              className="text-mosf-navy-dark dark:text-mosf-navy-300 hover:text-mosf-navy-700 dark:hover:text-mosf-navy-200 underline font-medium transition-colors"
            >
              contact@muslimopensource.org
            </a>
            .
          </p>
        </section>

        <div className="pt-8 border-t border-gray-300 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            MOSF is a registered nonprofit organization in Washington State. We have not yet applied for federal 501(c)(3) status, so donations are not currently tax-deductible.
          </p>
        </div>
      </main>
    </div>
  );
}

