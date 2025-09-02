import { useSelector } from 'react-redux';
import { useCounter } from './hooks/use-counter';
import { SetCounter } from './SetCounter';

export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector((state) => state.count);
  const counter = useCounter();
  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => counter.increment()}>Increment</button>
        <button onClick={() => counter.set(0)}>Reset</button>
        <button onClick={() => counter.decrement()}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
