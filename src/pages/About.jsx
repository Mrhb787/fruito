import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">About Fruito</h1>
      <p className="text-lg mb-8">
        This is a modern React application built with Vite and Tailwind CSS.
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go Home
      </Link>
    </div>
  );
}

export default About;
