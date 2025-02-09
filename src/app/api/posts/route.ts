import { NextResponse } from 'next/server';
import { posts } from '@/pages/Home';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search')?.toLowerCase() || '';

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search)
  );

  return NextResponse.json(filteredPosts);
}
