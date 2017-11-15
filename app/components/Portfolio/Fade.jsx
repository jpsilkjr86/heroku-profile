import React from 'react'

import { CSSTransition } from 'react-transition-group'

import styles from './Fade.css';

// since webpack hashes the style classNames, we have to reference
// the generated classNames through keys from the imported style CSS object
const classNames = {
 appear: styles["fade-appear"],
 appearActive: styles["fade-appear-active"],
 enter: styles["fade-enter"],
 enterActive: styles["fade-enter-active"],
 exit: styles["fade-exit"],
 exitActive: styles["fade-exit-active"]
};

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={{ enter: 300, exit: 200 }}
    classNames={classNames}
  >
    {children}
  </CSSTransition>
);

export default Fade;