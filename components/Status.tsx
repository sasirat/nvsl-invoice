import { FC } from 'react'
import Link from 'next/link'
export interface ButtonStatusProps {
  name?: string;
  href?: string
  active?: boolean;
  color?: string;
}

const ButtonStatus: FC<ButtonStatusProps> = ({ name, href, active, color }) => {
  return (
    <Link href={`/${href ? `?status=${href}` : ''}`}>
      {active
        ? (
          <div className="text-center rounded-md flex-1 p-2 border-t-2 border-r-2 border-l-2 border-gray-100 bg-white" >
            <p>{name}</p>
          </div>
        ) : (
          <div className="text-center rounded-md p-2 flex-1 border-t-2 border-r-2 border-l-2 border-gray-100 bg-gray-100">
            <p>{name}</p>
          </div>
        )}
    </Link>
  )
}

export default ButtonStatus