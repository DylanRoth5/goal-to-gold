import Link from "next/link";
import { Button } from "./ui/button";

interface FrontProps {
  email?: string;

}
export default function Front({ email }: FrontProps) {
  return (
    <div className="flex flex-col animated-bg items-center animated-bg w-full overflow-hidden justify-center min-h-96 py-40 ">
      <div className="flex scale-75 xl:scale-100 flex-col items-center justify-center  flex-1  bg-background bg-opacity-20 h-40 w-[620px] overflow-visible py-10 shadow-2xl shadow-black drop-shadow-xl text-center">
        <div className="text-center flex flex-col items-center justify-center bg-background bg-opacity-20 px-10 py-4 h-64 w-[700px] ">
          {
            email ?
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl font-minecraft text-foreground p-2">Welcome back </h1>
                <p className="text-6xl text-amber-500 font-minecraft p-2">{email.split('@')[0]}!!</p>
              </div>
              :
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl flex flex-col xl:flex-row font-minecraft text-foreground font-bold">
                   {' '}
                   <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44" className="text-amber-500 translate-x-2" viewBox="0 0 24 24"> <path d="M16 4h-2v2h2v2H6v2H4v8h2v2h6v-2H6v-8h10v2h-2v2h2v-2h2v-2h2V8h-2V6h-2V4z" fill="currentColor"/></svg>
                  <p className="font-semibold align-middle tracking-tight text-foreground pl-2"><span className="ml-1 text-muted-foreground">Back</span><span className="text-3xl"></span><span className=" text-amber-500">Track</span></p>
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
          }
        </div>
      </div>
    </div>
  );
}