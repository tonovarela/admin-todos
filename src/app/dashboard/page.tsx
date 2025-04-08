
import { WidgetItem } from "@/components";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();  
  // Si no hay sesion, redirigir a la pagina de login
  if (!session) {
    redirect('/api/auth/signin');
  }
  const { user } = session;
  return (
    <>
      <div className="grid gap-6  grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">
        <WidgetItem title="Usuario conectado S-side">
          <div className="flex flex-col">
            <span>{user?.name}</span>
            <span>{user?.image}</span>
            <span>{user?.email}</span>
            <pre>
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        </WidgetItem>
      </div>

    </>
  );
}