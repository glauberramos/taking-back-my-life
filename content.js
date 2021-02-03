function removeThings() {
  //remove twitter trends
  document
    .querySelectorAll("[data-testid='trend']")
    .forEach((e) => e.parentNode.removeChild(e));

  //remove twitter who to follow
  document
    .querySelectorAll("[data-testid='UserCell']")
    .forEach((e) => e.parentNode.removeChild(e));

  //remove linkedin add to your feed
  var addYourFeed = document.getElementsByClassName("feed-follows-module");
  addYourFeed.length === 1 ? addYourFeed[0].remove() : "";

  //remove linkedin learning top courses
  var learningCourses = document.getElementsByClassName("learning-top-courses");
  learningCourses.length === 1 ? learningCourses[0].remove() : "";

  //remove linkedin main timeline
  var mainTimeline = document.getElementsByClassName("core-rail");
  mainTimeline.length === 1 ? mainTimeline[0].remove() : "";

  //remove youtube sidebar recommended videos
  var youtubeSidebar = document.getElementById("secondary");
  youtubeSidebar ? youtubeSidebar.remove() : "";

  //remove youtube home timeline
  var youtubeHomeTimeline = document.querySelector("[page-subtype='home']");
  youtubeHomeTimeline ? youtubeHomeTimeline.remove() : "";

  //remove youtube trending button
  var youtubeTrendingButton = document.querySelector("[title='Trending']");
  youtubeTrendingButton ? youtubeTrendingButton.remove() : "";

  //remove youtube home button
  var youtubeHomeButton = document.querySelector("[title='Home']");
  youtubeHomeButton ? youtubeHomeButton.remove() : "";

  //remove youtube logo
  var youtubeLogo = document.getElementById("logo");
  youtubeLogo ? youtubeLogo.remove() : "";
}

setTimeout(function () {
  removeThings();
}, 500);

setTimeout(function () {
  removeThings();
}, 1000);

setTimeout(function () {
  removeThings();
}, 2000);

setTimeout(function () {
  removeThings();
}, 3000);
