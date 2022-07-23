import HeaderContainer from "./headerContainer";
import * as ROUTES from "../routes";

export default function Header({ children }) {
  return (
    <HeaderContainer>
      <HeaderContainer.Frame>
        <HeaderContainer.Logo
          to={ROUTES.MAIN_PAGE}
          src={ROUTES.LOGO}
          alt="Stream it"
        />
        <HeaderContainer.ButtonLink to={ROUTES.ABOUT}>
          Clickable
        </HeaderContainer.ButtonLink>
      </HeaderContainer.Frame>
      {children}
    </HeaderContainer>
  );
}
