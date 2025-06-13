
import Button from '../../Button'
import { HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi'
import styles from "../header.module.css";

const HeaderActions = () => {
  return (
    <div className={styles.botoes_container}>
      <Button variant='icon'>
        <HiOutlineShoppingCart size={24}/>
      </Button>
      <Button variant='icon'>
        <HiOutlineUser size={24}/>
      </Button>
    </div>
  )
}

export default HeaderActions
