import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";
import { type Post } from "@shared/schema";
import { motion } from "framer-motion";

interface BlogCardProps {
  post: Post;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="bg-card border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer h-full flex flex-col group">
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <CardHeader className="space-y-2 pb-2">
            <div className="flex items-center gap-2 text-xs text-primary font-medium uppercase tracking-wider">
              <span>{post.date}</span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground text-sm line-clamp-3">
              {post.excerpt}
            </p>
          </CardContent>
          <CardFooter className="pt-0 flex items-center justify-between text-sm text-muted-foreground border-t border-white/5 mt-auto p-6">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <span className="flex items-center gap-1 text-primary font-medium group-hover:translate-x-1 transition-transform">
              Read Article <ArrowRight className="w-4 h-4" />
            </span>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
