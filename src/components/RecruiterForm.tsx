"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { recruiterFormSchema, type RecruiterFormValues } from "@/lib/schemas"
import { useNavigate } from "react-router-dom"

export function RecruiterForm() {
  const navigate = useNavigate();

  const form = useForm<RecruiterFormValues>({
    resolver: zodResolver(recruiterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      linkedinUrl: "",
    },
  })

  function onSubmit(data: RecruiterFormValues) {
    // TODO: Handle form submission
    console.log(data)
    navigate("/recruiter")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>I am a Recruiter</CardTitle>
        <CardDescription>
          Complete your recruiter profile. Click save when you're done.
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="Enter your email address" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your company name" 
                      {...field} 
                    />
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
          </CardContent>
          <CardFooter>
            <Button type="submit">Save changes</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
