const css = document.createElement("style");

css.innerHTML = `
  [aria-label='Timeline: Trending now'], /* twitter trends */
  [aria-label='Who to follow'],          /* twitter who to follow */
  .right-rail,                           /* linkedin sidebar */
  .feed-shared-update-v2,                /* linkedin main timeline posts */
  .ad-banner-container,                  /* linkedin ads */ 
  [title='Trending'],                    /* youtube trending button */
  #secondary,                            /* youtube sidebar recommended videos */
  .ytp-suggestion-set,                   /* youtube suggestions */
  [page-subtype='home'] {                /* youtube home timeline */
    display: none !important;
  }
`;

css.type = "text/css";
document.documentElement.appendChild(css);
