import Navbar from "../../components/navbar/Navbar";
import PatientStats from "../../components/patient/PatientStats";
import MyReports from "../../components/patient/MyReports";
import ImageUploader from "../../components/upload/ImageUploader";

export default function PatientDashboard() {
  return (
    <div className="min-h-screen bg-[#F4F7FB]">
      <Navbar />

      <div className="p-8">

        <h1 className="text-4xl font-bold text-primary">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-2">
          View your oral health screening history
        </p>

        <PatientStats />

        <div className="mt-8">
          <MyReports />
        </div>

        {/* Upload Oral Image */}

        <div className="mt-8">
          <ImageUploader />
        </div>

      </div>
    </div>
  );
}