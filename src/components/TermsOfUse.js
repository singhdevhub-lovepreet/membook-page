import React from 'react';
import { Link } from 'react-router-dom';

function TermsOfUse() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
        <p className="text-white/60 mb-12">Last Updated: October 28, 2025</p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using Membook ("the App"), you agree to be bound by these Terms of Use. 
              If you do not agree to these terms, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
            <p>
              Membook is a personal knowledge management application that helps you save, organize, and recall your memories, 
              notes, screenshots, and other digital content using AI-powered categorization and search capabilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Subscription and Billing</h2>
            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-4">3.1 Free Tier</h3>
            <p className="mb-4">
              Membook offers a free tier with limited features, including up to 10 daily screenshot processing and 
              5 voice assistant interactions per day.
            </p>
            
            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-4">3.2 Pro Subscription</h3>
            <p className="mb-4">
              The Membook Pro subscription is a monthly auto-renewing subscription that provides:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Unlimited screenshot processing</li>
              <li>20 voice assistant queries daily</li>
              <li>Advanced AI features</li>
              <li>Cloud sync across devices</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-4">3.3 Payment and Renewal</h3>
            <p className="mb-4">
              Payment will be charged to your Apple ID account at confirmation of purchase. The subscription 
              automatically renews unless cancelled at least 24 hours before the end of the current period. 
              Your account will be charged for renewal within 24 hours prior to the end of the current period.
            </p>
            
            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-4">3.4 Cancellation</h3>
            <p>
              You can manage and cancel your subscription by going to your App Store account settings. 
              Cancellation takes effect at the end of the current billing period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate information when using the App</li>
              <li>Keep your account credentials secure</li>
              <li>Use the App only for lawful purposes</li>
              <li>Not attempt to circumvent any limitations or restrictions</li>
              <li>Not upload or share illegal, harmful, or inappropriate content</li>
              <li>Not reverse engineer or attempt to extract the source code of the App</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Privacy and Data</h2>
            <p>
              Your use of Membook is also governed by our{' '}
              <Link to="/privacy" className="text-membook-green hover:text-true-turquoise underline">
                Privacy Policy
              </Link>
              . We take your privacy seriously and use industry-standard security measures to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
              The App and all its contents, features, and functionality are owned by Memlabs and are protected 
              by international copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You retain ownership of any content you upload to Membook. By using the App, you grant us a 
              license to process and store your content solely for the purpose of providing the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Disclaimers and Limitations</h2>
            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-4">7.1 Service Availability</h3>
            <p className="mb-4">
              We strive to keep Membook available at all times, but we do not guarantee uninterrupted access. 
              The App may be unavailable during maintenance, updates, or due to circumstances beyond our control.
            </p>
            
            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-4">7.2 AI Accuracy</h3>
            <p className="mb-4">
              Membook uses AI to categorize and process your content. While we strive for accuracy, AI-generated 
              categorizations and responses may not always be perfect. You should verify important information.
            </p>
            
            <h3 className="text-xl font-semibold text-white/90 mb-3 mt-4">7.3 Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, Memlabs shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
              directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to Membook at any time, with or without 
              notice, for conduct that we believe violates these Terms or is harmful to other users, us, or 
              third parties, or for any other reason.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of any material changes by posting 
              the new Terms within the App or through other communications. Your continued use of the App after 
              such changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard 
              to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
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

export default TermsOfUse;

