import ProjectPageLayout from '../components/ProjectPageLayout';
import { progressReportSections } from '../data/progressReportSections';

export default function ProgressReport() {
  const teamMembers = [
    { name: 'Samuel Enam Zih', image: '/images/sam.png' },
  ];

  return (
    <ProjectPageLayout
      title="CrisisEcho: Project Checkpoint Report"
      subtitle="LLM-Augmented Early Detection of Local Emergencies from Social Media"
      date="Samuel Enam Zih — Department of Computer Science, Virginia Tech"
      downloadHref="/proposals/CRISISECHO_PROGRESS_REPORT.pdf"
      downloadLabel="CRISISECHO_PROGRESS_REPORT.pdf"
      sections={progressReportSections}
      teamMembers={teamMembers}
    />
  );
}
