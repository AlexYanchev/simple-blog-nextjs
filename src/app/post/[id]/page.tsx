import { posts } from '@/pages/Home';
import ButtonBack from '@/app/components/ButtonBack';
import { notFound } from 'next/navigation';
import SearchPost from '@/app/components/SearchPost';

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post = posts.find((post) => String(post.id) === id);

  if (!post) {
    notFound();
  }

  return (
    <div className='flex gap-6 px-4 py-6'>
      <SearchPost classNameContainer='basis-1/3' />
      <div className='basis-2/3'>
        <ButtonBack>&larr; Назад</ButtonBack>
        <h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
        <p className='border-2 rounded-lg p-5'>{post.excerpt}</p>
      </div>
    </div>
  );
}
