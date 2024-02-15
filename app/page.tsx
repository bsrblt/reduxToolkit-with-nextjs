"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
export default function HomePage() {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  return (
    <main>
      <h2 className={styles.center}>Home</h2>
      <p className={styles.center}>
        {!isAuth ? (
          <Link href="/auth">Login</Link>
        ) : (
          <Link href="/counter">Counter</Link>
        )}
      </p>
    </main>
  );
}
