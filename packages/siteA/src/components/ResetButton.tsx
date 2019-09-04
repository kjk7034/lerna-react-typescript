import { 
    Button,
    ButtonProps
} from '@wise/components'
import { Omit } from '@wise/shared/lib/types'
import React from 'react';


export interface ResetButtonProps extends Omit<ButtonProps, "type"> {
}
  
export default class ResetButton extends React.Component<ResetButtonProps> {
public render() {
    const {
        children,
    ...restProps
    } = this.props

    return (
    <Button type="reset" {...restProps}>
        {children}
    </Button>
    )
}
}
