import React from 'react';

const DeveloperFeedback = ({children}) => {
  return (
    <pre style={{position: 'absolute', background: 'white'}}>{children}</pre>
  )
}

export default DeveloperFeedback;
