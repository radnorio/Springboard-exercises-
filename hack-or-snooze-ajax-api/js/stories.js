"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();
  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story,showDelete = false) {
  // console.debug("generateStoryMarkup", story);
  const hostName = story.getHostName();
  const showStar = Boolean(currentUser); 
  return $(`
      <li id="${story.storyId}">
        ${showDelete ? getDeleteBtnHTML() : ""}
        ${showStar ? getStarHTML(story,currentUser) : ""}
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
};

/** Gets list of stories from server, generates their HTML, and puts on page. */
function getDeleteBtnHTML() {
  return `
      <span class="trash-can">
        <i class="fas fa-trash-alt"></i>
      </span>`;
}
function getStarHTML(story, user) {
  const isFavorite = user.isFavorite(story);
  const starType = isFavorite ? "fas" : "far";
  return `
      <span class="star">
        <i class="${starType} fa-star"></i>
      </span>`;
}
// function getStarHTMLForFav(story, user) {
//   const isFavorite = user.isFavorite(story);
//   const starType = isFavorite ? "fas" : "far";
//   return `
//       <span class="star">
//         <i class="${starType} fa-star"></i>
//       </span>`;
// }

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
};
async function deleteStory(evt) {
  console.debug("deleteStory");

  const $closestLi = $(evt.target).closest("li");
  const storyId = $closestLi.attr("id");
  await storyList.removeStory(currentUser, storyId);
  await putUserStoriesOnPage();
}
$myStories.on("click", ".trash-can", deleteStory);
/** Handle submitting new story form. */

async function submitNewStory(evt) {
  console.debug("submitNewStory");
  evt.preventDefault();

  // grab all info from form
  const title = $("#create-title").val();
  const url = $("#create-url").val();
  const author = $("#create-author").val();
  const username = currentUser.username
  const storyData = {title, url, author, username };

  const story = await storyList.addStory(currentUser, storyData);

  const $story = generateStoryMarkup(story);
  $allStoriesList.prepend($story);

  // hide the form and reset it
  $submitForm.slideUp("slow");
  $submitForm.trigger("reset");
}

$submitForm.on("submit", submitNewStory);

function putUserStoriesOnPage() {
  console.debug("putUserStoriesOnPage");

  $myStories.empty();

  if (currentUser.ownStories.length === 0) {
    $myStories.append("<h5>No stories added by user yet!</h5>");
  } 
  else {
    for (let story of currentUser.ownStories) {
      let $story = generateStoryMarkup(story, true);
      $myStories.append($story);
    }
  }
  $myStories.show();
}
//print favorites list to page
function putFavoritesListOnPage() {
  console.debug("putFavoritesListOnPage");
  $favoritedStories.empty();
  if (currentUser.favorites.length === 0) {
    $favoritedStories.append("<h5>No favorites added!</h5>");
  } else {
    // loop through all of users favorites and generate HTML for them
    for (let story of currentUser.favorites) {
      const $story = generateStoryMarkup(story);
      $favoritedStories.append($story);
    }
  }
  $favoritedStories.show();
};


async function toggleStoryFavorite(evt) {
  console.debug("toggleStoryFavorite");
  const $target = $(evt.target);
  const $closestLi = $target.closest("li");
  const storyId = $closestLi.attr("id");
  const story = storyList.stories.find(s => s.storyId === storyId);
//swap favorites
  console.log($target.hasClass('fas'));
  if ($target.hasClass('fas')) {
    await currentUser.removeFavorite(story);
    $target.closest("i").toggleClass("fas far");
  } else{
    await currentUser.addFavorite(story);
    $target.closest("i").toggleClass("fas far");
  }
};
$storiesLists.on("click", ".star", toggleStoryFavorite);


