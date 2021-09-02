import styles from '../styles/Invoice.module.css'
import StatusMenu from '../components/StatusMenu'
import InvoiceBody from '../components/InvoiceBody'

const Invoice = () => {
  return (
    <div>
      <div className="flex">
        <p>Invoice</p>
        <p className={`${styles.text} text-xs mt-1.5 ml-2`}> (ใบแจ้งหนี้)</p>
      </div>
      <div>
        <StatusMenu />
        <InvoiceBody />
      </div>
    </div >
  )
}

export default Invoice