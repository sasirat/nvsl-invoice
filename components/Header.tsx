import styles from '../styles/Wrapper.module.css'

const Header = () => {
  return (
    <div className="flex">
      <div className="">
        <input placeholder="search" className={`${styles.header} p-2 rounded-lg`}></input>
        <p className="text-xs text-gray-400 mt-2">Project management</p>
      </div>
      <div className="bg-white py-4 px-6 ml-2 rounded-lg">
        <p className="text-gray-400 text-xs">Accounting Manager</p>
        <p>Gong Yoo</p>
      </div>
    </div>
  )
}

export default Header