import React from 'react'

const PartialApply = (WrappedComponent, otherProps) => {
  return ({ ...props }) => <WrappedComponent {...otherProps} {...props} />
}

export default PartialApply