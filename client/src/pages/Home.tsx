import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  LineChart, 
  PieChart, 
  Database, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Advisory & Strategic",
      description: "Data-driven roadmaps to align your analytics initiatives with core business objectives.",
      icon: LineChart
    },
    {
      title: "Analytics & Visualization",
      description: "Transform raw data into compelling visual narratives that drive decision-making.",
      icon: PieChart
    },
    {
      title: "Data Collection",
      description: "Robust pipelines to gather high-quality data from disparate sources securely.",
      icon: Database
    },
    {
      title: "Data Engineering",
      description: "Scalable architecture design ensuring your data infrastructure grows with you.",
      icon: Cpu
    },
    {
      title: "Quality Management",
      description: "Rigorous validation frameworks to ensure data accuracy, consistency, and trust.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-600/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/4" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
                Data Intelligence Solutions
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                Unlock <span className="text-gradient">Data Insights</span> That Drive Growth
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                We transform complex data into clear, actionable strategies. Empower your business with enterprise-grade analytics and engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-demo">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 h-14 px-8 text-lg rounded-full">
                    Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/#expertise">
                  <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 h-14 px-8 text-lg rounded-full">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Grid Section */}
      <section id="expertise" className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Data Expertise
            </h2>
            <p className="text-muted-foreground text-lg">
              End-to-end solutions designed to handle every aspect of your data lifecycle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ServiceCard 
                key={idx}
                {...service}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Abstract Graphic */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 shadow-2xl">
                 {/* Unsplash abstract tech image */}
                 <div className="absolute inset-0 mix-blend-overlay opacity-50">
                   {/* technology data abstract background */}
                   <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="Data analytics dashboard" className="w-full h-full object-cover" />
                 </div>
                 <div className="relative z-10 h-full flex flex-col justify-between">
                   <div className="bg-background/80 backdrop-blur-md p-4 rounded-xl border border-white/10 w-3/4">
                     <div className="flex gap-2 mb-2">
                       <div className="w-3 h-3 rounded-full bg-red-500"/>
                       <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                       <div className="w-3 h-3 rounded-full bg-green-500"/>
                     </div>
                     <div className="h-2 bg-white/10 rounded w-full mb-2"/>
                     <div className="h-2 bg-white/10 rounded w-2/3"/>
                   </div>
                   <div className="bg-primary/20 backdrop-blur-md p-6 rounded-xl border border-primary/20 self-end w-3/4">
                     <div className="text-2xl font-bold text-white mb-1">+145%</div>
                     <div className="text-sm text-primary-foreground/80">Efficiency Increase</div>
                   </div>
                 </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Pinnacle?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We don't just provide data; we provide clarity. Our team of expert engineers and analysts works as an extension of your team.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Enterprise-grade security standards",
                  "Scalable cloud-native architecture",
                  "Real-time analytics and reporting",
                  "Dedicated support and training"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link href="/about">
                  <Button variant="link" className="text-primary p-0 h-auto font-semibold hover:text-primary/80">
                    Learn more about our methodology <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
