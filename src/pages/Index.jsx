import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="bg-gray-900 p-4">
        <h1 className="text-2xl font-bold">My Website</h1>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to My Website</h2>
        <p className="text-lg">This is the main content area of the page.</p>
      </main>
    </div>
  );
};

export default Index;