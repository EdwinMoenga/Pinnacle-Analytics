import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type CreateInquiryRequest } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";

export default function BookDemo() {
  const { mutate, isPending, isSuccess } = useCreateInquiry();

  const form = useForm<CreateInquiryRequest>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      serviceInterest: "",
      message: ""
    }
  });

  const onSubmit = (data: CreateInquiryRequest) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Ready to transform your business?
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Book a personalized demo with our solution architects. We'll explore your current data stack and identify high-impact opportunities.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-card p-6 rounded-xl border border-white/5">
                  <h3 className="text-white font-bold mb-2">30-Minute Consultation</h3>
                  <p className="text-sm text-muted-foreground">Focus on your specific pain points and goals.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-white/5">
                  <h3 className="text-white font-bold mb-2">Custom Roadmap</h3>
                  <p className="text-sm text-muted-foreground">Receive a high-level strategy document after the call.</p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
            >
              {isSuccess ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-20 p-8 text-center animate-in fade-in zoom-in">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Request Received!</h2>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. One of our specialists will contact you at {form.getValues().email} within 24 hours.
                  </p>
                  <Button 
                    className="mt-8" 
                    variant="outline"
                    onClick={() => window.location.reload()}
                  >
                    Submit another request
                  </Button>
                </div>
              ) : null}

              <h2 className="text-2xl font-bold text-white mb-6">Schedule a Call</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-background/50 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Company Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" {...field} className="bg-background/50 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Service Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/50 border-white/10 text-white focus:border-primary">
                              <SelectValue placeholder="Select a service..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="advisory">Advisory & Strategic</SelectItem>
                            <SelectItem value="analytics">Analytics & Visualization</SelectItem>
                            <SelectItem value="collection">Data Collection</SelectItem>
                            <SelectItem value="engineering">Data Engineering</SelectItem>
                            <SelectItem value="quality">Quality Management</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Additional Details (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us a bit about your project..." 
                            className="resize-none bg-background/50 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base font-semibold shadow-lg shadow-primary/25"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Confirm Booking"
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
