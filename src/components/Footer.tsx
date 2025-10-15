import { texts } from '../constants/pt_br';
import {
  FooterContainer,
  FooterContent,
  FooterText,
} from '../styles/footer.styles';

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>{texts.footer.names}</FooterText>
        <FooterText>{texts.footer.date}</FooterText>
      </FooterContent>
    </FooterContainer>
  );
}
