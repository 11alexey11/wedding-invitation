import styled from "styled-components";
import background from "../../assets/img/background.jpg";

export const WrapperContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "128rem",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${background})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50%",
});

export const TextWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "3rem",
  padding: "0 15rem",

  "@media (max-width: 768px)": {
    gap: "2rem",
    padding: "0 10rem",
  },

  "@media (max-width: 580px)": {
    gap: "1rem",
    padding: "0 5rem",
  },

  "@media (max-width: 480px)": {
    gap: "0.5rem",
  },
});

export const TextContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  padding: "0 3rem",
});

export const TextTitle = styled.div({
  display: "flex",
  justifyContent: "center",
  fontSize: "7rem",
  lineHeight: "5rem",
  fontFamily: "Marck Script",

  "@media (max-width: 1200px)": {
    fontSize: "5rem",
    lineHeight: "3rem",
  },

  "@media (max-width: 1024px)": {
    fontSize: "3.5rem",
    lineHeight: "1.5rem",
  },
  "@media (max-width: 768px)": {
    fontSize: "2.5rem",
    lineHeight: "1rem",
  },
  "@media (max-width: 425px)": {
    fontSize: "1.8rem",
    lineHeight: "1rem",
  },
});

export const TextSubTitle = styled.div({
  display: "flex",
  textAlign: "center",
  fontSize: "3.2rem",
  fontFamily: "Open Sans",
  textTransform: "uppercase",
  "@media (max-width: 1200px)": {
    fontSize: "2.3rem",
  },
  "@media (max-width: 1024px)": {
    fontSize: "1.6rem",
  },
  "@media (max-width: 768px)": {
    fontSize: "1.4rem",
  },
  "@media (max-width: 425px)": {
    fontSize: "1rem",
  },
});

export const DateContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "2rem",
});

export const DateTitle = styled(TextSubTitle)({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRight: "2px solid #000000",
  paddingRight: "2rem",

  "&:last-child": {
    border: "none",
    padding: 0,
  },
});

export const DateSubTitle = styled.div({
  display: "flex",
});

export const PlaceContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",

  "@media (max-width: 768px)": {
    gap: "2rem",
  },
  "@media (max-width: 580px)": {
    gap: "1rem",
  },
  "@media (max-width: 480px)": {
    gap: "0.5rem",
  },
});

export const PlaceSubTitle = styled(TextSubTitle)({
  fontSize: "2.5rem",

  "@media (max-width: 1200px)": {
    fontSize: "1.8rem",
  },
  "@media (max-width: 1024px)": {
    fontSize: "1.6rem",
  },
  "@media (max-width: 768px)": {
    fontSize: "1.4rem",
  },
  "@media (max-width: 425px)": {
    fontSize: "1rem",
  },
});
