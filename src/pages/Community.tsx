import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Heart, Share2, TrendingUp } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Community</h1>
            <p className="text-xl text-muted-foreground">
              Connect with fellow creators, share tips, and celebrate wins
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Active Creators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,547</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Products Launched</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8,392</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">This Month's Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2.4M</div>
              </CardContent>
            </Card>
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={post.avatar} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{post.author}</p>
                          {post.trending && (
                            <Badge variant="secondary" className="gap-1">
                              <TrendingUp className="w-3 h-3" />
                              Trending
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{post.username} · {post.timestamp}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{post.content}</p>
                  
                  <div className="flex items-center gap-6 pt-2">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageSquare className="w-4 h-4" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
