import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Heart, Share2, TrendingUp, Bookmark } from "lucide-react";
import { motion } from "framer-motion";

const Community = () => {
  const posts = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      username: "@sarahj",
      content: "Just launched my new UI kit! So excited to share it with everyone. Check it out!",
      likes: 124,
      comments: 18,
      trending: true,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      author: "Mike Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      username: "@mikechen",
      content: "Tips for pricing your digital products: 1) Research competitors 2) Value your time 3) Start higher than you think",
      likes: 89,
      comments: 12,
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      author: "Emma Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      username: "@emmaw",
      content: "Reached $10K in sales this month! Thank you to this amazing community for all the support 🎉",
      likes: 234,
      comments: 45,
      trending: true,
      timestamp: "1 day ago"
    },
    {
      id: 4,
      author: "Alex Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      username: "@alexr",
      content: "Working on a new course about web development. What topics would you like me to cover?",
      likes: 56,
      comments: 32,
      timestamp: "2 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfcf7] text-black">
      <Navigation />

      <div className="container mx-auto px-4 py-12 flex gap-8">
        {/* Sidebar */}
        <aside className="w-72 hidden md:block">
          <motion.div
            className="sticky top-20 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-xl border border-black/20 bg-[#fffef9] hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Your Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-black text-white hover:bg-gray-800">Compose</Button>
                <Button variant="outline" className="w-full flex gap-2">
                  <Bookmark className="w-4 h-4" /> Saved Posts
                </Button>
                <Button variant="outline" className="w-full">Following</Button>
                <Button variant="outline" className="w-full">Your Tweets</Button>
              </CardContent>
            </Card>
          </motion.div>
        </aside>

        {/* Main Feed */}
        <main className="flex-1 max-w-2xl mx-auto space-y-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border border-black/20 shadow-md bg-[#fffef9] hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="border border-black/30 shadow">
                        <AvatarImage src={post.avatar} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{post.author}</p>
                          {post.trending && (
                            <Badge variant="secondary" className="gap-1 bg-black text-white">
                              <TrendingUp className="w-3 h-3" />
                              Trending
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {post.username} · {post.timestamp}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Follow</Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{post.content}</p>
                  <div className="flex items-center gap-6 pt-2">
                    <Button variant="ghost" size="sm" className="gap-2 hover:scale-110 transition-transform">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 hover:scale-110 transition-transform">
                      <MessageSquare className="w-4 h-4" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 hover:scale-110 transition-transform">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Community;
