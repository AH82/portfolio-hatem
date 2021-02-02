import React from 'react';
import { iconSelector } from "../../helpers/iconSelector";


export default function StackListItem(props) {

  const { name, path } = props;
  
  return (
    <div className="stack-item">
      {iconSelector(name)}
    </div>
  )
}
