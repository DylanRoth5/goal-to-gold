import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { logout } from '@/app/login/actions';
import Link from 'next/link';


export default async function Login() {

  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <Card className="w-80 py-8 shadow-2xl shadow-black bg-secondary overflow-visible">
        <div className="flex flex-col items-center justify-center w-96 bg-secondary px-20 -translate-x-8">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="font-bold text-4xl">Logout</CardTitle>
            <p className="pt-4 text-center">Are you sure you want to logout?</p>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center ">
            <form action={logout}>
              <Button formAction={logout}>Logout</Button>
            </form>
            <div className="flex flex-row items-center  justify-center pt-4">
              <p>else</p>
              <Link href={'/'}>
                <Button variant={'link'}>Go Back</Button>
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
