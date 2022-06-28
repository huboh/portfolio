import Link from "./components/Link";
import List from "./components/List";
import Header from "./components/Header";
import ColoredText from "./components/ColoredText";
import Paragraph, { ParagraphProps } from "./components/Paragraph";

export default function Text(props: ParagraphProps) {
  return (
    <Paragraph { ...props } />
  );
}

Text.Link = Link;
Text.List = List;
Text.Header = Header;
Text.Colored = ColoredText;
Text.Paragraph = Paragraph;