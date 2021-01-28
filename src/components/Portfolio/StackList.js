import React from 'react';

import StackListItem from './StackListItem';


export default function StackList(props) {
  const { stack } = props;

  return (
    <div className='stack-list'>
      {
        stack.map( e => (
          <StackListItem name={e} />
        ))
      }
    </div>
  )
}
