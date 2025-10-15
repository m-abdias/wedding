import styled from 'styled-components';

export const CountdownSection = styled.section`
  text-align: center;
  padding: 2rem 0;
`;

export const CountdownTitle = styled.h2`
  font-size: 0.75rem;
  color: #4b5563;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
  font-weight: 300;
`;

export const CountdownGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;

  @media (min-width: 640px) {
    gap: 1rem;
  }
`;

export const CountdownBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f4f6;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  width: 4.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  @media (min-width: 640px) {
    width: 5rem;
    padding: 1rem;
  }
`;

export const CountdownNumber = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  color: #1f2937;

  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
`;

export const CountdownLabel = styled.span`
  font-size: 0.625rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.25rem;

  @media (min-width: 640px) {
    font-size: 0.75rem;
  }
`;

export const CelebrationText = styled.div`
  text-align: center;
  color: #ec4899;
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 2rem;

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }
`;
