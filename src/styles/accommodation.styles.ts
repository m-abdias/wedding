import styled from 'styled-components';

import { Card, IconContainer } from './shared';

export const AccommodationSection = styled.section`
  padding: 2rem 1rem;
  scroll-margin-top: 5rem;
`;

export const AccommodationTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 1rem;
  text-align: center;
`;

export const HotelCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

export const HotelTitle = styled.h3`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
`;

export const ContactItem = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const WhatsAppLink = styled.a`
  color: #ec4899;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const BookingLink = styled.a`
  display: block;
  text-align: center;
  border: 1px solid #d1d5db;
  color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  transition: all 0.2s;
  text-decoration: none;
  margin-top: auto;

  &:hover {
    border-color: #fdba74;
    color: #f97316;
  }
`;

export const OrangeIconContainer = styled(IconContainer)`
  --from-color: #fdba74;
  --to-color: #f97316;
`;
