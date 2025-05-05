import BarChart  from "./BarChart"
import PieChart from "./PieChart"

const Charts = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
      <BarChart />
      <PieChart />
    </div>
  )
}

export default Charts