import StatusBarChart  from "./StatusBarChart"
import StatusPieChart from "./StatusPieChart"

const Charts = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
      <StatusBarChart />
      <StatusPieChart />
    </div>
  )
}

export default Charts