import React from 'react';

import stackLogo from '../../logo.svg';




export default function StackListItem(props) {

  const { name, path } = props;
  // todo: change logo to path
  
  return (
    <div>
      <img src={stackLogo} alt={name} />
    </div>
  )
}
