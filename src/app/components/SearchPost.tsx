'use client';

import { useSearchParams } from 'next/navigation';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import type { Post } from '@/pages/Home';

interface SearchPostProps {
  classNameContainer?: string;
}

const SearchPost: FC<SearchPostProps> = ({ classNameContainer = '' }) => {
  const searchParams = useSearchParams();
  //   const router = useRouter();
  const [searchValue, setSearchValue] = useState(
    searchParams.get('search') || ''
  );
  const [findedPosts, setFindedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/posts?search=${searchValue}`);
      const data: Post[] = await res.json();
      setFindedPosts(data);
    };

    if (searchValue) {
      fetchPosts();
    } else {
      setFindedPosts([]);
    }
  }, [searchValue]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    // router.replace(`/posts?search=${value}`);
  };

  return (
    <div className={classNameContainer}>
      <input
        type='search'
        value={searchValue}
        onChange={onChange}
        className='border-2 w-full'
      />
      {findedPosts.length > 0 && (
        <ul>
          {findedPosts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPost;
