import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-off-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-off-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <span className="text-2xl font-bold bg-gradient-to-r from-membook-green to-true-turquoise bg-clip-text text-transparent">
              Membook
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-white/60 mb-12">Last Updated: October 28, 2025</p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to Membook. We are committed to protecting your privacy and ensuring the security of your 
              personal information. This Privacy Policy explains how we collect, use, store, and protect your data 
              when you use the Membook application ("the App").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-4">2.1 Information You Provide</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li><strong>Account Information:</strong> Email address, name, and authentication credentials when you create an account</li>
              <li><strong>User Content:</strong> Screenshots, notes, voice recordings, images, URLs, and other content you save to Membook</li>
              <li><strong>Voice Data:</strong> Audio recordings when you use the voice assistant feature (processed and not permanently stored)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-4">2.2 Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Usage Data:</strong> How you interact with the App, features used, and frequency of use</li>
              <li><strong>Device Information:</strong> Device type, operating system version, unique device identifiers</li>
              <li><strong>Performance Data:</strong> App crashes, errors, and performance metrics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service Delivery:</strong> To provide and maintain the App's core functionality</li>
              <li><strong>AI Processing:</strong> To categorize, organize, and enable search of your content using AI</li>
              <li><strong>Voice Assistant:</strong> To process voice queries and provide intelligent responses</li>
              <li><strong>Personalization:</strong> To customize your experience and improve content organization</li>
              <li><strong>Account Management:</strong> To manage your subscription and authenticate your account</li>
              <li><strong>Improvements:</strong> To analyze usage patterns and improve the App</li>
              <li><strong>Support:</strong> To provide customer support and respond to your inquiries</li>
              <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Data Storage and Security</h2>
            
            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-4">4.1 Data Storage</h3>
            <p className="mb-4">
              Your data is stored securely using Supabase, a secure cloud database platform. Your content is 
              encrypted in transit using industry-standard SSL/TLS encryption.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-4">4.2 Security Measures</h3>
            <p className="mb-4">We implement various security measures including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Encrypted data transmission (HTTPS/TLS)</li>
              <li>Secure authentication using industry-standard protocols</li>
              <li>Regular security updates and monitoring</li>
              <li>Access controls and user authentication</li>
              <li>Secure cloud infrastructure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Third-Party Services</h2>
            <p className="mb-4">Membook integrates with the following third-party services:</p>
            
            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-4">5.1 OpenAI</h3>
            <p className="mb-4">
              We use OpenAI's API to power AI categorization and the voice assistant. Your content is sent to 
              OpenAI for processing but is not used to train their models. OpenAI's data usage policies apply.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-4">5.2 ElevenLabs</h3>
            <p className="mb-4">
              We use ElevenLabs for text-to-speech functionality in the voice assistant. Audio data is processed 
              through their API according to their privacy policy.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-4">5.3 Supabase</h3>
            <p className="mb-4">
              We use Supabase for data storage, authentication, and backend services. Your data is stored on 
              their secure infrastructure.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-4">5.4 Apple Services</h3>
            <p className="mb-4">
              We use Apple Sign In for authentication and Apple's In-App Purchase system for subscription management. 
              Apple's privacy policy applies to these services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Data Sharing and Disclosure</h2>
            <p className="mb-4">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service Providers:</strong> With third-party services mentioned above to provide App functionality</li>
              <li><strong>Legal Requirements:</strong> If required by law, court order, or government regulation</li>
              <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of our users</li>
              <li><strong>Business Transfer:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Your Rights and Choices</h2>
            <p className="mb-4">You have the following rights regarding your data:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Access:</strong> You can access your data anytime through the App</li>
              <li><strong>Deletion:</strong> You can delete your content or close your account at any time</li>
              <li><strong>Correction:</strong> You can edit and update your information</li>
              <li><strong>Export:</strong> You can export your data (contact support for assistance)</li>
              <li><strong>Opt-Out:</strong> You can disable voice features or limit data collection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide services. 
              If you delete your account, we will delete your personal data within 30 days, except where we 
              are required to retain it for legal, accounting, or security purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Children's Privacy</h2>
            <p>
              Membook is not intended for users under the age of 13. We do not knowingly collect personal 
              information from children under 13. If you believe we have collected information from a child 
              under 13, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. International Data Transfers</h2>
            <p>
              Your data may be transferred to and processed in countries other than your country of residence. 
              These countries may have different data protection laws. We ensure appropriate safeguards are in 
              place to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes 
              by posting the new Privacy Policy within the App or via email. Your continued use of the App 
              after such changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Us</h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your data, 
              please contact us:
            </p>
            <p className="mt-4">
              <strong>Email:</strong>{' '}
              <a href="mailto:lpsk5713@gmail.com" className="text-membook-green hover:text-true-turquoise underline">
                lpsk5713@gmail.com
              </a>
            </p>
            <p className="mt-2">
              <strong>Website:</strong>{' '}
              <a href="https://www.memlabs.in" target="_blank" rel="noopener noreferrer" 
                 className="text-membook-green hover:text-true-turquoise underline">
                www.memlabs.in
              </a>
            </p>
          </section>

          <section className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Your Privacy Matters</h2>
            <p>
              At Membook, we believe your memories and data are deeply personal. We are committed to keeping 
              them private and secure. We use your data solely to provide and improve our service, never to 
              sell or exploit it. Your trust is our top priority.
            </p>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-membook-green hover:bg-membook-green/90 text-black font-semibold rounded-full transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Memlabs. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link to="/terms" className="hover:text-white/60 transition-colors">Terms of Use</Link>
            <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;

