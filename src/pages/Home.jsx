import { Link } from 'react-router-dom';
import logo from '@/logo.svg';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <img
        src={logo}
        className="h-40 pointer-events-none animate-spin-slow"
        alt="logo"
      />
      <h1 className="text-4xl font-bold mb-4">Welcome to Fruito</h1>
      <p className="text-lg mb-8">
        Edit{' '}
        <code className="font-mono bg-gray-200 p-1 rounded">src/App.jsx</code>{' '}
        and save to reload.
      </p>
      <Link to="/about" className="text-blue-500 hover:underline">
        Go to About Page
      </Link>
    </div>
  );
}

export default Home;
