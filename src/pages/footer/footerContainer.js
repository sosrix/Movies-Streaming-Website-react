import { Container, Row, Column, Link, Title, Text, Break } from "./styles";

export default function FooterContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

FooterContainer.Row = function FooterContainerRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

FooterContainer.Column = function FooterContainerColumn({
  children,
  ...restProps
}) {
  return <Column {...restProps}>{children}</Column>;
};

FooterContainer.Link = function FooterContainerLink({
  children,
  ...restProps
}) {
  return <Link {...restProps}>{children}</Link>;
};

FooterContainer.Title = function FooterContainerTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};

FooterContainer.Text = function FooterContainerText({
  children,
  ...restProps
}) {
  return <Text {...restProps}>{children}</Text>;
};

FooterContainer.Break = function FooterContainerBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
