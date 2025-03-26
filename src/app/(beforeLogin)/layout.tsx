import { PropsWithChildren, ReactNode } from "react"

type Props = {
  modal : ReactNode
} & PropsWithChildren

export default function Layout({children, modal} : Props) {
  return (
    <div>
      비포 로그인 레이아웃
      {children}
      {modal}
    </div>
  )
}