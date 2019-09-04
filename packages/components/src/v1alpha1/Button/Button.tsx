import * as React from 'react'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'button' | 'reset' | undefined
}

export default class Button extends React.Component<ButtonProps> {
  public render() {
    const {
        children,
      ...restProps
    } = this.props

    return (
      <button type="button" {...restProps}>
        {children}
      </button>
    )
  }
}
