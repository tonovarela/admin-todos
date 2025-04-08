'use client';
import { useSession } from 'next-auth/react'
export default function ProfilePage() {
  const { data: session } = useSession();

  return (
<>
    <h1>Profile Page</h1>
    <pre>
      {JSON.stringify(session, null, 2)}
    </pre>
</>
  );
}