import { DummyHistoryData } from '../assets/constant'
import Heading from '../components/Heading'
import Profile from '../components/Profile'
import HistoryCard from '../components/cards/HistoryCard'

export const History = () => {
  return (
    <>
      <div className=" flex flex-row justify-between flex-nowrap gap-4">
        <Heading text="History" />
        <Profile />
      </div>

      <div className="mt-10 flex flex-col gap-6 scale-100">
        <h2 className=' text-white font-bold text-xl'>20 April</h2>
        {DummyHistoryData.map((data, index) => (
          <HistoryCard
            key={index}
            title={data.title}
            description={data.description}
            Icon={data.Icon}
            amount={data.amount}
            bgColor={data.bgColor}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-6 scale-100">
        <h2 className=' font-bold text-xl'>12th March</h2>
        {DummyHistoryData.map((data, index) => (
          <HistoryCard
            key={index}
            title={data.title}
            description={data.description}
            Icon={data.Icon}
            amount={data.amount}
            bgColor={data.bgColor}
          />
        ))}
      </div>
    </>
  )
}
