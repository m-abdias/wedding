import styled from 'styled-components';

export const ButtonsSection = styled.section`
  text-align: center;
  padding-bottom: 3.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  @media (min-width: 640px) {
    gap: 3.5rem;
  }
`;

export const NavButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

interface IconContainerProps {
  $variant: 'pink' | 'orange';
}

export const ButtonIconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  background: ${props =>
    props.$variant === 'pink'
      ? 'linear-gradient(to bottom right, #f9a8d4, #ec4899)'
      : 'linear-gradient(to bottom right, #fdba74, #f97316)'};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transform: scale(1.05);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: white;
  }
`;

interface ButtonLabelProps {
  $variant: 'pink' | 'orange';
}

export const ButtonLabel = styled.span<ButtonLabelProps>`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 300;
  transition: color 0.2s ease;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }

  ${NavButton}:hover & {
    color: ${props => (props.$variant === 'pink' ? '#db2777' : '#ea580c')};
  }
`;

export const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;

  &.primary {
    border: 1px solid #ec4899;
    color: #db2777;

    &:hover {
      background-color: #fdf2f8;
      border-color: #db2777;
      transform: translateY(-1px);
      box-shadow: 0 4px 6px -1px rgba(219, 39, 119, 0.1);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  }

  &.app-store {
    border: 1px solid #e5e7eb;
    color: #374151;
    background-color: white;

    &:hover {
      border-color: #9ca3af;
      background-color: #f9fafb;
      transform: translateY(-1px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  }
`;
