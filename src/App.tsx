import { Button } from './components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './components/ui/card';

const pricingPlans = [
  {
    name: 'Weekly',
    price: '$7',
    period: '/week',
    description: 'Perfect for short-term projects',
    checkoutUrl: 'https://buy.stripe.com/14AbJ01Yh13xdDO34c9k400',
    features: ['Access to all features', 'Weekly billing', 'Cancel anytime']
  },
  {
    name: 'Monthly',
    price: '$25',
    period: '/month',
    description: 'Most popular choice',
    checkoutUrl: 'https://buy.stripe.com/4gMaEWeL3fYrfLWdIQ9k401',
    popular: true,
    features: ['Access to all features', 'Monthly billing', 'Cancel anytime', 'Priority support']
  },
  {
    name: 'Annual',
    price: '$250',
    period: '/year',
    description: 'Best value - save 17%',
    checkoutUrl: 'https://buy.stripe.com/5kA5kC32l7rV0R2eMU9k402',
    features: ['Access to all features', 'Annual billing', 'Cancel anytime', 'Priority support', '2 months free']
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Select the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => window.open(plan.checkoutUrl, '_blank')}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
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
        </div>
      </div>
    </div>
  );
}