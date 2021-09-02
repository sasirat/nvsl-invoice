import { useRouter } from 'next/router'
import ButtonStatus from '../components/Status'

const StatusMenu = () => {
  const router = useRouter()

  return (
    <div className="flex">
      <ButtonStatus name="ทั้งหมด" active={!router.query.status} />
      <ButtonStatus name="รอชำระเงิน" href="payment" active={router.query.status === 'payment'} />
      <ButtonStatus name="รอตรวจสอบ" href="review" active={router.query.status === 'review'} />
      <ButtonStatus name="จ่ายแล้ว" href="paid" active={router.query.status === 'paid'} />
      <ButtonStatus name="ไม่สำเร็จ" href="fail" active={router.query.status === 'fail'} />
      <ButtonStatus name="ยกเลิก" href="cancel" active={router.query.status === 'cancel'} />
    </div>
  )
}

export default StatusMenu