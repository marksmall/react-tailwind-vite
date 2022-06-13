import { useState } from 'react';

import Header from './layout/header.component';
import Footer from './layout/footer.component';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-6xl bg-teal-400 sm:bg-blue-400 md:bg-red-400 lg:bg-green-400 text-teal-100">
      <Header />

      <main className="flex-1">
        <h1 className="">
          Install and Setup Vite, React and Typescript with Tailwind CSS 3
        </h1>
      </main>

      <Footer />
    </div>
  );
}

export default App;
