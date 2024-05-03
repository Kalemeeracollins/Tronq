import Dashboard from "./dashboard"
import NavBar from "./navBar"
import Whatsapp from "./Whatsapp"
export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden" >
    <NavBar />
    <Dashboard />
    </div>
  );
}
