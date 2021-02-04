const css = document.createElement("style");

const youtubeTrendingButton = `[title='Trending']`;

css.innerHTML = `
  [title='Trending'], /* youtube trending button */
  [data-testid='trend'], /* twitter trends */
  [data-testid='UserCell'], /* twitter who to follow */
  .feed-follows-module, /* linkedin add to your feed */
  .learning-top-courses, /* linkedin learning top courses */
  .core-rail, /* linkedin main timeline */
  #secondary, /* youtube sidebar recommended videos */
  [page-subtype='home'] { /* youtube home timeline */
    display: none !important;
  }
`;

css.type = "text/css";

document.documentElement.appendChild(css);
