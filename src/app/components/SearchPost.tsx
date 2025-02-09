'use client';
import { posts } from '@/pages/Home';
import { ChangeEvent, FC, useState } from 'react';
import Link from 'next/link';

interface SearchPostProps {
  classNameContainer: string;
}

const SearchPost: FC<SearchPostProps> = ({ classNameContainer }) => {
  const [findedPosts, setFindedPosts] = useState<typeof posts | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchValue(value);

    if (!Boolean(value)) {
      setFindedPosts(null);
      return;
    }

    const findedPosts = posts.filter((post) => post.title.startsWith(value));
    setFindedPosts(findedPosts);
  };

  const renderFindedPosts =
    findedPosts && findedPosts.length ? (
      <ul>
        {findedPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    ) : (
      <p>Посты не найдены</p>
    );

  return (
    <div className={classNameContainer}>
      <input
        type='search'
        onChange={onChange}
        value={searchValue}
        className='border-2 w-full'
      />
      {findedPosts && renderFindedPosts}
    </div>
  );
};

export default SearchPost;
