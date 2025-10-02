import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Heart } from "lucide-react";

const Discover = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "All",
    "Design",
    "Graphics",
    "Templates",
    "Courses",
    "Music",
    "Photography",
  ];

  const mockProducts = [
    { id: "1", title: "UI Design System Pro", creator: "Sarah Johnson", creatorSlug: "sarah-johnson", price: 49, image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80", category: "Design" },
    { id: "2", title: "Illustration Mega Pack", creator: "Mike Chen", creatorSlug: "mike-chen", price: 29, image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80", category: "Graphics" },
    { id: "3", title: "Premium Logo Templates", creator: "Emma Wilson", creatorSlug: "emma-wilson", price: 39, image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80", category: "Templates" },
    { id: "4", title: "Web Development Course", creator: "Alex Rodriguez", creatorSlug: "alex-rodriguez", price: 99, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80", category: "Courses" },
    { id: "5", title: "Icon Set Collection", creator: "Lisa Park", creatorSlug: "lisa-park", price: 19, image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80", category: "Design" },
    { id: "6", title: "Social Media Templates", creator: "Tom Anderson", creatorSlug: "tom-anderson", price: 24, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", category: "Templates" },
    { id: "7", title: "Photography Presets", creator: "Maya Singh", creatorSlug: "maya-singh", price: 35, image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", category: "Photography" },
    { id: "8", title: "3D Asset Bundle", creator: "Chris Davis", creatorSlug: "chris-davis", price: 79, image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80", category: "Graphics" },
    { id: "9", title: "Music Production Kit", creator: "DJ Ramirez", creatorSlug: "dj-ramirez", price: 59, image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80", category: "Music" },
    { id: "10", title: "Brand Identity Guide", creator: "Rachel Green", creatorSlug: "rachel-green", price: 44, image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&q=80", category: "Design" },
  ];

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.creator.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "All" ||
      product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      className="min-h-screen bg-stone-100"
      style={{ fontFamily: "'Cinzel Decorative', serif" }}
    >
      <Navigation />

      {/* Top bar */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-black bg-white sticky top-0 z-20 shadow-md">
        <h1 className="text-4xl font-extrabold tracking-wide text-stone-900">
          Discover
        </h1>
        <div className="flex gap-4">
          <button className="p-3 border border-black bg-white text-black shadow-md">
            <ShoppingCart className="w-6 h-6" />
          </button>
          <button className="p-3 border border-black bg-white text-black shadow-md">
            <Heart className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex gap-10">
        {/* Sidebar */}
        <aside className="w-72 bg-white shadow rounded-md p-6 border border-black">
          <h2 className="text-2xl font-bold mb-8 text-stone-900">Filters</h2>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
            <Input
              placeholder="Search products..."
              className="pl-10 border-black rounded-none focus:ring-2 focus:ring-stone-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-stone-700">Categories</h3>
            <div className="flex flex-col gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(category === "All" ? null : category)
                  }
                  className={`px-4 py-2 text-left font-semibold border border-black bg-white text-black`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Products */}
        <main className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-stone-500">No products found</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Discover;
