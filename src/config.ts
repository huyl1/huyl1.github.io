import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://huyl1.github.io/", // replace this with your deployed domain
  author: "Huy Le",
  desc: "Huy Le personal portfolio and blog",
  title: "Huy Le",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/huyl1",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/huy-le-ua/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:huyyyle@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
