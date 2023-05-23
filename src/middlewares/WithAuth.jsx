import { useRouter } from "next/router";
import useUser from "@/lib/app/hooks/useUser";
import Link from "next/link";

const WithAuthMiddleware = ({ children }) => {
  const { isAuth } = useUser();
  const router = useRouter();

  if (!isAuth) {
    return (
      <div>
        <h1>Your Access To This Page Has Expired Please Login Again</h1>
        <Link href={"/login"}>Login</Link>
      </div>
    );
  }
  return <>{children}</>;
};

export default WithAuthMiddleware;
