import fetch from 'node-fetch';
import { EntityId, Post } from '../shared/types';
import { config } from './config';

export async function fetchPostsByCategory(
  categoryId: EntityId,
): Promise<Post[]> {
  const res = await fetch(`${config.baseUrl}/categories/${categoryId}`);
  return await res.json();
}
