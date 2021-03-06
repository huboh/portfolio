import { FC } from "react";
import { ProjectDescriptionProps } from "../../types";

import Text from "../../../Text";
import ProjectIcons from "../ProjectIcons";
import ProjectStack from "../ProjectStack";


const ProjectDescription: FC<ProjectDescriptionProps> = ({ title, description, stackList, ...iconLinks }) => {
  const titleLinkText = (
    <a href={ iconLinks.externalLink || "" } children={ title } target={ "_blank" } rel={ "noreferrer" } />
  );

  return (
    <div className="project-details-wrapper">
      <Text.Header size="extra-small" className="project-title" children={ titleLinkText } showFullStop={ false } />
      <Text.Paragraph size="small" className="project-description" text={ description } />
      <ProjectStack stackList={ stackList } />
      <ProjectIcons  { ...iconLinks } />
    </div>
  );
};


export {
  ProjectDescription as default
};