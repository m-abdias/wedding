import styled from 'styled-components';

import { IconContainer } from './shared';

export const SalonSection = styled.div`
  scroll-margin-top: 5rem;
`;

export const ContentContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  text-align: center;
`;

export const PinkIconContainer = styled(IconContainer)`
  --from-color: #f9a8d4;
  --to-color: #ec4899;
`;

export const SalonTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 1rem;
`;

export const SalonGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SalonCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.125rem;
  padding: 1.5rem;
  background-color: white;
`;

export const SalonName = styled.h3`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: #6b7280;
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

export const SocialLink = styled.a`
  color: #ec4899;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
