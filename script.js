

const testUrls = {
  1: 'https://github.com/Kevjinx/trivia-with-jservice-api',
  2: 'https://github.com/Kevjinx/trivia-game'
}

const testUrlsArr = [
  'https://github.com/Kevjinx/trivia-with-jservice-api',
  'https://github.com/Kevjinx/trivia-game'
]

//loop testurl
// open
// click on star
//list of urls


const loopUrl = async (urls) => {
  urls.forEach(url => {
    await goToUrl(url)
    await clickStarBtn();
  });
}

const goToUrl = (url) => {
  return new Promise((resolve) => {
    window.location = url
    resolve();
  })
}

const click1 = () => {

}
const clickStarBtn = async () => {
  //dom ele
  //there's 2 btn, one for when there are no stars
  //and another one for when repo has atleast 1 star
  console.log(document.querySelector('.js-social-container').children[0].children[2]);
  console.log(document.querySelector('.js-social-container').children[1].children[2]);
  await document.querySelector('.js-social-container').children[0].children[2].click()
  await document.querySelector('.js-social-container').children[1].children[2].click()
}


loopUrl(testUrlsArr)
