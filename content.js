const css = document.createElement("style");

css.innerHTML = `
  [aria-label='Timeline: Trending now'], /* twitter trends */
  [aria-label='Who to follow'],          /* twitter who to follow */
  .scaffold-layout__aside,               /* linkedin sidebar */
  .ad-banner-container,                  /* linkedin ads */ 
  [title='Trending'],                    /* youtube trending button */
  #secondary,                            /* youtube sidebar recommended videos */
  .ytp-suggestion-set {                  /* youtube suggestions */
    display: none !important;
  }
`;

css.type = "text/css";
document.documentElement.appendChild(css);

//.core-rail:not(.update-outlet),        /* linkedin main timeline */
//[page-subtype='home'],                 /* youtube home timeline */
