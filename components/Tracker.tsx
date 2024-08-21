import clsx from "clsx";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Link from "next/link";
import { getCurrentDayName, getCurrentMonthName } from "@/utils/date";

export default function Tracker() {
  const days = ['none', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weeks = [1, 2, 3, 4]

  return (
    <div id="tracker" className="bg-secondary  w-full min-h-96 self-center overflow-hidden justify-center align-middle flex flex-col place-items-center">
      <Link href="#tracker" className="flex flex-row self-center justify-center align-middle place-items-center py-2 w-full">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 24 24" stroke="currentColor"> <path d="M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7V8z" fill="currentColor" /></svg>
      </Link>
      <div className="flex flex-col lg:flex-row self-center overflow-hidden justify-center align-middle pt-10 pb-20 place-items-center">

        <div className="flex flex-col  justify-center  py-20  px-20">

          <h1 className="text-4xl font-bold ">The Tracker</h1>
          <p className="mt-3 text-xl">
            Track your goals and earn rewards!
          </p>
        </div>

        <Card className="w-full xl:w-3/4 self-center justify-center">
          <CardHeader className="text-center lg:text-start">
            <CardTitle>Hit the Gym</CardTitle>
          </CardHeader>

          <CardContent className="grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 w-full">
            <div className="-rotate-90 lg:rotate-0 p-4 h-[800px] lg:h-20 translate-x-[150%] lg:translate-x-0 translate-y-[40%] lg:-translate-y-4">
              {
                days.map((day, index) => {
                  return <div key={day} className="h-2 m-2 flex">
                    <p key={day + index} className="rotate-90 lg:rotate-0 m-1 w-2 h-2 text-center text-xs">{index % 2 === 0 ? '' : day[0]}</p>
                    <div key={day + index} className="m-1 flex">
                      {
                        months.map((month) => {
                          return <div key={day + month} className="">
                            {day == 'none' ? <div>
                              <p key={day + month} className="rotate-90 lg:rotate-0 h-2 translate-y-[-100%] w-14 m-1 text-center text-xs">{month[0] + month[1] + month[2]}</p>
                            </div> : <div key={day + month}></div>}
                            <div className="flex">
                              {
                                weeks.map((week) => {
                                  return day != "none" ? <div key={day + month + week} className={clsx("h-2 w-2 m-1 ", Math.random() < 0.5 ? "bg-secondary" : Math.random() < 0.5 ? "bg-amber-400" : Math.random() < 0.5 ? "bg-amber-600" : "bg-amber-800")}></div> : <div key={day + month + week}></div>
                                })
                              }
                            </div>
                          </div>
                        })
                      }
                    </div>
                  </div>
                })
              }
            </div>
            <div className="py-4 flex flex-col lg:flex-row w-full justify-between">
              <div className="flex flex-col lg:w-3/4 ">
                <div className="flex flex-col lg:flex-row">
                  <p>
                    Streak:
                  </p>
                  <p className="text-amber-500 ml-2">
                    <strong> 962 days</strong>
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <p>
                    Average:
                  </p>
                  <p className="text-amber-500 ml-2">
                    <strong> 3.5 hs</strong>
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <p>
                    Standard deviation:
                  </p>
                  <p className="text-amber-500 ml-2">
                    <strong> 3.5 hs</strong>
                  </p>
                </div>
              </div>
              <Card className="bg-secondary pt-4 lg:mr-10 lg:w-1/2">
                <CardContent>
                  <CardTitle className="flex text-lg lg:text-2xl">Today: 3.5 hs
                  </CardTitle>
                  <svg fill="none" className="scale-125" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M18 6h2v2h-2V6zm-2 4V8h2v2h-2zm-2 2v-2h2v2h-2zm-2 2h2v-2h-2v2zm-2 2h2v-2h-2v2zm-2 0v2h2v-2H8zm-2-2h2v2H6v-2zm0 0H4v-2h2v2z" fill="#fb0" /> </svg>
                  <CardDescription>
                    Keep it up! You are doing great today!
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </CardContent>
          <CardDescription className="text-center">
            Track your goals and earn rewards!
          </CardDescription>
        </Card>
      </div>
    </div>
  )
}