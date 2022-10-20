import React from 'react'

export default (WrappedComponent, otherProps) => {
  return ({ ...props }) => <WrappedComponent {...otherProps} {...props} />
}