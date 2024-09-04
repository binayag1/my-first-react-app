import React, { ReactElement, ReactNode } from 'react'

interface Props {
    children: ReactNode;
    onClick: () => void;
}

const Button = ({children, onClick}: Props) => {
  return (
    <div>
        <button type="button" className="btn btn-primary" onClick={onClick}>{children}</button>
    </div>
)
}

export default Button