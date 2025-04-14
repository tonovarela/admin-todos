'use client';
import { useSession } from 'next-auth/react'
export default function ProfilePage() {
  const { data: session } = useSession();

  const user = session?.user;

  return (
<>
    <h1>Profile Page</h1>
    <pre>
      {JSON.stringify(session, null, 2)}
    </pre>
    <div> {user?.roles?.join(",")}</div>
</>
  );
}