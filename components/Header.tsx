"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { logout } from "@/store/slices/authSlice";
export default function Header() {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>Redux Auth</h1>
      </Link>
      <nav>
        {isAuth && (
          <ul>
            <li>
              <Link href="/user">My Profile</Link>
            </li>
            <li>
              <a href="#Sales">My Sales</a>
            </li>
            <li>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </li>
          </ul>
        )}
        {!isAuth && <Link href="/auth">Login</Link>}
      </nav>
    </header>
  );
}
