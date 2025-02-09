'use client';

import { useRouter } from 'next/navigation';

const ButtonBack = () => {
  const router = useRouter();
  return (
    <button type='button' onClick={() => router.back()}>
      &larr; Назад
    </button>
  );
};

export default ButtonBack;
