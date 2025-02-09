'use client';

import React, { FC, useState } from 'react';
import { I_Comment } from '../api/comments/route';

interface AddCommentProps {
  postId: string;
  addComment: (newComment: I_Comment) => void;
}

const AddComment: FC<AddCommentProps> = ({ postId, addComment }) => {
  const [text, setText] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    setText(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ postId, text }),
    })
      .then((res) => res.json())
      .then((res: { success: boolean; newComment: I_Comment }) =>
        addComment(res.newComment)
      )
      .catch((err) => console.log(err))
      .finally(() => setText(''));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea
          title='Добавить комментарий'
          aria-label='Добавить комментарий'
          placeholder='Добавить комментарий...'
          value={text}
          onChange={onChange}
        />
        <button type='submit' disabled={!Boolean(text)}>
          Добавить комментарий
        </button>
      </form>
    </div>
  );
};

export default AddComment;
