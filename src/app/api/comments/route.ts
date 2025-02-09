import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export interface I_Comment {
  id: number;
  postId: number;
  text: string;
}
export interface I_ResponseComment {
  findedComments: I_Comment[];
}

export const comments: { lastId: number; data: Record<string, I_Comment[]> } = {
  lastId: 3,
  data: {
    '1': [{ id: 1, postId: 1, text: 'Комментарий к посту 1' }],
    '2': [{ id: 2, postId: 2, text: 'Комментарий к посту 2' }],
    '3': [{ id: 3, postId: 3, text: 'Комментарий к посту 3' }],
  },
};

const predicateBody = (
  body: unknown
): body is { postId: string; text: string } => {
  return (
    body !== null &&
    typeof body === 'object' &&
    Object.hasOwn(body, 'postId') &&
    Object.hasOwn(body, 'text')
  );
};

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const postId = searchParams.get('postId');
  const responseJson: I_ResponseComment = { findedComments: [] };
  if (!postId || postId === '') {
    return NextResponse.json(responseJson);
  }
  responseJson.findedComments = comments.data[postId];
  return NextResponse.json(responseJson);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!predicateBody(body)) {
    return NextResponse.json({
      error: true,
      reason: 'Неправильное тело запроса',
    });
  }
  const { postId, text } = body;
  const id = ++comments.lastId;
  const newComment = { id, postId: Number(postId), text };
  comments.data[postId] = [newComment, ...comments.data[postId]];

  return NextResponse.json({
    success: true,
    newComment,
  });
}
