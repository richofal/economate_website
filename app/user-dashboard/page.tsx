import Sidebar from "../components/Sidebar";
import Dompet from "../components/Dompet";

const UserDashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        {" "}
        {/* Pastikan Dompet menyesuaikan sisa ruang */}
        <Dompet />
      </div>
    </div>
  );
};

export default UserDashboard;
