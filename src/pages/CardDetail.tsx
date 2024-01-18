import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import {
  ArrowLeftIcon,
  ShareIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import CreditCard from "../components/cards/CreditCard";
import { useAppSelector } from "../redux/reduxHooks";

const CardDetail: FC = () => {
  const navigate = useNavigate();
  const cardNum = useAppSelector((state) => state.app.cardNum);
  const [showCard, setShowCard] = useState(true);

  const handleBack = () => {
    navigate("/");
    setShowCard(false);
    setTimeout(() => {
      navigate("/");
    }, 300);
  };

  return (
    <div className={`flex flex-col gap-4 ${showCard ? "fadeIn" : "fadeOut"}`}>
      <ArrowLeftIcon
        onClick={handleBack}
        className="h-8 w-8 text-white hover:cursor-pointer font-bold "
      />

      <div>
        <Heading text="Salary" />
        <Heading text="card" />
      </div>
      <div className="overflow-y-auto  mb-4">
        <CreditCard cardNum={cardNum} />
      </div>

      <div className="flex flex-row justify-between items-center flex-nowrap">
        <div className="flex flex-col gap-1">
          <h2 className=" text-[#94A3D3] font-bold text-xl">Balance</h2>
          <Heading text="$2,748.00" />
        </div>

        <div className="flex gap-2">
          <button className="self-start py-4 px-4 border border-opacity-25 border-[#b3b7c4] rounded-xl text-[#94A3D3] font-normal text-xl">
            <ShareIcon className="h-6 w-6 text-white" />
          </button>
          <button className="self-start py-4 px-4 border border-opacity-25 border-[#b3b7c4] rounded-xl text-[#94A3D3] font-normal text-xl">
            <ClockIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* history */}
      <div className="mt-8 flex flex-col gap-6  bg-[#252F4B] h-[50vh] w-full scale-110 shadow-md  rounded-t-[3rem]  ">
        <div className=" scale-75"></div>
      </div>
    </div>
  );
};

export default CardDetail;
