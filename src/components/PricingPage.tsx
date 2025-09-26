import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Declare the custom stripe-pricing-table element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': {
        'pricing-table-id': string;
        'publishable-key': string;
      };
    }
  }
}

export default function PricingPage() {
  useEffect(() => {
    // Add the Stripe pricing table script to the document head
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://js.stripe.com/v3/pricing-table.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="mb-4">Choose Your Plan</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        {/* Stripe Pricing Table */}
        <div className="flex justify-center">
          <stripe-pricing-table
            pricing-table-id="prctbl_1SBKizCljCRvl9rSg1012vC6"
            publishable-key="pk_live_51SBKX5CljCRvl9rS8cZ33P1Unu0fOV6FbwPNJMzYLC2djV3sk2lKkvQymaukAqMXNFUmTpEITCTzcozEceB2vvwx00uNDgut61"
          />
        </div>

        {/* Footer Section */}
        <div className="text-center mt-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="mb-2">💳 Secure Payments</h3>
              <p className="text-muted-foreground">
                All payments are processed securely through Stripe
              </p>
            </div>
            <div>
              <h3 className="mb-2">🔄 Easy Changes</h3>
              <p className="text-muted-foreground">
                Upgrade, downgrade, or cancel anytime from your account
              </p>
            </div>
            <div>
              <h3 className="mb-2">📞 Support</h3>
              <p className="text-muted-foreground">
                Get help when you need it with our customer support
              </p>
            </div>
          </div>

          {/* Privacy Policy Link */}
          <div className="mt-8">
            <Link
              to="/privacy-policy"
              className="text-muted-foreground hover:text-foreground text-sm underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}