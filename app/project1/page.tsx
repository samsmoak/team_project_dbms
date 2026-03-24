import ProjectPageLayout from '../components/ProjectPageLayout';
import { extendedProposalSections } from '../data/extendedProposalSections';

export default function Project1() {
  const teamMembers = [
    { name: 'Samuel Enam Zih', image: '/images/sam.png' },
  ];

  return (
    <ProjectPageLayout
      title="Proposal for CrisisEcho: LLM-Augmented Early Detection of Local Emergencies from Social Media"
      subtitle="Samuel Enam Zih — Department of Computer Science, Virginia Tech"
      date="CS5614 Database Management Systems"
      downloadHref="/proposals/CRISISECHO_EXTENDED_PROPOSAL.pdf"
      downloadLabel="CRISISECHO_EXTENDED_PROPOSAL.pdf"
      sections={extendedProposalSections}
      teamMembers={teamMembers}
    />
  );
}
