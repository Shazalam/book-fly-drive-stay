"use client"
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../(hooks)/redux";
import { getCurrentUser } from "../(store)/slices/authSlice";

export default function GlobalAuthInitializer() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((s) => s.auth);
  const pathname = usePathname();


  useEffect(() => {

    if (pathname === "/login" || pathname === "/register") return;

    if (!user) {
      dispatch(getCurrentUser());
    }

  }, [dispatch, pathname]); // avoid infinite loops

  return null; // this component doesn’t render anything visually
}
