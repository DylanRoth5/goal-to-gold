import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

export default function NavBar() {
  const link_class = "block mt-4 lg:inline-block lg:mt-2 dark:text-white hover:dark:text-white align-middle hover:border-b-2 h-8 px-4 border-foreground";

  return (
    <nav className="flex items-center flex-row bg-background bg-opacity-50 justify-between align-middle self-center flex-wrap w-full bg-teal p-6 ">
      <div className="flex w-full xl:w-40 items-center justify-center flex-shrink-0 text-white mr-6">
        <Link href={"/"} className="flex items-center flex-shrink-0 dark:text-white mr-6 hover:scale-110 ml-4 duration-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pickaxe text-amber-500 scale-"><path d="M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912" /><path d="M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393" /><path d="M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z" /><path d="M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319" /></svg>
          <p className="font-semibold font-minecraft text-md align-middle tracking-tight dark:text-white pl-2"><span className=" text-3xl text-muted-foreground">Goal</span>to<span className=" text-3xl text-amber-500">Gold</span></p>
        </Link>
      </div>
      <div className="w-full hidden xl:flex flex-grow lg:flex lg:items-center lg:w-auto h-10">
        <div className="text-sm hidden lg:block lg:flex-grow ">
          <Link href="/" className={link_class}>
            Home
          </Link>
          <Link href="/#tracker" className={link_class}>
            Tracker
          </Link>
          <Link href="/#about" className={link_class}>
            About
          </Link>
        </div>
        <div className="hidden lg:block text-md ">
          <ul className="flex flex-col lg:flex-row list-none align-middle lg:ml-auto">
            <li className="mr-3">
              <ModeToggle></ModeToggle>
            </li>
            <li>
              <Link href="/login" className={link_class}>
                Login
              </Link>
            </li>
            <li>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}