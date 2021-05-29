import React from 'react'
import { MDCTopAppBar } from '@material/top-app-bar';

export default function Navbar() {
  const topAppBarElement = document.querySelector('.mdc-top-app-bar');
  const topAppBar = new MDCTopAppBar(topAppBarElement);
  return (
    topAppBar

  )
}

