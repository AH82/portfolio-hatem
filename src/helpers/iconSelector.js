/* custom made icons/SVG : */
import { ExpressSVG } from "../stack-svg/ExpressSVG";
import MapleLeaf_svg from '../stack-svg/MapleLeaf_svg';
import FleurDeLys_svg from "../stack-svg/FleurDeLys_svg";


/**
 * react icon livrary : 
 * 
 * to select desired icons to import : 
 * https://react-icons.github.io/react-icons
 */

import { 
  FaLinkedinIn,
  FaGithub,
  FaGitAlt,
  FaSass
} from "react-icons/fa";

import { 
  // DiHtml5,
  // DiCss3,
  // DiJsBadge,
  // DiReact,
  // DiNodejsSmall,
  DiMaterializecss,
  DiRuby

 } from "react-icons/di";

import { 
  // SiCsswizardry, // badge
  SiCss3,
  SiJavascript,
  SiNodeDotJs,
  SiReact,
  SiStorybook,
  SiJquery,
  SiRails,
  SiVisualstudiocode,
  SiMongodb,
  SiBootstrap,
  SiPostgresql,
  SiMaterialUi,

  SiWindows,
  SiUbuntu
  } from "react-icons/si";

  import { BsPersonBoundingBox } from "react-icons/bs";
  import { GoHome } from 'react-icons/go'

  import { TiHtml5 } from "react-icons/ti";
  import { FcLinux } from "react-icons/fc";
  import { BiCodeCurly, BiEnvelope } from "react-icons/bi";
  import { IoFingerPrintOutline } from "react-icons/io5";
  import { GiBrain } from "react-icons/gi";


  export function iconSelector (icon) {

    switch (icon.toLowerCase()) {
      // Language
      case 'en': return <MapleLeaf_svg/>;
      case 'fr': return <FleurDeLys_svg/>;

      // Navigation
      case 'home': return <GoHome/>;
      case 'about': return <BsPersonBoundingBox/>;
      case 'skill': 
      case 'skills': return <GiBrain/>;
      case 'my work': 
      case 'work': 
      case 'projects': 
      case 'portfolio': return <IoFingerPrintOutline/>;
      case 'contact': 
      case 'contacts': return <BiEnvelope/>;

      // social icons
      case 'linkedin': return <FaLinkedinIn/>;
      case 'github': return <FaGithub/>;

      // tools
      case 'vscode': return <SiVisualstudiocode/>;
      case 'git': return <FaGitAlt/>;
      // case 'vagrant': return </>;
      // case '': return </>;

      // Operating system
      case 'windows': return <SiWindows/>;
      case 'linux': return <FcLinux/>;
      case 'ubuntu': return <SiUbuntu/>;

      // tech stack
      case 'html': return <TiHtml5/>;
      case 'vanilla css' :
      case 'css': return <SiCss3/>;
      case 'sass': return <FaSass/>;
      case 'bootstrap': return <SiBootstrap/>;
      case 'materialize' : 
      case 'materializecss' : 
      case 'materialize css' : 
      case 'materialize-css' : return <DiMaterializecss/>;
      case 'materialui': return <SiMaterialUi/>;

      case 'js' : 
      case 'javascript' : return <SiJavascript/>;
      case 'nodejs':
      case 'node js':
      case 'node-js':
      case 'node': return <SiNodeDotJs/>;
      case 'express': return <ExpressSVG/>;
      // case 'express': return "ex";
      // case 'express': return </>;

      case 'jquery': return <SiJquery/>;
      // case 'ajax': return </>;

      case 'postgresql': return <SiPostgresql/>;
      case 'mongodb': return <SiMongodb/>;

      case 'react': return <SiReact/>;
      case 'storybook': return <SiStorybook/>;
      // case '': return </>;

      case 'ruby': return <DiRuby/>;
      case 'rails' :
      case 'ruby on rails' : 
      case 'ruby on rails MVC' : return <SiRails/>;
      
      // case '': return </>;
      default: return <BiCodeCurly/>
    }
  }