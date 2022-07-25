import { Container, SubTitle, Title } from "./styles";

export default function watchCompound({ children, ...restProps }) {
  return;
}

watchCompound.Container = function watchCompoundContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};

watchCompound.Title = function watchCompoundTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

watchCompound.SubTitle = function watchCompoundSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
