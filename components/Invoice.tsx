import styles from '../styles/Invoice.module.css'
import StatusMenu from '../components/StatusMenu'

const Invoice = () => {
  return (
    <div>
      <div className="flex">
        <p>Invoice</p>
        <p className={`${styles.text} text-xs mt-1.5 ml-2`}> (ใบแจ้งหนี้)</p>
      </div>
      <div>
        <StatusMenu />
      </div>
    </div >
  )
}

export default Invoice