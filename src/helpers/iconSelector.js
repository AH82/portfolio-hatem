/**
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

  import { TiHtml5 } from "react-icons/ti";
  import { FcLinux } from "react-icons/fc";
  import { BiCodeCurly } from "react-icons/bi";


  export function iconSelector (icon) {
    
    switch (icon.toLowerCase()) {
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
      case 'css': return <SiCss3/>;
      case 'sass': return <FaSass/>;
      case 'bootstrap': return <SiBootstrap/>;
      case 'materialize': return <DiMaterializecss/>
      case 'materialui': return <SiMaterialUi/>

      case 'js': return <SiJavascript/>;
      case 'nodejs': return <SiNodeDotJs/>;
      // case 'express': return </>;

      case 'jquery': return <SiJquery/>;
      // case 'ajax': return </>;

      case 'postgresql': return <SiPostgresql/>;
      case 'mongodb': return <SiMongodb/>;

      case 'react': return <SiReact/>;
      case 'storybook': return <SiStorybook/>;
      // case '': return </>;

      case 'ruby': return <DiRuby/>;
      case 'rails': return <SiRails/>;
      
      // case '': return </>;
      default: return <BiCodeCurly/>
    }
  }