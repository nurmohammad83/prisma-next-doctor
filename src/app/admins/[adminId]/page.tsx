interface Props {
  params:{
    adminId:number
  }
}

const Admins = (props:Props) => {
    const {adminId}=props.params
  return (
    <div>Admins No {adminId}</div>
  )
}
export default Admins