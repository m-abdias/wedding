import { images, texts } from '../constants/pt_br';
import {
  CalligraphyContainer,
  CalligraphyImage,
  CenterBox,
  ContentWrapper,
  DateBox,
  DateContainer,
  DateText,
  DayNumber,
  GradientOverlay,
  HeroContainer,
  HeroImage,
  HeroSection,
  Logo,
  LogoContainer,
  SaveTheDate,
  WelcomeText,
  YearText,
} from '../styles/header.styles';
import { CenteredContent } from '../styles/shared';
import Buttons from './Buttons';
import Counter from './Counter';

export function Header() {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroImage src={images.hero} alt={texts.header.altText} />
        <GradientOverlay />
        <LogoContainer>
          <Logo src={images.logo} alt="M&L Logo" />
        </LogoContainer>
      </HeroContainer>

      <ContentWrapper>
        <CenteredContent>
          <SaveTheDate>{texts.header.title}</SaveTheDate>

          <CalligraphyContainer>
            <CalligraphyImage
              src={images.namesCalligraphy}
              alt={texts.header.altText}
            />
          </CalligraphyContainer>

          <DateContainer>
            <DateBox>
              <DateText>{texts.header.date.dayOfWeek}</DateText>
            </DateBox>

            <CenterBox>
              <DateText $hasMargin>{texts.header.date.month}</DateText>
              <DayNumber>{texts.header.date.day}</DayNumber>
              <YearText>{texts.header.date.year}</YearText>
            </CenterBox>

            <DateBox>
              <DateText>{texts.header.date.time}</DateText>
            </DateBox>
          </DateContainer>

          <WelcomeText>{texts.header.message}</WelcomeText>

          <Counter />
          <Buttons />
        </CenteredContent>
      </ContentWrapper>
    </HeroSection>
  );
}
