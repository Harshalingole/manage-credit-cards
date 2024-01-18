import React, { FC} from "react";

export interface HistoryCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
  amount:string,
  bgColor: string
}

const HistoryCard: FC<HistoryCardProps> = ({
  title,
  description,
  Icon,
  amount,
  bgColor  
}) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      {/* Icon */}
      <div style={{backgroundColor: bgColor}} className={`catalogue-icon-bg flex items-center  justify-center col-span-1 h-12 self-start  shadow shadow-[#94A3D3]`}>
        <Icon className="h-6 w-6 text-white " />
      </div>

      {/* Content */}
      <div className="flex flex-row justify-between flex-nowrap gap-2 pb-4 border-b border-opacity-15 border-[#99aef0] col-span-5">
        <div className="flex flex-col items-start justify-start gap-0 flex-nowrap">
          <h2 className="text-white text-lg font-medium">{title}</h2>
          <h2 className="text-[#94A3D3] text-base font-normal">
            {description}
          </h2>
        </div>

        <h2 className="self-start py-2 px-6  text-white font-bold text-xl">
          {amount}
        </h2>
      </div>
    </div>
  );
};

export default HistoryCard;
