import { posts } from '@/pages/Home';
import ButtonBack from '@/app/components/ButtonBack';

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post = posts.find((post) => String(post.id) === id);

  return (
    <div className='flex justify-center px-4 py-6'>
      <div className='basis-1/2'>
        <ButtonBack />
        {post ? (
          <>
            <h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
            <p className='border-2 rounded-lg p-5'>{post.excerpt}</p>
          </>
        ) : (
          <p>Такого поста нет</p>
        )}
      </div>
    </div>
  );
}
