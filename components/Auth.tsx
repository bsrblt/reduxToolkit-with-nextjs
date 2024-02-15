"use client";
import { FormEvent } from "react";
import styles from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/slices/authSlice";
import { redirect } from "next/navigation";
import { RootState } from "@/store/store";

export default function Auth() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: RootState) => state.auth);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    let user: { email: string; password: string } = { email: "", password: "" };
    for (const [name, value] of formData.entries()) {
      if (name === "email" || name === "password") {
        user[name] = value as string;
      }
    }

    if (
      !user.email ||
      !user.email.includes("@") ||
      !user.password ||
      user.password.trim().length < 5
    ) {
      return;
    }

    dispatch(login(user));
  }

  if (isAuth) return redirect("/");

  return (
    <main className={styles.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input required name="email" type="email" id="email" />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input required name="password" type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
}
