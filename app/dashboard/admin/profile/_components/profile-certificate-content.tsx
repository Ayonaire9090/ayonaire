import { ProfileCertificateCard } from "./profile-certificate-card";

const mockCertificates = [
  {
    title: "Phthon Software Engineer",
    issueDate: "Oct 2023",
    certificateId: "GDA-8829-QX12",
  },
  {
    title: "Java Software Engineer",
    issueDate: "Oct 2023",
    certificateId: "GDA-8829-QX12",
  },
  {
    title: "Phthon Software Engineer",
    issueDate: "Oct 2023",
    certificateId: "GDA-8829-QX12",
  },
];

export const ProfileCerificateContent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {mockCertificates.map((cert, idx) => (
        <ProfileCertificateCard
          key={idx}
          title={cert.title}
          issueDate={cert.issueDate}
          certificateId={cert.certificateId}
        />
      ))}
    </div>
  );
};
