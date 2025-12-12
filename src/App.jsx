import { Outlet } from "react-router";
import Menu from "./components/Menu";

export default function App() {
    return(
        <div>
            <Menu />
            <div className="page">
                <Outlet />
            </div>
        </div>
    );
}