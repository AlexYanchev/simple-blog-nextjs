'use client';
import { FC, useEffect, useState } from 'react';
import { I_Comment, I_ResponseComment } from '../api/comments/route';
import AddComment from './AddComment';

interface CommentsProps {
  postId: string;
}

const Comments: FC<CommentsProps> = ({ postId }) => {
  const [comments, setComments] = useState<I_Comment[]>([]);

  useEffect(() => {
    fetch(`/api/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((res: I_ResponseComment) => setComments(res.findedComments))
      .catch(() => console.log('Ошибка'));
  }, [postId]);

  const addComment = (newComment: I_Comment) => {
    console.log(newComment);
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <div>
      <AddComment postId={postId} addComment={addComment} />
      <h3>Комментарии: </h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
