//"Jello Wold, Hoe are you. I may not be as good as I pretend but all I do is love you."

const Access_token = "D_kmPdUYGD2cqFtu4vQ6HmwgJ53ZVUb5J9ip881OOzA"

let image = document.createElement("img")
image.style.width = "400px"
image.style.height = "288px"
image.style.border= "3px solid #d3d3d3";
image.style.boxShadow= "0px 1px 12px 3px";

let mainDiv = document.createElement("div")
mainDiv.setAttribute("id", "mainDiv")

let figDiv = document.createElement("div")
figDiv.setAttribute("id", "figDiv")
figDiv.style.textAlign = "-webkit-center"

let figCaption = document.createElement("figcaption");
figCaption.style.fontSize = "23px"
figCaption.style.padding = "18px"
figCaption.style.width = "33%"
figCaption.style.fontFamily= "helvetica";


let imageDiv = document.createElement("div")
imageDiv.setAttribute("id", "imageDiv")
imageDiv.style.textAlign = "center"


imageDiv.appendChild(image);
figDiv.appendChild(figCaption);
imageDiv.appendChild(image);
imageDiv.appendChild(figDiv);
mainDiv.appendChild(imageDiv);

document.body.appendChild(mainDiv)

function showImages() {
  let i = 0;
  return fetch(`https://api.unsplash.com/photos/?client_id=${Access_token}`).then(res =>res.json()).then(data => {
        image.src = data[0].urls.regular;
        figCaption.innerHTML = data[i].alt_description || data[i].description
        return interval = setInterval(() => 
          {
            i ++;
            if(i === data.length){
              i = 0
            }
            image.src = data[i].urls.regular;
            image.addEventListener("click", ()=>{
              window.open(data[i].urls.regular, '_blank');
            })
            figCaption.innerHTML = data[i].alt_description || data[i].description
            console.log("description", data[i])
          }, 2000
        )
        }
  )
}
showImages()

// function stopImages(){
//   console.log("showImages", showImages)
//   clearInterval(showImages)
// }

// let button = document.createElement("button")
// button.innerHTML = "Stop"
// button.addEventListener("click", stopImages)
// div.appendChild(button)
