import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { RecruiterForm } from "./RecruiterForm"
import { ApplicantForm } from "./ApplicantForm"
import { AuthProps } from "@/types.d"

export function ProfileTabs({authToken, setAuthToken, handleLogout}: AuthProps) {
  console.log(authToken, setAuthToken, handleLogout)
  return (
    <Tabs defaultValue="recruiter" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
        <TabsTrigger value="applicant">Applicant</TabsTrigger>
      </TabsList>
      <TabsContent value="recruiter">
        <RecruiterForm />
      </TabsContent>
      <TabsContent value="applicant">
        <ApplicantForm />
      </TabsContent>
    </Tabs>
  )
}
