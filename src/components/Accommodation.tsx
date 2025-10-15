import { Hotel, Mail, MapPin, Phone } from 'lucide-react';

import { hotels, texts } from '../constants/pt_br';
import { WhatsAppIcon } from '../icons/Icons';
import {
  AccommodationSection,
  AccommodationTitle,
  BookingLink,
  ContactItem,
  ContactList,
  HotelCard,
  HotelTitle,
  OrangeIconContainer,
  WhatsAppLink,
} from '../styles/accommodation.styles';
import { Grid } from '../styles/shared';

export function Accommodation() {
  return (
    <AccommodationSection id="hospedagem">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <OrangeIconContainer>
            <Hotel className="h-8 w-8 text-white" />
          </OrangeIconContainer>
          <AccommodationTitle>{texts.accommodation.title}</AccommodationTitle>
        </div>

        <Grid $cols={3}>
          {hotels.map((hotel, index) => (
            <HotelCard key={index}>
              <HotelTitle>{hotel.name}</HotelTitle>
              <ContactList>
                <ContactItem>
                  <Mail className="h-4 w-4" />
                  {hotel.email}
                </ContactItem>
                <ContactItem>
                  <MapPin className="h-4 w-4" />
                  {hotel.adress}
                </ContactItem>
                <ContactItem>
                  <Phone className="h-4 w-4" />
                  {hotel.phone}
                </ContactItem>
                <ContactItem>
                  <WhatsAppIcon />
                  <WhatsAppLink
                    href={`https://wa.me/55${hotel.cel.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {hotel.cel}
                  </WhatsAppLink>
                </ContactItem>
              </ContactList>
              <BookingLink
                href={hotel.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {texts.accommodation.buttonText}
              </BookingLink>
            </HotelCard>
          ))}
        </Grid>
      </div>
    </AccommodationSection>
  );
}
