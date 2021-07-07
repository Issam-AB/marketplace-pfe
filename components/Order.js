import moment from 'moment';
import Currency from 'react-currency-formatter';

export default function Order({
  id,
  amount,
  amountShipping,
  items,
  timestamp,
  images,
}) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-200 text-sm text-gray-600">
        <div className="">
          <p className="font-bold">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format('DD MM YYYY')}</p>
        </div>
        <div>
          <p className="font-bold">TOTAL</p>
          <p>
            <Currency quantity={amount} currency="mad" /> -Next Day Delivery{' '}
            <Currency quantity={amountShipping} currency="mad" />
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.length} items
        </p>
        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => (
            <img src={image} alt="" className="object-contain h-20 sm:h-32" />
          ))}
        </div>
      </div>
    </div>
  );
}
