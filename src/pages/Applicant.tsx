import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { applicantProjects } from "@/data/projects"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Select from "react-select"
import { CheckCircle2, Clock, XCircle, ExternalLink, Edit, Plus } from "lucide-react"
import { projectUpdateSchema, type ProjectUpdateValues } from "../lib/schemas"
import { AuthProps } from "@/types.d"

// For demo purposes, using applicant ID 1
const CURRENT_APPLICANT_ID = "1"

const skillOptions = [
  { value: "React", label: "React" },
  { value: "Next.js", label: "Next.js" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "Node.js", label: "Node.js" },
  { value: "Python", label: "Python" },
  { value: "Django", label: "Django" },
  { value: "PostgreSQL", label: "PostgreSQL" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "Docker", label: "Docker" },
  { value: "AWS", label: "AWS" },
]

const statusConfig = {
  pending: {
    icon: Clock,
    color: "text-yellow-500",
    badge: "bg-yellow-100 text-yellow-800",
    text: "Pending Review"
  },
  verified: {
    icon: CheckCircle2,
    color: "text-green-500",
    badge: "bg-green-100 text-green-800",
    text: "Verified"
  },
  rejected: {
    icon: XCircle,
    color: "text-red-500",
    badge: "bg-red-100 text-red-800",
    text: "Changes Requested"
  }
}

const defaultProject: ProjectUpdateValues = {
  name: "",
  url: "",
  description: "",
  skills: [],
}

function ProjectForm({ 
  project = defaultProject, 
  onSubmit,
  mode = "create" 
}: { 
  project?: ProjectUpdateValues
  onSubmit: (values: ProjectUpdateValues) => void
  mode?: "create" | "edit"
}) {
  const form = useForm<ProjectUpdateValues>({
    resolver: zodResolver(projectUpdateSchema),
    defaultValues: project,
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project URL</FormLabel>
              <FormControl>
                <Input {...field} type="url" placeholder="https://github.com/your-username/project" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Describe your project and its key features..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skills Used</FormLabel>
              <Select
                isMulti
                options={skillOptions}
                value={skillOptions.filter(option => 
                  field.value.includes(option.value)
                )}
                onChange={(newValue) => {
                  field.onChange(newValue.map(option => option.value))
                }}
                className="react-select"
                classNamePrefix="react-select"
                placeholder="Select the skills used in this project..."
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          {mode === "create" ? "Create Project" : "Update Project"}
        </Button>
      </form>
    </Form>
  )
}

export default function ApplicantDashboard(props: AuthProps) {
  const { authToken, setAuthToken, handleLogout } = props
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<typeof applicantProjects[0]["projects"][0] | null>(null)
  const applicantData = applicantProjects.find(
    (ap) => ap.applicantId === CURRENT_APPLICANT_ID
  )

  console.log("authToken", authToken, "setAuthToken", setAuthToken, "handleLogout", handleLogout)

  const handleUpdateProject = (values: ProjectUpdateValues) => {
    console.log("Updating project with values:", values)
    // TODO: Implement project update logic
    setEditModalOpen(false)
  }

  const handleCreateProject = (values: ProjectUpdateValues) => {
    console.log("Creating new project with values:", values)
    // TODO: Implement project creation logic
    setCreateModalOpen(false)
  }

  if (!applicantData) {
    return (
      <div className="container mx-auto py-8">
        <Alert>
          <AlertDescription>No projects found.</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 relative min-h-screen pb-24">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applicantData.projects.map((project) => {
          const status = statusConfig[project.status]
          const StatusIcon = status.icon
          const canEdit = project.status === "rejected" || project.status === "pending"

          return (
            <Card key={project.name} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <StatusIcon className={`h-5 w-5 ${status.color}`} />
                </div>
                <Badge className={status.badge} variant="secondary">
                  {status.text}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                {project.feedback && (
                  <Alert className="mt-4">
                    <AlertDescription className="text-sm">
                      {project.feedback}
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  View Project
                  <ExternalLink className="h-4 w-4" />
                </a>
                {canEdit && (
                  <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1"
                        onClick={() => setSelectedProject(project)}
                      >
                        <Edit className="h-4 w-4" />
                        Edit Project
                      </Button>
                    </DialogTrigger>
                    {selectedProject && (
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Update Project</DialogTitle>
                          <DialogDescription>
                            Make changes to your project details below.
                          </DialogDescription>
                        </DialogHeader>
                        <ProjectForm
                          project={selectedProject}
                          onSubmit={handleUpdateProject}
                          mode="edit"
                        />
                      </DialogContent>
                    )}
                  </Dialog>
                )}
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {/* Floating Action Button for creating new project */}
      <Dialog open={createModalOpen} onOpenChange={setCreateModalOpen}>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-lg"
            size="icon"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Project</DialogTitle>
            <DialogDescription>
              Add a new project to your portfolio.
            </DialogDescription>
          </DialogHeader>
          <ProjectForm
            onSubmit={handleCreateProject}
            mode="create"
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}