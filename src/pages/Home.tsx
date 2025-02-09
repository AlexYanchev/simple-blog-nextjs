import Link from 'next/link';

export const posts = [
  {
    id: 1,
    title: 'Как работает Next.js?',
    excerpt: 'Разбираем основы Next.js...',
  },
  {
    id: 2,
    title: 'Tailwind CSS + Next.js',
    excerpt: 'Как использовать Tailwind в Next.js?',
  },
  {
    id: 3,
    title: 'Static Generation vs SSR',
    excerpt: 'В чем разница между SSG и SSR?',
  },
];

export default function Home() {
  return (
    <div className='max-w-3xl mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Блог</h1>
      <ul className='space-y-4'>
        {posts.map((post) => (
          <li key={post.id} className='p-4 border rounded-lg shadow'>
            <Link
              href={`/post/${post.id}`}
              className='text-xl font-semibold text-blue-600 hover:underline'
            >
              {post.title}
            </Link>
            <p className='text-gray-600'>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
