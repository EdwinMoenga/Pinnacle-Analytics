import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { usePost } from "@/hooks/use-posts";
import { useRoute, Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const { data: post, isLoading, error } = usePost(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 md:px-6 pt-32 pb-20 max-w-4xl">
          <Skeleton className="h-8 w-32 mb-8 bg-white/5" />
          <Skeleton className="h-16 w-3/4 mb-6 bg-white/5" />
          <div className="flex gap-4 mb-8">
            <Skeleton className="h-4 w-24 bg-white/5" />
            <Skeleton className="h-4 w-24 bg-white/5" />
          </div>
          <Skeleton className="h-96 w-full rounded-2xl mb-12 bg-white/5" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full bg-white/5" />
            <Skeleton className="h-4 w-full bg-white/5" />
            <Skeleton className="h-4 w-2/3 bg-white/5" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <article className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link href="/blog">
            <Button variant="ghost" className="text-muted-foreground hover:text-white mb-8 pl-0 hover:bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-white/10 pb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto text-primary hover:text-primary hover:bg-primary/10">
                <Share2 className="w-4 h-4 mr-2" /> Share
              </Button>
            </div>
          </header>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:text-white prose-a:text-primary prose-strong:text-white prose-blockquote:border-l-primary prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg">
            {/* 
              In a real app, you would parse markdown here. 
              For now, we'll just render text with newlines 
            */}
            {post.content.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-white/10 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Want to learn more?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Our team of experts can help you apply these insights to your specific business challenges.
            </p>
            <Link href="/book-demo">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg shadow-primary/20">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
