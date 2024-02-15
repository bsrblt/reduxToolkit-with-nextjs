"use client";

import { useDispatch, useSelector } from "react-redux";

import styles from "./Counter.module.css";
import { RootState } from "@/store/store";
import {
  decrement,
  increment,
  reset,
  toggleCounter,
} from "@/store/slices/counterSlice";
import { useState } from "react";
import { redirect } from "next/navigation";
export default function Counter() {
  const { value, toggle } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const [actionValue, setActionValue] = useState<number>(1);

  function toggleCounterHandler() {
    dispatch(toggleCounter());
  }

  function handleIncrement() {
    if (isNaN(Number(actionValue))) return;
    dispatch(increment(actionValue === 0 ? 1 : actionValue));
  }
  function handleDecrement() {
    if (isNaN(Number(actionValue))) return;
    dispatch(decrement(actionValue === 0 ? 1 : actionValue));
  }
  function handleReset() {
    setActionValue(1);
    dispatch(reset());
  }

  if (!isAuth) return redirect("/auth");

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>

      {toggle && (
        <>
          <div className={styles.value}>{value}</div>
          <div className={styles.actions}>
            <button onClick={handleDecrement}>Decrease</button>
            <div className={styles.reset}>
              <input
                type="number"
                value={actionValue}
                onChange={(e) => setActionValue(Number(e.target.value))}
              />
              <button onClick={handleReset}>Reset</button>
            </div>
            <button onClick={handleIncrement}>Increase</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}
