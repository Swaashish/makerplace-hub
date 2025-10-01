import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Discover = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["All", "Design", "Graphics", "Templates", "Courses", "Music", "Photography"];

  // Mock products for now (will be replaced with real data)
  const mockProducts = [
    {
      id: "1",
      title: "UI Design System Pro",
      creator: "Sarah Johnson",
      creatorSlug: "sarah-johnson",
      price: 49,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      category: "Design"
    },
    {
      id: "2",
      title: "Illustration Mega Pack",
      creator: "Mike Chen",
      creatorSlug: "mike-chen",
      price: 29,
      image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80",
      category: "Graphics"
    },
    {
      id: "3",
      title: "Premium Logo Templates",
      creator: "Emma Wilson",
      creatorSlug: "emma-wilson",
      price: 39,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      category: "Templates"
    },
    {
      id: "4",
      title: "Web Development Course",
      creator: "Alex Rodriguez",
      creatorSlug: "alex-rodriguez",
      price: 99,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      category: "Courses"
    },
    {
      id: "5",
      title: "Icon Set Collection",
      creator: "Lisa Park",
      creatorSlug: "lisa-park",
      price: 19,
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
      category: "Design"
    },
    {
      id: "6",
      title: "Social Media Templates",
      creator: "Tom Anderson",
      creatorSlug: "tom-anderson",
      price: 24,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      category: "Templates"
    },
    {
      id: "7",
      title: "Photography Presets",
      creator: "Maya Singh",
      creatorSlug: "maya-singh",
      price: 35,
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
      category: "Photography"
    },
    {
      id: "8",
      title: "3D Asset Bundle",
      creator: "Chris Davis",
      creatorSlug: "chris-davis",
      price: 79,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      category: "Graphics"
    },
    {
      id: "9",
      title: "Music Production Kit",
      creator: "DJ Ramirez",
      creatorSlug: "dj-ramirez",
      price: 59,
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
      category: "Music"
    },
    {
      id: "10",
      title: "Brand Identity Guide",
      creator: "Rachel Green",
      creatorSlug: "rachel-green",
      price: 44,
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&q=80",
      category: "Design"
    },
    {
      id: "11",
      title: "Animation Templates",
      creator: "Kevin Lee",
      creatorSlug: "kevin-lee",
      price: 54,
      image: "https://images.unsplash.com/photo-1551122089-4e3e72477b32?w=800&q=80",
      category: "Graphics"
    },
    {
      id: "12",
      title: "Stock Photo Collection",
      creator: "Nina Patel",
      creatorSlug: "nina-patel",
      price: 89,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      category: "Photography"
    }
  ];

  useEffect(() => {
    setProducts(mockProducts);
    setLoading(false);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.creator.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Discover Products</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find amazing digital products from talented creators
          </p>

          {/* Search Bar */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category || (!selectedCategory && category === "All") ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category === "All" ? null : category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading products...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;
