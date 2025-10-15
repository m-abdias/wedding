import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  background: #fff;
`;

export const HeroContainer = styled.div`
  position: relative;
  height: 90vh;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 100vh;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 12rem;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 0.9) 40%,
    rgba(255, 255, 255, 0.5) 70%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

export const Logo = styled.img`
  width: 6rem;
  height: 6rem;
  animation: fade-in 1s ease-out;
  filter: drop-shadow(0 10px 15px rgb(0 0 0 / 0.1));

  @media (min-width: 768px) {
    width: 7rem;
    height: 7rem;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  margin-top: -5rem;
  padding: 0 1rem;
  z-index: 20;

  @media (min-width: 768px) {
    margin-top: -6rem;
    padding: 0 2rem;
  }
`;

export const SaveTheDate = styled.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  color: #4b5563;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const CalligraphyContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

export const CalligraphyImage = styled.img`
  width: 100%;
  max-width: 24rem;
  height: auto;

  @media (min-width: 768px) {
    max-width: 32rem;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

export const DateBox = styled.div`
  text-align: center;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.5rem 1rem;
  min-width: 100px;

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
    min-width: 120px;
  }
`;

export const CenterBox = styled.div`
  text-align: center;
  border-left: 1px solid #e5e7eb;
  border-right: 1px solid #e5e7eb;
  padding: 0.5rem 1.5rem;

  @media (min-width: 768px) {
    padding: 0.75rem 2rem;
  }
`;

interface DateTextProps {
  $hasMargin?: boolean;
}

export const DateText = styled.p<DateTextProps>`
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #6b7280;
  margin-bottom: ${props => (props.$hasMargin ? '0.25rem' : '0')};

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const DayNumber = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  line-height: 1;
  color: #374151;
  font-weight: 300;
  margin: 0.25rem 0;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

export const YearText = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.125rem;
  color: #6b7280;
  letter-spacing: 0.05em;
  margin-top: 0.25rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const WelcomeText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  max-width: 36rem;
  line-height: 1.6;
  text-align: center;
  font-weight: 300;
  white-space: pre-line;
  display: inline;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.75;
  }
`;
