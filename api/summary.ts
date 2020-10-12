import fetch from 'node-fetch';
import { config } from './config';
import { Category, Post } from '../shared/types';

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${config.baseUrl}/posts`);
  return await res.json();
}

export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(`${config.baseUrl}/categories`);
  return await res.json();
}
