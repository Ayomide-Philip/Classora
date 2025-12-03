import AnnoucementForm from "@/components/dashboard/annoucements/form";

export default function Page() {
  return (
    <div className="min-h-[60vh] bg-transparent px-4 py-10">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Create announcement
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Add a short title, pick a tag, and write the announcement
            description.
          </p>
        </header>

        <AnnoucementForm />
      </div>
    </div>
  );
}
