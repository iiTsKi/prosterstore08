import NotFoundRedirect from "@/components/shared/header/notfound-redirect";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Image
          src={logo}
          width={48}
          height={48}
          alt={`${APP_NAME} logo`}
          priority={true}
        />
        <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold mb-04">Not Found</h1>
          <p className="text-desctructive">Could not find requested page</p>
          <NotFoundRedirect />
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
