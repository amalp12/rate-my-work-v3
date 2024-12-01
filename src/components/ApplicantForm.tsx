"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Select from "react-select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { applicantFormSchema, type ApplicantFormValues } from "@/lib/schemas"
import { useNavigate } from "react-router-dom"

const skillOptions = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "React", label: "React" },
  { value: "Node.js", label: "Node.js" },
  { value: "Python", label: "Python" },
  { value: "Java", label: "Java" },
  { value: "C++", label: "C++" },
  { value: "Ruby", label: "Ruby" },
  { value: "Go", label: "Go" },
  { value: "SQL", label: "SQL" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "AWS", label: "AWS" },
  { value: "Docker", label: "Docker" },
  { value: "Kubernetes", label: "Kubernetes" },
  { value: "Git", label: "Git" },
]

export function ApplicantForm() {
  const navigate = useNavigate();

  const form = useForm<ApplicantFormValues>({
    resolver: zodResolver(applicantFormSchema),
    defaultValues: {
      name: "",
      linkedinUrl: "",
      skills: [],
    },
  })

  function onSubmit(data: ApplicantFormValues) {
    // TODO: Handle form submission
    console.log(data)
    navigate("/applicant")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>I am an Applicant</CardTitle>
        <CardDescription>
          Complete your applicant profile. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedinUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn Profile URL</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="https://linkedin.com/in/your-profile" 
                      {...field} 
                    />
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
                  <FormLabel>Skills</FormLabel>
                  <Select
                    isMulti
                    options={skillOptions}
                    value={skillOptions.filter(option => 
                      field.value.includes(option.value)
                    )}
                    onChange={(newValue) => {
                      field.onChange(newValue.map(option => option.value))
                    }}
                    placeholder="Select skills..."
                    className="react-select"
                    classNamePrefix="react-select"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Save changes</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}