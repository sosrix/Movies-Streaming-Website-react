import { Link as RouterLink } from "react-router-dom";
import { Container, Background, Logo, ButtonLink } from "./styles";

export default function HeaderContainer({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

HeaderContainer.Frame = function HeaderContainerFrame({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};

HeaderContainer.Logo = function HeaderContainerLogo({ to, ...restProps }) {
  return (
    <RouterLink to={to}>
      <Logo {...restProps} />
    </RouterLink>
  );
};

HeaderContainer.ButtonLink = function HeaderContainerButtonLink({
  children,
  ...restProps
}) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
