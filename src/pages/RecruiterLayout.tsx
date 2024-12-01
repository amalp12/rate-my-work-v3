import { UserButton } from "@/components/UserButton";
import { Separator } from "@/components/ui/separator";
import  Recruiter  from "@/pages/Recruiter";
import {AuthProps} from "@/types.d"

export default function RecruiterLayout(props: AuthProps) {
  const user = {
    email: "pXgq9@example.com",
    name: "John Doe",
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="w-full h-12 flex items-center justify-between px-4 py-2 mb-8 border-b-2 shadow-md"
      >
        <h2
          className="text-lg font-semibold"
        >
          Dashboard
        </h2>
        <UserButton
          user={user}
        />
      </div>
      <main className="flex-1">
        <Separator />
        <Recruiter {...props}/>
      </main>
    </div>
  )
}