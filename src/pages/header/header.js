import HeaderContainer from "./headerContainer";
import * as ROUTES from "../routes";

export default function Header({ children }) {
  return (
    <HeaderContainer>
      <HeaderContainer.Frame>
        <HeaderContainer.Logo
          to={ROUTES.MAIN_PAGE}
          src="/images/logo.png"
          alt="Stream it"
        />
        <HeaderContainer.ButtonLink to={ROUTES.ABOUT}>
          Sign In
        </HeaderContainer.ButtonLink>
      </HeaderContainer.Frame>
      {children}
    </HeaderContainer>
  );
}
