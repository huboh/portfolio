import Icon from "./variants/Icon";
import IconLink from "./variants/IconLink";
import ButtonLink from "./variants/ButtonLink";
import ButtonDefault, { ButtonProps } from "./variants/Button";

export default function Button(props: ButtonProps) {
  return (
    <ButtonDefault { ...props } />
  );
}

Button.Icon = Icon;
Button.Link = ButtonLink;
Button.IconLink = IconLink;