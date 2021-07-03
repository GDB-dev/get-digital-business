
import { Button } from '@material-ui/core'
import * as React from 'react';


interface Props {
  variant: string;
  style: string;
}

export const Buttons: React.FC<Props> = ({variant}:Props) => {
  return (
    <Button color='primary'> {variant} </Button>
  )
}

