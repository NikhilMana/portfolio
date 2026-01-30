import { useMutation } from "@tanstack/react-query";
import { skills, experience, education, projects } from "@/lib/data";

// Static data hooks for Vercel deployment (no backend needed)

// === SKILLS ===
export function useSkills() {
  return {
    data: skills,
    isLoading: false,
    error: null,
  };
}

// === EXPERIENCE ===
export function useExperience() {
  return {
    data: experience,
    isLoading: false,
    error: null,
  };
}

// === EDUCATION ===
export function useEducation() {
  return {
    data: education,
    isLoading: false,
    error: null,
  };
}

// === PROJECTS ===
export function useProjects() {
  return {
    data: projects,
    isLoading: false,
    error: null,
  };
}

// === CONTACT ===
// For Vercel, we'll use a simple form submission approach
// You can integrate with services like Formspree, EmailJS, or Vercel serverless functions
export function useSendMessage() {
  return useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      // Option 1: Use a service like Formspree (uncomment and add your endpoint)
      // const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      // if (!res.ok) throw new Error("Failed to send message");
      // return { success: true };

      // Option 2: For now, just simulate success
      console.log("Message received:", data);
      await new Promise(resolve => setTimeout(resolve, 500));
      return { success: true, message: "Message sent successfully!" };
    },
  });
}
