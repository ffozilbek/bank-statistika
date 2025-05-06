import Card from "../ui/Card";
import {
  CreditCardIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import useFetch from "../../hooks/useFetch";

const Status = () => {
  const { data, loading, error } = useFetch("karta_ariza");

  const totalCount = data.length;
  let countCheck=0,
    countLoad=0,
    countFail=0;

  data.map(item=> {
    if(item.Status == 1) countCheck++;
    else if(item.Status == 2) countLoad++;
    else if(item.Status == 3) countFail++;
  })

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="w-[100%] p-5 bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-75 ease-linear rounded-md relative">
        <h1 className="text-dusty-indigo uppercase mb-2">Jami arizalar</h1>
        <p className="font-semibold text-4xl text-dark-indigo">{totalCount}</p>
        <CreditCardIcon className="h-10 w-10 text-[#3498db] absolute top-5 right-5" aria-hidden="true"/>
      </div>

      <div className="w-[100%] p-5 bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-75 ease-linear rounded-md relative">
        <h1 className="text-dusty-indigo uppercase mb-2">Ijobiy hal qilingan</h1>
        <p className="font-semibold text-4xl text-dark-indigo">{countCheck}</p>
        <CheckCircleIcon className="h-10 w-10 text-[#1abc9c] absolute top-5 right-5" aria-hidden="true"/>
      </div>

      <div className="w-[100%] p-5 bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-75 ease-linear rounded-md relative">
        <h1 className="text-dusty-indigo uppercase mb-2">Jarayonda</h1>
        <p className="font-semibold text-4xl text-dark-indigo">{countLoad}</p>
        <ClockIcon className="h-10 w-10 text-[#fdcb6e] absolute top-5 right-5" aria-hidden="true"/>
      </div>

      <div className="w-[100%] p-5 bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-75 ease-linear rounded-md relative">
        <h1 className="text-dusty-indigo uppercase mb-2">Rad etilgan</h1>
        <p className="font-semibold text-4xl text-dark-indigo">{countFail}</p>
        <XCircleIcon className="h-10 w-10 text-[#ff7675] absolute top-5 right-5" aria-hidden="true"/>
      </div>

    </div>
  );
};

export default Status;
