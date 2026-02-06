import { db } from "./db";
import {
  inquiries,
  posts,
  type InsertInquiry,
  type InsertPost,
  type Inquiry,
  type Post,
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Inquiries
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  
  // Posts
  getPosts(): Promise<Post[]>;
  getPost(slug: string): Promise<Post | undefined>;
  createPost(post: InsertPost): Promise<Post>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  }

  async getPosts(): Promise<Post[]> {
    return await db.select().from(posts);
  }

  async getPost(slug: string): Promise<Post | undefined> {
    const [post] = await db
      .select()
      .from(posts)
      .where(eq(posts.slug, slug));
    return post;
  }

  async createPost(insertPost: InsertPost): Promise<Post> {
    const [post] = await db.insert(posts).values(insertPost).returning();
    return post;
  }
}

export const storage = new DatabaseStorage();
