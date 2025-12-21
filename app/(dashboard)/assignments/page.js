import AssignmentGrid from "@/components/dashboard/assignments/assignmentgrid";
export default function Page() {
  const assignments = [
    {
      id: 1,
      title: "Data Structures Implementation",
      course: "CS 301 - Data Structures",
      expiresAt: "Dec 25, 2025 at 11:59 PM",
      totalStudents: 45,
      submittedCount: 32,
      description:
        "Implement a binary search tree with insertion, deletion, and traversal methods.",
      postedDate: "Dec 10, 2025",
    },
    {
      id: 2,
      title: "Machine Learning Project Report",
      course: "CS 401 - Machine Learning",
      expiresAt: "Dec 28, 2025 at 05:00 PM",
      totalStudents: 38,
      submittedCount: 15,
      description:
        "Submit final project report with model evaluation and analysis.",
      postedDate: "Dec 15, 2025",
    },
    {
      id: 3,
      title: "Database Design Assignment",
      course: "CS 302 - Database Systems",
      expiresAt: "Dec 30, 2025 at 11:59 PM",
      totalStudents: 50,
      submittedCount: 8,
      description:
        "Design a normalized database schema for an e-commerce application.",
      postedDate: "Dec 18, 2025",
    },
    {
      id: 4,
      title: "Web Development Portfolio",
      course: "CS 201 - Web Development",
      expiresAt: "Dec 20, 2025 at 11:59 PM",
      totalStudents: 42,
      submittedCount: 42,
      description:
        "Create a personal portfolio website using modern web technologies.",
      postedDate: "Dec 05, 2025",
    },
    {
      id: 5,
      title: "Algorithm Analysis Report",
      course: "CS 301 - Data Structures",
      expiresAt: "Jan 05, 2026 at 11:59 PM",
      totalStudents: 45,
      submittedCount: 12,
      description: "Analyze time and space complexity of sorting algorithms.",
      postedDate: "Dec 20, 2025",
    },
    {
      id: 6,
      title: "React Native Mobile App",
      course: "CS 201 - Web Development",
      expiresAt: "Jan 10, 2026 at 11:59 PM",
      totalStudents: 42,
      submittedCount: 5,
      description:
        "Build a cross-platform mobile application using React Native.",
      postedDate: "Dec 19, 2025",
    },
  ];

  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Assignments
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Track and manage all your course assignments
          </p>
        </div>

        {/* Assignments Grid */}
        <AssignmentGrid assignments={assignments} />
      </div>
    </main>
  );
}
