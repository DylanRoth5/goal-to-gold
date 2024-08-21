import { About } from "@/components/About";
import Front from "@/components/Front";
import FrontBg from "@/components/FrontBg";
import NavBar from "@/components/NavBar";
import Tracker from "@/components/Tracker";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient()

export default async function Home() {
  const { data: { user } } = await supabase.auth.getUser()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar isUserLoggedIn={user ? true : false}/>
      <Front  email={user?.email}></Front>
      <Tracker></Tracker>
      <FrontBg></FrontBg>
      <About></About>
      <footer className="w-full h-10 flex justify-center items-center">
        <div className="w-full text-center">
          <p className="text-sm">Made with ❤️ by Dylan</p>
        </div>
      </footer>
    </main>
  );
}
