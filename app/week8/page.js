"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = () => {
    gitHubSignIn();
  };
 
   
  const handleSignOut = () => {
    firebaseSignOut();
  };




   
  return (
    <main>
      <h1 class="text-4xl font-bold mb-5">Shopping List App</h1>
      <br />
      <div>
        { user? (<><p>Signed in as {user.displayName}</p>
          <br />
          <button onClick={handleSignOut}>Sign out</button>
          <br />
          <Link href={`week8/shopping-list`}>Continue to your Shopping List</Link></>) : 
          <button onClick={handleSignIn}>Sign in with GitHub</button>
        }
      </div>
    </main>
  );
}