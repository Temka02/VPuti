import type React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLazyGetMeQuery } from "../../entities/user/authApi";
import type { RootState } from "../store";
import { useEffect } from "react";
import { logout, setCredentials } from "../../entities/user/authSlice";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth?.token);

  const [getMe, { isLoading, isError }] = useLazyGetMeQuery();

  useEffect(() => {
    if (token) {
      getMe()
        .unwrap()
        .then((user) => {
          dispatch(setCredentials({ user, token }));
        })
        .catch(() => {
          dispatch(logout());
        });
    }
  }, [token, getMe]);

  if (isLoading) {
    return <span>Загрузка...</span>;
  }

  if (isError) {
    return <span>Oops, we have a problems</span>;
  }

  return <>{children}</>;
}
