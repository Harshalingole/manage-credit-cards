import { FC } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ArrowPathRoundedSquareIcon,
  ClockIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const NavbarBottom: FC = () => {
  return (
      <div className="navbar-bg p-4   bg-slate-400 rounded-t-[3rem] shadow-xl grid  grid-cols-4 place-items-center gap-[2.56rem]">
        <NavLink
          to={`/` || `card-detail`}
          className={({ isActive, isPending }) =>
            isPending ? "pending p-[1rem] rounded-full" : isActive ? "active-icon-bg" : "p-[1rem] rounded-full"
          }
        >
          <HomeIcon className="h-8 w-8 text-[#7A91D2]" />
        </NavLink>
        {/*  */}
        <NavLink
          to={`/catalogue`}
          className={({ isActive, isPending }) =>
            isPending ? "pending p-[1rem] rounded-full" : isActive ? "active-icon-bg" : "p-[1rem] rounded-full"
          }
        >
          <ArrowPathRoundedSquareIcon className="h-8 w-8 text-[#7A91D2]" />
        </NavLink>
        {/*  */}
        <NavLink
          to={`/history`}
          className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? "active-icon-bg" : "p-[1rem] rounded-full"
          }
        >
          <ClockIcon className="h-8 w-8 text-[#7A91D2]" />
        </NavLink>
        {/*  */}
        <NavLink
          to={`/menu`}
          className={({ isActive, isPending }) =>
            isPending ? "pending p-[1rem] rounded-full" : isActive ? "active-icon-bg" : "p-[1rem] rounded-full"
          }
        >
          <Squares2X2Icon className="h-8 w-8 text-[#7A91D2]" />
        </NavLink>
      </div>
  );
};

export default NavbarBottom;
