import { useCounter } from './hooks/use-counter';
export const SetCounter = () => {
  let inputNum = 0;

  const counter = useCounter();
  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          counter.set(inputNum);
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          onChange={(e) => (inputNum = e.target.value)}
          id="set-to"
          type="number"
        />
        <input type="submit" />
      </form>
    </section>
  );
};
