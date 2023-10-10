'use client'

import { Button as AntButton } from "antd"
import { ReactNode } from "react"

const Button = ({children,...props}:{
    children:ReactNode,props?:any
}) => {
  return (
    <AntButton {...props}>{children}</AntButton>
  )
}
export default Button