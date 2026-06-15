import { Icon } from "@iconify/react"

const Toogle = ({toggleMenu}) => {
  return (
    <div>
        <Icon icon="healthicons:ui-menu" width="30" height="30" className="text-white cursor-pointer"
        onClick={toggleMenu}
        />
    </div>
  )
}

export default Toogle