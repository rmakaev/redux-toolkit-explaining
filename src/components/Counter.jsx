import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, addWord, removeWord } from "store/slices/toolkit";

const asyncAddWord = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addWord("async adding"));
    }, 1000);
  };
};

const Counter = () => {
  const count = useSelector((state) => state.toolkit.count);
  const words = useSelector((state) => state.toolkit.words);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch(decrement())}> - </button>
      <button onClick={() => dispatch(increment())}> + </button>

      <hr />

      <button onClick={() => dispatch(addWord("new word"))}> Add word + </button>
      <button onClick={() => dispatch(removeWord())}> Remove last word - </button>
      <button onClick={() => dispatch(asyncAddWord())}> Async Add word + </button>

      <h1>Words:</h1>
      <ul>
        {words.map((word) => {
          return <li key={word}>{word}</li>;
        })}
      </ul>
    </div>
  );
};

export default Counter;
