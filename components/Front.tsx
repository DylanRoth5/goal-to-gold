import Link from "next/link";
import { Button } from "./ui/button";
export default function Front() {
  return (
    <div className="flex flex-col animated-bg items-center animated-bg w-full overflow-hidden justify-center min-h-96 py-40 ">
      <div className="flex scale-75 xl:scale-100 flex-col items-center justify-center  flex-1  bg-background bg-opacity-20 h-40 w-[620px] overflow-visible py-10 shadow-2xl shadow-black drop-shadow-xl text-center">
        <div className="text-center flex flex-col items-center justify-center bg-background bg-opacity-20 px-10 py-4 h-64 w-[700px] ">

          <h1 className="text-6xl flex flex-col xl:flex-row font-minecraft text-foreground font-bold">
            Welcome to {' '}
            <p className="font-semibold align-middle tracking-tight text-foreground pl-2"><span className="ml-1 text-muted-foreground"> Goal</span><span className="text-3xl"> to </span><span className=" text-amber-500">Gold</span></p>
          </h1>
          <div className="flex">
            <p className="mt-3 text-2xl font-minecraft text-foreground p-2">
              Get started by
            </p>
            <div className="flex my-4">
              <Link href="/register">
                <Button>Registering</Button>
              </Link>
            </div>
          </div>
          <div className="flex lg:hidden">
            <p className="mt-3 text-2xl font-minecraft text-foreground p-2">
              or
            </p>
            <div className="flex my-4">
              <Link href="/login">
                <Button>Log in</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}