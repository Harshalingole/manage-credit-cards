import React, { FC} from "react";

export interface CatalogueCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

const CatalogueCard: FC<CatalogueCardProps> = ({
  title,
  description,
  Icon,
}) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      {/* Icon */}
      <div className="catalogue-icon-bg flex items-center justify-center col-span-1 h-12 self-start shadow-xs shadow-[#94A3D3]">
        <Icon className="h-6 w-6 text-white " />
      </div>

      {/* Content */}
      <div className="flex flex-row justify-between flex-nowrap gap-2 pb-4 border-b border-opacity-15 border-[#94A3D3] col-span-5">
        <div className="flex flex-col items-start justify-start gap-0 flex-nowrap">
          <h2 className="text-white text-lg font-medium">{title}</h2>
          <h2 className="text-[#94A3D3] text-base font-normal">
            {description}
          </h2>
        </div>

        <button className="self-start py-1 px-6 border border-opacity-25 border-[#94A3D3] rounded-xl text-[#94A3D3] font-normal text-xl">
          Pay
        </button>
      </div>
    </div>
  );
};

export default CatalogueCard;
