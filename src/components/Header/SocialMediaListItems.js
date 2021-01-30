import React from "react";
// import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { iconSelector } from "../../helpers/iconSelector";

export default function SocialMediaListItems (props) {
  const { name, url } = props;

  // const iconSelector = function (icon) {
  //   switch (icon.toLowerCase()) {
  //     case 'github': return <FaGithub/>;
  //     case 'linkedin': return <FaLinkedinIn/>;
  //   }
  // }
  return (
    <div>
      <a href={url} target="_blank" rel='noreferrer' >
        { iconSelector(name) }
      </a>
    </div>
  )
}