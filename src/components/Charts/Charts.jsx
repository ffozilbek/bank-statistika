import StatusBarChart  from "./StatusBarChart"
import StatusPieChart from "./StatusPieChart"

const Charts = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-stretch justify-between">
      <StatusBarChart />
      <StatusPieChart />
    </div>
  )
}

export default Charts