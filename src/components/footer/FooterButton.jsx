'use client';

export default function FooterButton({ id, title }) {
  return (
    <button
      className="hover:underline me-4 md:me-6"
      onClick={() => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {title}
    </button>
  );
}
