const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS}) and (max-width: 767px)`,
  mobile: `(min-width: ${size.mobileM}) and (max-width: 767px)`,
  mobileL: `(min-width: ${size.mobileL}) and (max-width: 767px)`,
  tablet: `(min-width: ${size.tablet}) and (max-width: 960px)`,
  laptop: `(min-width: ${size.laptop}) and (max-width: 1280px)`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};