// Counter.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/actions/countAc';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);

    return (
        <div>
            <h1>Count: {count}</h1>
            <hr />
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;
