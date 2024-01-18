import { Outlet } from "react-router-dom";
import "./App.css";
import NavbarBottom from "./components/navbar/NavbarBottom";

function App() {
  return (
    <>
      <main
        className="relative grid grid-cols-1 items-start 
  sm:w-full md:w-[50%] lg:w-[40%] xl:w-[28%] 2xl:w-[25%] mx-auto h-[100vh] overflow-y-auto"
      >
        <div className="grid grid-cols-1 gap-2 items-start pt-8 px-8">
          <Outlet />
        </div>
      </main>
      <div className=" fixed bottom-0 left-0 w-full flex justify-center">
        <NavbarBottom />
      </div>
    </>
  );
}

export default App;
