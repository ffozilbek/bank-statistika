const Card = ({title,value,icon}) => {
  return (
    <div className='w-[100%] p-5 bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-75 ease-linear rounded-md relative'>
        <h1 className="text-dusty-indigo uppercase mb-2">{title}</h1>
        <p className="font-semibold text-4xl text-dark-indigo">{value}</p>
        <div className="absolute top-5 right-5">{icon}</div>
    </div>
  )
}

export default Card