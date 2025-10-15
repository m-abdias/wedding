import styled from 'styled-components';

// Containers
export const Section = styled.section`
  padding: 2rem 1rem;
  scroll-margin-top: 5rem;
`;

export const GraySection = styled(Section)`
  background-color: #f9fafb;
`;

export const ContentContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

export const CenteredContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
`;

// Headers
export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 1rem;
`;

// Cards
export const Card = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.125rem;
  padding: 1.5rem;
  transition: border-color 0.2s;

  &:hover {
    border-color: #fdba74;
  }
`;

export const WhiteCard = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.125rem;
  padding: 1.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

interface GridProps {
  $cols?: number;
}

// Grid
export const Grid = styled.div<GridProps>`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: ${props =>
      props.$cols ? `repeat(${props.$cols}, 1fr)` : 'repeat(3, 1fr)'};
  }
`;

export const TwoColumnGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// Icons
export const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, var(--from-color), var(--to-color));
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

// Links
export const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  text-decoration: none;

  &.primary {
    border: 1px solid #ec4899;
    color: #db2777;

    &:hover {
      background-color: #fce7f3;
    }
  }

  &.secondary {
    border: 1px solid #d1d5db;
    color: #374151;

    &:hover {
      border-color: #fdba74;
      color: #f97316;
    }
  }
`;

// Text
export const SmallText = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

// Layout
export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
