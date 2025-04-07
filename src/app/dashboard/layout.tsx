
import { SideBar, TopMenu } from "@/components";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
     redirect('/api/auth/signin');
   }
   const { user } = session;
  if (!user) {
    redirect('/api/auth/signin');
  }
  let { image, name } = user;
  

 
  return (
    <>
      <SideBar username={name!} image={image || 'https://avatars.githubusercontent.com/u/1?v=4'} rol="ADMIN" />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />
        <div className="px-6 pt-6  p-2 m-2 pb-5 rounded bg-white">
          {children}
        </div>
      </div>
    </>
  );
}