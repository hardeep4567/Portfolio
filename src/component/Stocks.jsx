import React, { useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import LineChart from './LineChart';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Setcrypto } from '../Slice';

const Stocks = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.counter.crypto);

  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const res = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 3,
              page: 1,
              sparkline: false,
            },
          }
        );
        dispatch(Setcrypto(res.data));
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCrypto();
  }, [dispatch]);

  return (
    <div className="w-full max-w-lg bg-white rounded shadow-2xl shadow-black p-5">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Popular Cryptocurrencies</h2>
        <BsThreeDots />
      </div>

      <LineChart />

      <ul className="space-y-3 mt-4">
        {data.map((coin) => (
          <li
            key={coin.id}
            className="p-2 border rounded-lg shadow-sm hover:shadow-md transition flex items-center gap-2"
          >
            <img
              src={coin.image}
              alt={coin.name}
              className="w-7 h-7 rounded-full"
            />
            <div>
              <p className="font-semibold text-lg">{coin.name}</p>
              <p className="text-sm text-gray-600 uppercase">{coin.symbol}</p>
              <p className="text-xs text-gray-500">
                Rank: {coin.market_cap_rank}
              </p>
              <p className="text-xs text-green-600">
                Price: ${coin.current_price.toLocaleString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stocks;
