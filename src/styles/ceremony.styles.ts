import styled from 'styled-components';

import { WhiteCard } from './shared';

export const ChurchSection = styled.section`
  padding: 2rem 1rem;
  background-color: #f9fafb;
`;

export const ChurchCard = styled(WhiteCard)`
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
`;

export const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #f9a8d4, #ec4899);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  svg {
    width: 2rem;
    height: 2rem;
    color: white;
  }
`;

export const ChurchTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 1rem;
`;

export const ChurchSubtitle = styled.p`
  color: #4b5563;
  margin-bottom: 0.5rem;
`;

export const Address = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;

  &:last-of-type {
    margin-bottom: 1.5rem;
  }
`;

export const MapLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  border: 1px solid #ec4899;
  color: #db2777;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s;
  text-decoration: none;

  &:hover {
    background-color: #fce7f3;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
