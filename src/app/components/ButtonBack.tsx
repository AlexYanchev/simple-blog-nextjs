'use client';

import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';

interface ButtonBackProps {
  children: ReactNode;
}

const ButtonBack: FC<ButtonBackProps> = ({ children }) => {
  const router = useRouter();
  return (
    <button type='button' onClick={() => router.back()}>
      {children}
    </button>
  );
};

export default ButtonBack;
