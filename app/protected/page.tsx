import { About } from "@/components/About";
import Front from "@/components/Front";
import FrontBg from "@/components/FrontBg";
import NavBar from "@/components/NavBar";
import Tracker from "@/components/Tracker";
import { supabase } from "@/utils/supabase";

export default async function Home() {
  const { data: { user } } = await supabase.auth.getUser()

  console.log(user)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar isUserLoggedIn={user ? true : false}></NavBar>
      <Front email={user?.email}></Front>
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
