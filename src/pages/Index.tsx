
import { ArrowRight, CheckCircle2, BarChart3, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Advanced Analytics",
    description: "Gain insights with powerful analytics and reporting tools",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Collaboration",
    description: "Work together seamlessly with your team members",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Automation",
    description: "Automate repetitive tasks and increase productivity",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "3 projects",
      "Basic support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for growing businesses",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Unlimited projects",
      "Priority support",
      "Custom fields",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Enterprise analytics",
      "Unlimited projects",
      "24/7 support",
      "Custom integrations",
      "Dedicated account manager",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-white" />
        </div>
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <div className="mb-8 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-sage-100 text-sage-800">
            Join thousands of happy teams
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Project management made simple
          </h1>
          <p className="text-lg leading-8 text-gray-600 mb-8">
            Streamline your workflow, boost productivity, and achieve more with our
            intuitive project management solution.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-sage-500 hover:bg-sage-600">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-gray-600">
              Powerful features to help you manage projects effectively
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 glass-card hover:scale-105 transition-transform duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sage-100 text-sage-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 lg:px-8 bg-sage-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect plan for your needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className="p-8 glass-card hover:scale-105 transition-transform duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-gray-600">/month</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-600"
                    >
                      <CheckCircle2 className="h-5 w-5 text-sage-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-sage-500 hover:bg-sage-600"
                  size="lg"
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
