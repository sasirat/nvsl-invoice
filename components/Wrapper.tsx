import styles from '../styles/Wrapper.module.css'
import Header from './Header'

const Wrapper = () => {
  return (
    <div className={`${styles.bg} w-full`}>
      <div className="m-12">
        <Header />
      </div>
    </div>
  )
}

export default Wrapper