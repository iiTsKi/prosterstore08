"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFoundRedirect() {
  const [timer, setTimer] = useState(2);
  const router = useRouter();

  useEffect(() => {
    if (timer <= 0) {
      router.push("/");
      return;
    }
    const counting = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(counting);
  }, [timer, router]);
  return (
    <>
      <div className="mt-6">
        {timer > 0 ? (
          <span className="text-gray-500">
            Redirecting to back in ...{" "}
            <p className="font-bold text-red-400 text-2xl"> {timer} </p>
          </span>
        ) : (
          <div className="text-red-500">
            {" "}
            <p>Sorry seems like there&apos;s some issue</p>
            <Button
              variant="outline"
              className="mt-4 ml-2 text-white animate-pulse"
            >
              <Link href="/">Home</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
