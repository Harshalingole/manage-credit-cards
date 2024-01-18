import { FC } from "react";
import Heading from "../components/Heading";
import Profile from "../components/Profile";
import CatalogueCard from "../components/cards/CatalogueCard";
import { dummyCatalogueData } from "../assets/constant";

const Catalogue: FC = () => {
  
  return (
    <>
      <div className=" flex flex-row justify-between flex-nowrap gap-4">
        <Heading text="Catalogue" />
        <Profile />
      </div>

      <div className="mt-14 flex flex-col gap-6 scale-105">
        {dummyCatalogueData.map((data, index) => (
          <CatalogueCard
            key={index}
            title={data.title}
            description={data.description}
            Icon={data.Icon}
          />
        ))}
      </div>
    </>
  );
};

export default Catalogue;
