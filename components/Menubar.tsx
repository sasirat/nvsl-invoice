import stylesMenubar from '../styles/Menubar.module.css'
import styleWrapper from '../styles/Wrapper.module.css'

const MenuBar = () => {
  return (
    <div className={`${stylesMenubar.bg}`}>
      <div className="text-center py-8 text-white text-xl">
        <h1>NVSL - IMS</h1>
      </div>
      <div className="mt-20 text-center text-white font-bold">
        <div className="my-8">Dashboard</div>
        <div className="my-8">Partner</div>
        <div className={`${styleWrapper.bg} ${stylesMenubar.select} my-8 text-gray-500 p-2 ml-4 rounded-l-full relative`}>Invoice</div>
      </div>
    </div>
  )
}

export default MenuBar