import Heading from "../components/Heading";
import Profile from "../components/Profile";
import CreditCard from "../components/cards/CreditCard";

const Home = () => {
  return (
    <>
      {/*  */}
      <div className="flex flex-row flex-nowrap justify-between items-center gap-2">
        <div>
          <Heading text="Bank" />
          <Heading text="Cards" />
        </div>
        <Profile />
      </div>

      {/*  */}
      <div className="flex flex-col gap-1">
        <h2 className=" text-[#94A3D3] font-bold text-xl">Balance</h2>
        <Heading text="$2,748.00" />
      </div>

      {/* Credit Cards */}
      <div className="max-w-screen-xl overflow-x-auto flex  flex-nowrap gap-4 mt-4  h-[25rem]">
        <CreditCard cardNum={1} isRotate={true} />
        <CreditCard cardNum={2} isRotate={true} />
      </div>
    </>
  );
};

export default Home;
