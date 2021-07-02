import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItem, selectTotal } from '../slice/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/client';

const checkout = () => {
  const items = useSelector(selectItem);
  const total = useSelector(selectTotal);
  const [session] = useSession();
  // console.log('item is', items);
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
            <h1 className="text-3xl border-b pb-4 ">
              {items.length === 0
                ? 'Your marketplace basket is empty'
                : 'Shopping Basket'}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                description={item.description}
                price={item.price}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrism}
              />
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h className="whitespace-nowrap">
                SubTotal ({items.length} items)
              </h>
              <span className="font-bold">
                <Currency quantity={total} currency="mad" />
              </span>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
              >
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default checkout;
