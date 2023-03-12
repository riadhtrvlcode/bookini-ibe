import React, { FC } from 'react'

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
const Button: FC<ButtonProps> = (props) => {
  return <button {...props}>Button</button>
}

export { Button }
