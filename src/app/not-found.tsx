import Link from 'next/link';
import ButtonBack from './components/ButtonBack';

export default async function NotFound() {
  return (
    <div className='flex h-screen justify-center items-center'>
      <h2>Такой страницы не существует</h2>
      <p>
        Вернутся <ButtonBack>Назад</ButtonBack> или на{' '}
        <Link href='/'>Главную</Link>
      </p>
    </div>
  );
}
