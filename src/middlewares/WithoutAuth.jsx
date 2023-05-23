import useUser from "@/lib/app/hooks/useUser";
import { useRouter } from "next/router";
import { useEffect } from "react";

const WithoutAuthMiddleware = ({ children }) => {
  const { isAuth } = useUser();
  const router = useRouter();
};
