import styles from '../styles/Wrapper.module.css'
import Header from './Header'
import Invoice from '../components/Invoice'

const Wrapper = () => {
  return (
    <div className={`${styles.bg} w-full`}>
      <div className="m-12">
        <Header />
        <Invoice />
      </div>
    </div>
  )
}

export default Wrapper