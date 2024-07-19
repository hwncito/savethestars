'use client';

export default function HeroButton() {
  return (
    <button
      className="text-base md:text-lg border rounded-full py-3 px-8 md:px-10 font-medium hover:bg-white hover:text-slate-950 transition-all opacity-1 hero-button title-animation"
      onClick={() => {
        document
          .getElementById('supporters-section')
          .scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Subscribe
    </button>
  );
}
