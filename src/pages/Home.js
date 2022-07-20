import { Container, Item, Inner, Title, SubTitle, Image, Pane } from "./styles";

export default function HomePage({
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

HomePage.Container = function HomePageContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

HomePage.Title = function HomePageTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

HomePage.SubTitle = function HomePageSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

HomePage.Pane = function HomePagePane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

HomePage.Image = function HomePageImage({ ...restProps }) {
  return <Image {...restProps} />;
};
