import { Church, MapPin } from 'lucide-react';

import { texts } from '../constants/pt_br';
import {
  Address,
  ChurchCard,
  ChurchSection,
  ChurchSubtitle,
  ChurchTitle,
  IconWrapper,
  MapLink,
} from '../styles/ceremony.styles';

export function Ceremony() {
  return (
    <ChurchSection id="cerimonia">
      <ChurchCard>
        <IconWrapper>
          <Church />
        </IconWrapper>
        <ChurchTitle>{texts.ceremony.title}</ChurchTitle>
        <ChurchSubtitle>{texts.ceremony.subtitle}</ChurchSubtitle>
        <Address>{texts.ceremony.address.street}</Address>
        <Address>{texts.ceremony.address.city}</Address>
        <MapLink
          href={texts.ceremony.mapLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin />
          {texts.ceremony.mapButton}
        </MapLink>
      </ChurchCard>
    </ChurchSection>
  );
}
