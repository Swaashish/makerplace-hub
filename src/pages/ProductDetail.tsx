import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Shield, RefreshCw } from "lucide-react";

const ProductDetail = () => {
  const { creatorSlug, productId } = useParams();

  // Mock data
  const product = {
    title: "UI Design System",
    creator: "Jane Doe",
    price: 49,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    category: "Design",
    description: "A comprehensive UI design system with over 200+ components, ready to use in your next project. Includes Figma files, Sketch files, and React components.",
    features: [
      "200+ Components",
      "Figma & Sketch Files",
      "React Components",
      "Lifetime Updates",
      "Commercial License"
    ],
    rating: 4.9,
    sales: 1234
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="aspect-video rounded-xl overflow-hidden bg-muted shadow-lg">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <Link 
                to={`/${creatorSlug}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                ← Back to {product.creator}'s store
              </Link>
            </div>

            <Badge variant="secondary" className="mb-4">{product.category}</Badge>
            
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <span className="font-semibold">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.sales} sales)</span>
            </div>

            <p className="text-muted-foreground mb-8 text-lg">{product.description}</p>

            <Card className="p-6 mb-6">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-4xl font-bold text-primary">${product.price}</span>
                <span className="text-muted-foreground">one-time payment</span>
              </div>
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-accent text-lg"
                onClick={() => {
                  const params = new URLSearchParams({ product: productId || "" });
                  window.location.href = `/checkout?${params.toString()}`;
                }}
              >
                I want this!
              </Button>
            </Card>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">What's included:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <Download className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Instant Access</p>
              </div>
              <div className="text-center">
                <RefreshCw className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Free Updates</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Secure Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
