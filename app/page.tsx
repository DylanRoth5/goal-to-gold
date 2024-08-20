import Front from "@/components/Front";
import FrontBg from "@/components/FrontBg";
import NavBar from "@/components/NavBar";
import Tracker from "@/components/Tracker";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar></NavBar>
      <Front></Front>
      <Tracker></Tracker>
      <FrontBg></FrontBg>
      <footer className="w-full h-10 flex justify-center items-center">
        <div className="w-full text-center">
          <p className="text-sm">Made with ❤️ by Dylan</p>
        </div>
      </footer>
    </main>
  );
}
