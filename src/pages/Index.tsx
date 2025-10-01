import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Zap, DollarSign, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-marketplace.jpg";

const Index = () => {
  // Mock featured products
  const featuredProducts = [
    {
      id: "1",
      title: "UI Design System",
      creator: "Jane Doe",
      creatorSlug: "jane-doe",
      price: 49,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      category: "Design"
    },
    {
      id: "2",
      title: "Illustration Pack",
      creator: "Jane Doe",
      creatorSlug: "jane-doe",
      price: 29,
      image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80",
      category: "Graphics"
    },
    {
      id: "3",
      title: "Logo Templates",
      creator: "Jane Doe",
      creatorSlug: "jane-doe",
      price: 39,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      category: "Templates"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Sell your creations,
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> directly to your audience</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The easiest way for creators to sell digital products. No fees until you make a sale.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Start Selling
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Browse Products
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Creator marketplace" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why creators love us</h2>
            <p className="text-xl text-muted-foreground">Everything you need to sell online</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Simple Setup</h3>
                <p className="text-muted-foreground">Get started in minutes. No technical knowledge required.</p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Instant Delivery</h3>
                <p className="text-muted-foreground">Customers get their products immediately after purchase.</p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Keep More Money</h3>
                <p className="text-muted-foreground">Only pay when you make a sale. No monthly fees.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trending products</h2>
              <p className="text-xl text-muted-foreground">Discover what creators are selling</p>
            </div>
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to start earning?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of creators selling their digital products
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Started for Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
