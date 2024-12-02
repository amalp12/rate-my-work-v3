"use client"

import { useState } from "react"
import { applicants } from "@/data/applicants"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { AuthProps, ProjectDetails } from "@/types.d"

export default function RecruiterPage(props: AuthProps) {
  const { authToken, setAuthToken, handleLogout } = props
  const [selectedApplicant, setSelectedApplicant] = useState(applicants[0])
  const [verifiedProjects, setVerifiedProjects] = useState<Record<string, boolean>>({})

  console.log("authToken", authToken, "setAuthToken", setAuthToken, "handleLogout", handleLogout)
  const handleVerifyProject = (projecDetails: ProjectDetails) => {

    // setVerifiedProjects(prev => ({
    //   ...prev,
    //   [projectName]: !prev[projectName]
    // }))
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Recruiter Dashboard</h1>
      <div className="grid grid-cols-12 gap-6">
        {/* Left side - Scrollable list */}
        <div className="col-span-4 bg-card rounded-lg border">
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="p-4 space-y-2">
              {applicants.map((applicant) => (
                <div
                  key={applicant.id}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedApplicant.id === applicant.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  }`}
                  onClick={() => setSelectedApplicant(applicant)}
                >
                  <h3 className="font-medium">{applicant.name}</h3>
                  <p className="text-sm truncate">
                    {applicant.skills.length} skills
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Right side - Applicant details */}
        <div className="col-span-8">
          <Card>
            <CardHeader>
              <CardTitle>{selectedApplicant.name}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedApplicant.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Projects</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {selectedApplicant.projects.map((project, index) => (
                      <AccordionItem key={project.name} value={`item-${index}`}>
                        <AccordionTrigger>
                          <div className="flex items-center gap-2">
                            {project.name}
                            {verifiedProjects[project.name] && (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pt-2">
                            <p className="text-sm text-muted-foreground">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {project.skills.map((skill) => (
                                <Badge
                                  key={skill}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center justify-between mt-4">
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline"
                              >
                                View Project →
                              </a>
                              <Button
                                variant={verifiedProjects[project.name] ? "outline" : "default"}
                                size="sm"
                                onClick={() =>{
                                   // create projectDetails object
                                    const projectDetails = {
                                      projectName: project.name,
                                      description: project.description,
                                      user: selectedApplicant.name,
                                      sendersAddress: selectedApplicant.email,
                                      isVerified: verifiedProjects[project.name]

                                    }

                                   handleVerifyProject(projectDetails)
                                  }
                                  }
                              >
                                {verifiedProjects[project.name] ? "Unverify Project" : "Verify Project"}
                              </Button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
                <div className="flex items-center justify-end pt-4 border-t">
                  <a
                    href={`https://linkedin.com/in/${selectedApplicant.linkedIn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}