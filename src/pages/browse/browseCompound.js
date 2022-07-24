import { Container, Item, Title, Image, Segment } from "./styles";

export default function BrowsePage({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
}

BrowsePage.Container = function BrowsePageContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};

BrowsePage.Title = function BrowsePageTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

BrowsePage.Segment = function BrowsePageSegment({ children, ...restProps }) {
  return <Segment {...restProps}>{children}</Segment>;
};

BrowsePage.Image = function BrowsePageImage({ ...restProps }) {
  return <Image {...restProps} />;
};
