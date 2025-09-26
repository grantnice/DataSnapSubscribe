import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="mb-4">Privacy Policy for DataSnap Chrome Extension</h1>
            <p className="text-muted-foreground">
              <strong>Effective Date:</strong> September 26, 2025<br />
              <strong>Last Updated:</strong> September 26, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="mb-4">Overview</h2>
              <p className="text-muted-foreground mb-4">
                DataSnap ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Chrome extension that extracts and visualizes web data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4">Information We Collect</h2>

              <div className="mb-6">
                <h3 className="mb-2">Account Information</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li><strong>Email address</strong> - When you sign up or sign in with Google OAuth or email</li>
                  <li><strong>Authentication data</strong> - Encrypted tokens for secure access</li>
                  <li><strong>Subscription status</strong> - Your current plan and usage limits</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="mb-2">Usage Data</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li><strong>Extraction history</strong> - Count of data extractions performed</li>
                  <li><strong>Export activity</strong> - Number and types of data exports</li>
                  <li><strong>Website sources</strong> - URLs where you extracted data (for your personal history)</li>
                  <li><strong>Extension preferences</strong> - Your settings and customizations</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="mb-2">Extracted Data</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li><strong>Table content</strong> - Data you choose to extract from websites</li>
                  <li><strong>Metadata</strong> - Timestamps and source information for your extractions</li>
                  <li><strong>Processed data</strong> - Charts and visualizations you create</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li><strong>Provide the service</strong> - Extract, process, and visualize web data</li>
                <li><strong>Manage your account</strong> - Authentication and subscription management</li>
                <li><strong>Track usage limits</strong> - Enforce free tier limits and subscription benefits</li>
                <li><strong>Improve the service</strong> - Analyze usage patterns to enhance functionality</li>
                <li><strong>Customer support</strong> - Respond to your questions and technical issues</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4">Data Storage and Security</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li><strong>Storage location</strong> - Your data is securely stored using Supabase cloud infrastructure</li>
                <li><strong>Encryption</strong> - All data is encrypted in transit and at rest</li>
                <li><strong>Access controls</strong> - Only you can access your extracted data</li>
                <li><strong>Retention</strong> - Data is retained while your account is active plus 30 days after deletion</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4">Data Sharing</h2>
              <div className="mb-6">
                <p className="text-muted-foreground mb-4">We do <strong>NOT</strong>:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Sell your personal information to third parties</li>
                  <li>Share your extracted data with other users</li>
                  <li>Use your data for advertising or marketing to third parties</li>
                  <li>Transfer data for purposes unrelated to the service</li>
                </ul>
              </div>
              <div className="mb-6">
                <p className="text-muted-foreground mb-4">We <strong>MAY</strong> share data only:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With service providers who help operate our service (under strict confidentiality)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li><strong>Access</strong> - Request a copy of your data</li>
                <li><strong>Delete</strong> - Remove your account and all associated data</li>
                <li><strong>Export</strong> - Download your extracted data</li>
                <li><strong>Correct</strong> - Update your account information</li>
                <li><strong>Withdraw consent</strong> - Stop using the service at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4">Cookies and Local Storage</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li><strong>Chrome storage</strong> - We store preferences and cached data locally in your browser</li>
                <li><strong>Session management</strong> - Authentication tokens are stored securely</li>
                <li><strong>No tracking cookies</strong> - We don't use advertising or analytics cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">We use:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li><strong>Google OAuth</strong> - For secure sign-in (subject to Google's Privacy Policy)</li>
                <li><strong>Supabase</strong> - For data storage and authentication (subject to Supabase's Privacy Policy)</li>
                <li><strong>Chrome APIs</strong> - For browser extension functionality</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our service is not intended for users under 13. We do not knowingly collect information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4">International Users</h2>
              <p className="text-muted-foreground">
                Your data may be transferred to and processed in the United States, where our service providers are located.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">We may update this Privacy Policy occasionally. We will notify users of significant changes via:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Extension notifications</li>
                <li>Email to registered users</li>
                <li>Updates on our website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">For privacy-related questions or requests:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li><strong>Website:</strong> <a href="https://datasnapchart.com" className="text-primary hover:underline">https://datasnapchart.com</a></li>
                <li><strong>Email:</strong> <a href="mailto:info@datasnapchart.com" className="text-primary hover:underline">info@datasnapchart.com</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4">Data Protection Rights (GDPR/CCPA)</h2>
              <p className="text-muted-foreground mb-4">If you're in the EU or California, you have additional rights under GDPR/CCPA:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Right to portability of your data</li>
                <li>Right to restrict processing</li>
                <li>Right to object to processing</li>
                <li>Right to file complaints with supervisory authorities</li>
              </ul>
            </section>

            <div className="border-t pt-8 mt-8">
              <p className="text-muted-foreground text-sm">
                <strong>Note:</strong> This privacy policy applies specifically to the DataSnap Chrome Extension. Visit <a href="https://datasnapchart.com" className="text-primary hover:underline">https://datasnapchart.com</a> for our website privacy policy.
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Back to Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}