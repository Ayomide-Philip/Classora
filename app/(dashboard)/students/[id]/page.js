import StudentProfileCard from "@/components/dashboard/students/studentProfileCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page({ params }) {
  // Static student data - combines User model + Profile model
  const student = {
    // From User model
    _id: "67609afd1234567890abcdef",
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    board: {
      role: "member", // Can be: "owner", "admin", or "member"
    },
    createdAt: new Date().toISOString(),

    // From Profile model
    bio: "Passionate about software development and artificial intelligence. Always eager to learn new technologies and contribute to innovative projects.",
    phoneNumber: "+1 (555) 123-4567",
    gender: "Male",
    department: "Computer Science",
    faculty: "Engineering",
    degree: "Bachelor of Science",
    currentLevel: "3rd Year",
    enrollmentYear: 2024,
    socialHandles: {
      instagram: "johndoe_dev",
      twitter: "johndoe_code",
      github: "johndoe-dev",
      linkedin: "johndoe-developer",
    },
  };

  return (
    <main className="px-4 py-6 sm:py-8 md:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          href="/students"
          className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Students
        </Link>

        {/* Student Profile Card */}
        <StudentProfileCard student={student} />
      </div>
    </main>
  );
}
