import React from 'react';

export default function ProjectTitle(props) {
  const { title, subTitle } = props;
  return (
    <div>
      <h3>{title}</h3>
      <small>{subTitle ? subTitle : "_"}</small>
    </div>
  )
}
