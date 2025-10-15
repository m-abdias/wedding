import { MapPin, Scissors } from 'lucide-react';

import { salons, texts } from '../constants/pt_br';
import { InstagramIcon, WhatsAppIcon } from '../icons/Icons';
import {
  ContactItem,
  ContactList,
  ContentContainer,
  PinkIconContainer,
  SalonCard,
  SalonGrid,
  SalonName,
  SalonSection,
  SalonTitle,
  SocialLink,
  TitleContainer,
} from '../styles/beauty-salons.styles';

export function BeautySalons() {
  return (
    <SalonSection id="salao">
      <ContentContainer>
        <TitleContainer>
          <PinkIconContainer>
            <Scissors className="h-8 w-8 text-white" />
          </PinkIconContainer>
          <SalonTitle>{texts.beautySalons.title}</SalonTitle>
        </TitleContainer>
      </ContentContainer>

      <SalonGrid>
        {salons.map((salon, index) => (
          <SalonCard key={index}>
            <SalonName>{salon.name}</SalonName>
            <ContactList>
              <ContactItem>
                <WhatsAppIcon />
                <SocialLink
                  href={`https://wa.me/55${salon.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {salon.phone}
                </SocialLink>
              </ContactItem>
              <ContactItem>
                <InstagramIcon />
                <SocialLink
                  href={`https://instagram.com/${salon.insta.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {salon.insta}
                </SocialLink>
              </ContactItem>
              {'address' in salon && (
                <ContactItem>
                  <MapPin className="h-4 w-4" />
                  {salon.address}
                </ContactItem>
              )}
            </ContactList>
          </SalonCard>
        ))}
      </SalonGrid>
    </SalonSection>
  );
}
