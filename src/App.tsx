import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex items-center justify-center text-6xl bg-teal-400 sm:bg-blue-400 md:bg-red-400 lg:bg-green-400 text-teal-100">
      <h1 className="">
        Install and Setup Vite, React and Typescript with Tailwind CSS 3
      </h1>
    </main>
  );
}

export default App;
