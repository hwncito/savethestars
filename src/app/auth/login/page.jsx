'use server';
import { auth } from '@/auth';
import LoginForm from '@/components/loginForm/LoginForm';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();
  if (session?.user) {
    redirect('/');
  }

  return (
    <main className='bg-[#F0F4FB] h-screen w-full flex items-center justify-center'>
      <LoginForm />
    </main>
  );
}
