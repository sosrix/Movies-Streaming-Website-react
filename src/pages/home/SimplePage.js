import {
  Container,
  Item,
  Inner,
  Title,
  SubTitle,
  Image,
  Segment,
} from "./styles";

export default function SimplePage({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

SimplePage.Container = function SimplePageContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};

SimplePage.Title = function SimplePageTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

SimplePage.SubTitle = function SimplePageSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

SimplePage.Segment = function SimplePageSegment({ children, ...restProps }) {
  return <Segment {...restProps}>{children}</Segment>;
};

SimplePage.Image = function SimplePageImage({ ...restProps }) {
  return <Image {...restProps} />;
};
