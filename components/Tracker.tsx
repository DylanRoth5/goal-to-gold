import clsx from "clsx";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Link from "next/link";
import { getCurrentDayName, getCurrentMonthName } from "@/utils/date";

export default function Tracker() {
  const days = ['none', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weeks = [1, 2, 3, 4]

  return (
    <div className="bg-secondary w-full min-h-96 self-center justify-center align-middle flex flex-col place-items-center">
      <Link href="#tracker" className="flex flex-row self-center justify-center align-middle place-items-center py-2 w-full">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 24 24" stroke="currentColor"> <path d="M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7V8z" fill="currentColor"/></svg>
      </Link>
      <div className="flex flex-row self-center justify-center align-middle place-items-center">

      <div className="flex flex-col  justify-center min-h- py-40  px-20 mx-20">

        <h1 className="text-4xl font-bold ">Tracker</h1>
        <p className="mt-3 text-xl">
          Track your goals and earn rewards!
        </p>
      </div>

      <Card id="tracker">
        <CardHeader>
          <CardTitle>Tracker</CardTitle>
        </CardHeader>

        <CardContent>
          <div className=" p-4 translate-y-[-10%] scale-105">
            {
              days.map((day, index) => {
                return <div key={day} className="h-2 m-2 flex">
                  <p key={day + index} className="m-1 w-2 h-2 text-center text-xs">{index % 2 === 0 ? '' : day[0]}</p>
                  <div key={day + index} className="m-1 flex">
                    {
                      months.map((month) => {
                        return <div key={day+month} className="">
                          {day == 'none' ? <div>
                            <p key={day+month} className="h-2 translate-y-[-100%] w-14 m-1 text-center text-xs">{month[0] + month[1] + month[2]}</p>
                          </div> : <div key={day+month}></div>}
                          <div className="flex">
                            {
                              weeks.map((week) => {
                                return day != "none" ? <div key={day+month+week} className={clsx("h-2 w-2 m-1 ", Math.random() < 0.5 ? "bg-secondary" : Math.random() < 0.5 ? "bg-amber-400" : Math.random() < 0.5 ? "bg-amber-600" : "bg-amber-800")}></div> : <div key={day+month+week}></div>
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
          <div className="py-4 flex flex-row">
            <div className="flex flex-col w-3/4 ">
              {/* <p>
                Today: {
                  getCurrentDayName()
                } 

                {
                  getCurrentMonthName()
                }
              </p> */}
              <p>
              Streak: <strong>962 days</strong>
              </p>
              <p>
              Average: <strong>3.5 hs</strong>
              </p>
              <p>
              Standard deviation: <strong>3.5 hs</strong>
              </p>
            </div>

            <Card className="bg-secondary pt-4 w-1/2">
              <CardContent>
                <CardTitle className="flex">Today: 3.5 hs
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide mx-2 lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                </CardTitle>
                <CardDescription>
                  Track your goals and earn rewards!
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <CardDescription>
            Track your goals and earn rewards!
          </CardDescription>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}