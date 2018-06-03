
import React from 'react'

const Title = ({size = 'large', children}) => (
  <React.Fragment>
    {size === 'large'  && (<h3 className="mb-3">{children}</h3>)}
    {size === 'medium' && (<h4 className="mb-3">{children}</h4>)}
    {size === 'small'  && (<h5 className="mb-3">{children}</h5>)}
  </React.Fragment>
)

export default Title
