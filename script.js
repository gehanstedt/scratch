// Create your HTML Page via DOM Methods here!

var h1Tag = document.createElement("h1");
h1Tag.textContent = "This was made in class!";
document.body.appendChild(h1Tag);
h1Tag.setAttribute("style", "text-align: center");

var h2Tag = document.createElement("h2");
h2Tag.textContent = "Another h2 masterpiece!";
document.body.appendChild(h2Tag);
h2Tag.setAttribute ("style", "text-align: center");

var imgTag = document.createElement("img");
document.body.appendChild (imgTag);
imgTag.setAttribute ("src", "image_1.jpg");
imgTag.setAttribute ("style", "display: block; margin-left: auto; margin-right: auto; width: 50%");

var ulTag = document.createElement("ul");
document.body.appendChild (ulTag);

/* var liTag;
for (count = 0; count < 10; count ++) {
    liTag[count] = document.createElement ("li");
    ulTag.appendChild (liTag[count]);
    liTag[count].textContent = "List item" + count;
}
 */

    liTag1 = document.createElement ("li");
    ulTag.appendChild (liTag1);
    liTag1.textContent = "List item 1";

    liTag2 = document.createElement ("li");
    ulTag.appendChild (liTag2);
    liTag2.textContent = "List item 2";


 

  