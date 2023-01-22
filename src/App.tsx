import { increment } from './app/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { RootState } from './app/store';

function App() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <div> Counter :{count}</div>

      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
