import CountUp from 'react-countup';
import { counterItems } from "../constants";

export const AnimatedCounter = () => {
  return (
    <div id="counter" className="px-6 xl:mt-0 mt-32">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {counterItems.map((item) => (
          <div key={item.label} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center items-center">
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp end={item.value} suffix={item.suffix} />
            </div>
            <div className="text-white/70 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
