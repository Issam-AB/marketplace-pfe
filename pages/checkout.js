import React from 'react';
import Image from 'next/image';

const checkout = () => {
  return (
    <div className="bg-gray-100">
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="/images/ecommerce-.png"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4 ">Your shopping Basket</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default checkout;
