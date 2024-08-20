import Link from "next/link";
export default function Front() {
  return (
    <div className="flex flex-col animated-bg items-center animated-bg w-full justify-center min-h-96 py-80 ">
      <div className="flex flex-col items-center justify-center  flex-1  bg-background bg-opacity-20 h-40 w-[620px] overflow-visible py-10 shadow-2xl shadow-black drop-shadow-xl text-center">
        <div className="text-center flex flex-col items-center justify-center bg-background bg-opacity-20 px-10 py-4 h-40 w-[700px] ">

          <h1 className="text-6xl flex font-minecraft text-foreground font-bold">
            Welcome to {' '}
            <p className="font-semibold align-middle tracking-tight text-foreground pl-2"><span className=" text-slate-500">Goal</span><span className="text-3xl">to</span><span className=" text-amber-500">Gold</span></p>
          </h1>
          <div className="flex">
            <p className="mt-3 text-2xl font-minecraft text-foreground p-2">
              Get started by
            </p>
            <div className="flex my-4">
              <Link href="/register" className="block mt-4 font-minecraft bg-foreground lg:inline-block lg:mt-0 text-background light:text-foreground align-middle p-2 mr-4 hover:bg-slate-700 hover:dark:bg-slate-300">
                Registeing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}