import { Car, Church, Hotel, Scissors } from 'lucide-react';

import { texts } from '../constants/pt_br';
import {
  ButtonIconContainer,
  ButtonLabel,
  ButtonsContainer,
  ButtonsSection,
  NavButton,
} from '../styles/buttons.styles';

export default function Buttons() {
  return (
    <ButtonsSection>
      <ButtonsContainer>
        <NavButton
          onClick={() =>
            document
              .getElementById('cerimonia')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <ButtonIconContainer $variant="pink">
            <Church />
          </ButtonIconContainer>
          <ButtonLabel $variant="pink">{texts.navigation.ceremony}</ButtonLabel>
        </NavButton>

        <NavButton
          onClick={() =>
            document
              .getElementById('hospedagem')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <ButtonIconContainer $variant="orange">
            <Hotel />
          </ButtonIconContainer>
          <ButtonLabel $variant="orange">
            {texts.navigation.accommodation}
          </ButtonLabel>
        </NavButton>

        <NavButton
          onClick={() =>
            document
              .getElementById('salao')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <ButtonIconContainer $variant="pink">
            <Scissors />
          </ButtonIconContainer>
          <ButtonLabel $variant="pink">
            {texts.navigation.beautySalons}
          </ButtonLabel>
        </NavButton>

        <NavButton
          onClick={() =>
            document
              .getElementById('transporte')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <ButtonIconContainer $variant="orange">
            <Car />
          </ButtonIconContainer>
          <ButtonLabel $variant="orange">
            {texts.navigation.transport}
          </ButtonLabel>
        </NavButton>
      </ButtonsContainer>
    </ButtonsSection>
  );
}
