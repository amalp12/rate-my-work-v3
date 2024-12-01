import * as z from "zod"

export const recruiterFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  company: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters." }),
  linkedinUrl: z
    .string()
    .url({ message: "Please enter a valid LinkedIn URL." })
    .regex(/^https?:\/\/(www\.)?linkedin\.com\/.*$/, {
      message: "Please enter a valid LinkedIn profile URL.",
    }),
})

export const applicantFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  linkedinUrl: z
    .string()
    .url({ message: "Please enter a valid LinkedIn URL." })
    .regex(/^https?:\/\/(www\.)?linkedin\.com\/.*$/, {
      message: "Please enter a valid LinkedIn profile URL.",
    }),
  skills: z.array(z.string()).min(1, {
    message: "Please select at least one skill.",
  }),
})

export const projectUpdateSchema = z.object({
  name: z.string().min(2, "Project name must be at least 2 characters"),
  url: z.string().url("Please enter a valid URL"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  skills: z.array(z.string()).min(1, "Please select at least one skill")
})

export type RecruiterFormValues = z.infer<typeof recruiterFormSchema>
export type ApplicantFormValues = z.infer<typeof applicantFormSchema>
export type ProjectUpdateValues = z.infer<typeof projectUpdateSchema>