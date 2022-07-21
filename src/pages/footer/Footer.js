import FooterContainer from "./footerContainer";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContainer.Title>Contact us.</FooterContainer.Title>
      <FooterContainer.Break />
      <FooterContainer.Row>
        <FooterContainer.Column>
          <FooterContainer.Link href="#">Lorem ipsum</FooterContainer.Link>
          <FooterContainer.Link href="#">Lorem ipsum </FooterContainer.Link>
          <FooterContainer.Link href="#">Lorem ipsum</FooterContainer.Link>
          <FooterContainer.Link href="#">Lorem ipsum </FooterContainer.Link>
        </FooterContainer.Column>

        <FooterContainer.Column>
          <FooterContainer.Link href="#">Lorem ipsum</FooterContainer.Link>
          <FooterContainer.Link href="#">Lorem ipsum </FooterContainer.Link>
          <FooterContainer.Link href="#">Lorem ipsum</FooterContainer.Link>
          <FooterContainer.Link href="#">Lorem ipsum</FooterContainer.Link>
        </FooterContainer.Column>

        <FooterContainer.Column>
          <FooterContainer.Link href="#">Lorem ipsum</FooterContainer.Link>
          <FooterContainer.Link href="#">Lorem ipsum</FooterContainer.Link>
          <FooterContainer.Link href="#">Lorem ipsum</FooterContainer.Link>
          <FooterContainer.Link href="#">Lorem ipsum</FooterContainer.Link>
        </FooterContainer.Column>

        <FooterContainer.Column>
          <FooterContainer.Link href="#">Lorem ipsum</FooterContainer.Link>
          <FooterContainer.Link href="#">Lorem ipsum</FooterContainer.Link>
          <FooterContainer.Link href="#">Lorem ipsum </FooterContainer.Link>
          <FooterContainer.Link href="#">Lorem ipsum</FooterContainer.Link>
        </FooterContainer.Column>
      </FooterContainer.Row>
      <FooterContainer.Break />
      <FooterContainer.Text>@ Stream It</FooterContainer.Text>
    </FooterContainer>
  );
}
