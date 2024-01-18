import { FC } from "react";
import { LuNfc } from "react-icons/lu";
import { IoSquareOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { setCarNum } from "../../redux/appSlice";
import { useAppDispatch } from "../../redux/reduxHooks";
const CreditCard: FC<{ cardNum: number,isRotate?:boolean }> = ({ cardNum,isRotate=false }) => {
   const dispatch  =  useAppDispatch() 
   const navigate = useNavigate();
   const onClick = () => {
    navigate("/card-detail")
    dispatch( setCarNum({value:cardNum}))
   }
  return (
    <div onClick={onClick}  className={`${isRotate ? "transform rotate-90 -ml-[8rem]" : "" }   hover:cursor-pointer`}>
      <div
        className={`flex flex-col  rounded-2xl bg-slate-50 w-[23rem] h-60  ${
          cardNum === 1 ? "credit-card1-bg" : "credit-card2-bg"
        }  p-8 ${isRotate ? "transform  rotate-180" : "" }`}
      >
        <div className="flex  flex-col gap-4">
          {/* Card Company Detail */}
          <div className="flex flex-row gap-4 ">
            <h2 className="text-white font-extrabold text-3xl">CB</h2>
            <h2 className="text-white font-thin text-xl self-center">|</h2>
            <h2 className="text-white text-base self-center font-thin">
              Universal Bank
            </h2>
          </div>

          {/* Separator Line */}
          {/* <hr className="border-white my-2" /> */}
          <div className=" flex flex-row justify-between items-center p-2 ">
            <IoSquareOutline className="h-6  w-8 rounded-lg scale-150 bg-slate-50 opacity-25" />
            <LuNfc className="h-12 w-6 scale-150" />
          </div>

          {/* Card Detail */}
          <div className="flex flex-row justify-between">
            <div>
              <h2 className="text-white font-extrabold  text-[1.4rem]">
                5489 7452 5726 9827
              </h2>
              <p className="text-white font-thin text-base">04/24</p>
            </div>
            <div className="h-8 w-12 self-end">
              <img
                className="h-full w-full"
                src="https://i.pinimg.com/originals/ca/0c/70/ca0c7039ddcf224cb6b075cb59e4677e.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
