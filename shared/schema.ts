import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  serviceInterest: text("service_interest").notNull(),
  message: text("message"), // Optional additional details
  createdAt: timestamp("created_at").defaultNow(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  date: varchar("date", { length: 50 }).notNull(), // e.g. "Oct 12, 2023"
  readTime: varchar("read_time", { length: 20 }).notNull(), // e.g. "5 min read"
  imageUrl: text("image_url").notNull(),
  slug: text("slug").notNull().unique(),
});

// === BASE SCHEMAS ===
export const insertInquirySchema = createInsertSchema(inquiries).omit({ 
  id: true, 
  createdAt: true 
}).extend({
  email: z.string().email("Please enter a valid company email"),
  serviceInterest: z.string().min(1, "Please select a service"),
});

export const insertPostSchema = createInsertSchema(posts).omit({ id: true });

// === EXPLICIT API CONTRACT TYPES ===
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Post = typeof posts.$inferSelect;
export type InsertPost = z.infer<typeof insertPostSchema>;

// Request/Response types
export type CreateInquiryRequest = InsertInquiry;
export type InquiryResponse = Inquiry;
export type PostResponse = Post;
export type PostsListResponse = Post[];
