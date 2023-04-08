chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  //parse
  url = request.slice((request.indexOf("/gp")));

  //title
  source1 = document.querySelector(`[href=\"${url}\"]`);
  title = source1.textContent;

  //image
  source2 = source1.parentNode.querySelector(`div > div > picture > source`);
  image = source2.getAttribute('srcset');
  imageurl = image.slice((image.indexOf("1440w, https") + 7), (image.indexOf(" 1920w")));

  //open image
  open(imageurl);

  /*//create
  article = document.querySelector(`[href=\"${url}\"]`).parentNode.parentNode.parentNode;
  let addTitle = document.createElement("a");
  let titleText = document.createTextNode(title);
  addTitle.appendChild(titleText);
  addTitle.setAttribute("href", imageurl);
  addTitle.setAttribute("target", "_blank");
  article.parentNode.insertBefore(addTitle, article.nextElementSibling);*/

  console.log(`opened url:${imageurl}`);
})
