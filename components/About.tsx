import favicon from "@/app/favicon.ico";
import { Card, CardContent } from "./ui/card";

export const About = () => {
  return (<div>
    <div className="container mx-auto p-4  flex flex-col xl:flex-row">
      <h2 className="text-4xl self-center text-center font-bold mt-8 m-4">Testimonials</h2>
      <Card className="mt-4 italic mx-10">
        <CardContent className="mx-10 mt-6 text-center font-minecraft">
        &#34;This app has changed my life! I&apos;ve never been more consistent with my
          habits.&#34; - Happy User
        </CardContent>
      </Card>
      <Card className="mt-4 italic mx-10">
        <CardContent className="mx-10 mt-6 text-center font-minecraft">
        &#34;The streak-based system is incredibly motivating. I love seeing my progress
          every day.&#34; - Satisfied User
        </CardContent>
      </Card>
    </div>
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="container mx-auto p-4 m-4">
        <h1 className="text-6xl font-bold xl:text-center">About</h1>
        <p className="mt-4">
          This is a simple habit tracker that helps you stay consistent with your
          goals. It uses a simple, streak-based system to help you stay motivated
          and on track.
        </p>
        <p className="mt-4">
          The app is built on NextJs, with Supabase for backend. The code is
          available on GitHub at{' '}
          <a
            className="text-blue-500 hover:text-blue-700"
            href="https://github.com/DylanRoth5/goal-to-gold"
          >
            https://github.com/DylanRoth5/goal-to-gold
          </a>.
        </p>
      </div>
      <div className="container mx-auto p-4 m-4">
        <h2 className="text-4xl font-bold">Features</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Track your habits with ease</li>
          <li>Visualize your progress with streaks</li>
          <li>Set daily, weekly, and monthly goals</li>
          <li>Receive reminders to stay on track</li>
          <li>Analyze your performance with detailed statistics</li>
        </ul>
      </div>
    </div>
  </div>
  );
};
