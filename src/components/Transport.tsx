import { Car } from 'lucide-react';

import { texts, transportOptions } from '../constants/pt_br';
import { AppleIcon, GooglePlayIcon } from '../icons/Icons';
import {
  TransportSection,
  ContentContainer,
  TitleContainer,
  OrangeIconContainer,
  SectionTitle,
  TransportGrid,
  TransportCard,
  CardHeader,
  AppIcon,
  AppName,
  ButtonContainer,
  StoreButton,
} from '../styles/transport.styles';

export function Transport() {
  return (
    <TransportSection id="transporte">
      <ContentContainer>
        <TitleContainer>
          <OrangeIconContainer>
            <Car className="h-8 w-8 text-white" />
          </OrangeIconContainer>
          <SectionTitle>
            {texts.transport.title}
          </SectionTitle>
        </TitleContainer>
      </ContentContainer>

      <TransportGrid>
        {transportOptions.map((transport, index) => (
          <TransportCard key={index}>
            <CardHeader>
              <AppIcon
                src={transport.icon}
                alt={transport.name}
              />
              <AppName>
                {transport.name}
              </AppName>
            </CardHeader>

            <ButtonContainer>
              <StoreButton
                href={transport.apple}
                target="_blank"
                rel="noopener noreferrer"
                $variant="primary"
              >
                <AppleIcon />
                <span>{texts.transport.buttons.appleStore}</span>
              </StoreButton>
              <StoreButton
                href={transport.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GooglePlayIcon />
                <span>{texts.transport.buttons.googlePlay}</span>
              </StoreButton>
            </ButtonContainer>
          </TransportCard>
        ))}
      </TransportGrid>
    </TransportSection>
  );
}
