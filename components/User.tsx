"use client";
import { useSelector } from "react-redux";
import styles from "./User.module.css";
import { RootState } from "@/store/store";
import { redirect } from "next/navigation";
export default function User() {
  const { email, isAuth } = useSelector((state: RootState) => state.auth);

  if (!isAuth) return redirect("/auth");
  return (
    <main className={styles.profile}>
      <h2>User Profile</h2>
      <p>Welcome back {email}</p>
    </main>
  );
}
