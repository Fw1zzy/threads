import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn 
        appearance={{
          elements: {
            position: "flex",
            justifyContent: "center",
            alignItems: "center",
          }
        }}
        
  />;
}