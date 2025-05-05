import Card from "../ui/Card"
import {
    CreditCardIcon,
    CheckCircleIcon,
    ClockIcon,
    XCircleIcon,
  } from '@heroicons/react/24/outline';

const Status = () => {
    const data = [
        {
          title: 'Jami arizalar',
          value: 145,
          icon: <CreditCardIcon className="h-10 w-10 text-blue-600" />,
        },
        {
          title: 'Ijobiy hal qilingan',
          value: 92,
          icon: <CheckCircleIcon className="h-10 w-10 text-green-600" />,
        },
        {
          title: 'Jarayonda',
          value: 37,
          icon: <ClockIcon className="h-10 w-10 text-yellow-500" />,
        },
        {
          title: 'Rad etilgan',
          value: 16,
          icon: <XCircleIcon className="h-10 w-10 text-red-600" />,
        },
      ];

  return (
    <div className="flex flex-col md:flex-row gap-5">
        {data.map(item=> (
            <Card key={item.title} title={item.title} value={item.value} icon={item.icon}/>
        ))}
    </div>
  )
}

export default Status