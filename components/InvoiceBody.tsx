import { FC } from 'react'
import styles from '../styles/Invoice.module.css'

export interface InvoiceBodyProps {
  total?: string
}

const InvoiceBody: FC<InvoiceBodyProps> = ({ total }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-end">
        <div className="rounded-md bg-white shadow-md px-12 py-4 flex text-red-500">
          <p className="text-sm">ยอดชำระทั้งหมด</p>
          <p className="text-3xl mx-4">{total}</p>
          <p className="text-sm mt-4">บาท</p>
        </div>
      </div>
      <div className="flex text-xs">
        <p className="mt-1">Show</p>
        <div className="bg-gray-300 rounded-md px-2 py-1 mx-2">10</div>
        <p className="mt-1">Entries</p>
      </div>
      <div className="mt-4">
        <table className="w-full text-xs">
          <thead>
            <tr className={`${styles.table_header} ${styles.table}`}>
              <td className="py-4">No</td>
              <td className="py-4">Code</td>
              <td className="py-4">Project Name</td>
              <td className="py-4">Date</td>
              <td className="py-4">Customer Name</td>
              <td className="py-4">Payment Amount</td>
              <td className="py-4">Slip</td>
              <td className="py-4">Status</td>
            </tr>
          </thead>
          <tbody className={`${styles.table}`}>
            <tr>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InvoiceBody