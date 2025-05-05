import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-blue-800 text-white">
      <h1 className="text-9xl font-extrabold mb-5">404</h1>
      <p className="uppercase text-xl mb-5">Sahifa topilmadi</p>
      <Link to="/" className="bg-white p-3 text-blue-800 rounded-md">Bosh sahifaga qaytish</Link>
    </div>
  )
}

export default NotFound