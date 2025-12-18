import StudentProfileCardHeader from "./studentParentCardHeader";
import StudentCardBio from "./studentCardBio";
import StudentCardPersonalInfo from "./studentCardPersonalInfo";
import StudentCardAcademicsInfo from "./studentCardAcademicInfo";
import StudentCardSocialHandles from "./studentCardSocialHandles";
export default async function StudentProfileCard({ student }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
      <StudentProfileCardHeader student={student} />
      <div className="px-6 py-6 sm:px-8 space-y-6">
        <StudentCardBio student={student} />
        <StudentCardPersonalInfo student={student} />
        <StudentCardAcademicsInfo student={student} />
        <StudentCardSocialHandles student={student} />
      </div>
    </div>
  );
}
