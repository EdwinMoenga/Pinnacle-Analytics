import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // === Inquiries Routes ===
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // === Posts Routes ===
  app.get(api.posts.list.path, async (req, res) => {
    const posts = await storage.getPosts();
    res.json(posts);
  });

  app.get(api.posts.get.path, async (req, res) => {
    const post = await storage.getPost(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  });

  // === Seed Data ===
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingPosts = await storage.getPosts();
  if (existingPosts.length === 0) {
    const seedPosts = [
      {
        title: "The Future of Data Analytics in 2025",
        slug: "future-of-data-analytics-2025",
        excerpt: "Discover the emerging trends that will shape the data landscape in the coming years, from AI integration to real-time processing.",
        content: "Detailed content about data analytics trends...",
        date: "Oct 12, 2025",
        readTime: "5 min read",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Why Data Quality Matters More Than Ever",
        slug: "why-data-quality-matters",
        excerpt: "Bad data leads to bad decisions. Learn how to implement robust data quality management strategies for your organization.",
        content: "Detailed content about data quality...",
        date: "Sep 28, 2025",
        readTime: "4 min read",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      },
      {
        title: "Building a Data-Driven Culture",
        slug: "building-data-driven-culture",
        excerpt: "Technology is only half the battle. Here's how to foster a culture that values and utilizes data in decision-making.",
        content: "Detailed content about culture...",
        date: "Sep 15, 2025",
        readTime: "6 min read",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      }
    ];

    for (const post of seedPosts) {
      await storage.createPost(post);
    }
    console.log("Seeded database with blog posts");
  }
}
