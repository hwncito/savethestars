'use server'

import { auth } from '@/auth';
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navbar/Navbar';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import heroImage from '../../public/hero-image.webp';
import ProblemSection from '@/components/problemSection/ProblemSection';
import BannerOurWork from '@/components/bannerOurWork/BannerOurWork';
import CardsOurWork from '@/components/cardsOurWork/CardsOurWork';
import SupportersSection from '@/components/supportersSection/SupportersSection';
import Footer from '@/components/footer/Footer';

export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    redirect('/auth/login');
  }

  return (
    <>
      <main>
        <Image
          src={heroImage}
          alt="hero image"
          className="absolute"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <Navbar />
        <Hero />
      </main>
      <section>
        <ProblemSection />
      </section>
      <BannerOurWork />
      <CardsOurWork />
      <section id='supporters-section'>
        <SupportersSection session={session} />
      </section>
      <Footer />
    </>
  );
}
