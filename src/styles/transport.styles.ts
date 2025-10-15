import styled from 'styled-components';
import { IconContainer } from './shared';

export const TransportSection = styled.div`
  scroll-margin-top: 5rem;
`;

export const ContentContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const OrangeIconContainer = styled(IconContainer)`
  --from-color: #fdba74;
  --to-color: #f97316;
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 1rem;
`;

export const TransportGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TransportCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.5rem;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const AppIcon = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
`;

export const AppName = styled.h3`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: #111827;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const StoreButton = styled.a<{ $variant?: 'primary' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid ${props => props.$variant === 'primary' ? '#fb923c' : '#e5e7eb'};
  color: ${props => props.$variant === 'primary' ? '#f97316' : '#374151'};
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.$variant === 'primary' ? '#fff7ed' : 'white'};
    border-color: ${props => props.$variant === 'primary' ? '#f97316' : '#fb923c'};
    color: ${props => props.$variant === 'primary' ? '#f97316' : '#f97316'};
  }
`;