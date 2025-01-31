let video = document.querySelector(".main-vid");
let heart = document.querySelector(".heart-emoji");
let heart_path = document.querySelector(".heart-path");
let comment = document.querySelector(".comment");
let follow = document.querySelector('.follow')
let num = 0
video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

video.addEventListener("dblclick", () => {
  if (document.fullscreenElement === video) {
    document.exitFullscreen();
  } else {
    video.requestFullscreen();
  }
});

heart.addEventListener("click", () => {
  const currentPath = heart_path.getAttribute("d");

  const path1 =
    "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15";

  const path2 =
    "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314";

  if (currentPath === path1) {
    heart_path.setAttribute("d", path2);
  } else {
    heart_path.setAttribute("d", path1);
  }
});

// let comment = document.querySelector(".comment");

comment.addEventListener("click", () => {
  // Check if an element with the class 'comment-div' exists
  let existingDiv = document.querySelector(".comment-div");

  if (existingDiv) {
    // If it exists, remove it
    existingDiv.remove();
  } else {
    // Otherwise, create a new comment div
    let div = document.createElement("div");
    div.setAttribute("class", "comment-div");

    // Create the smaller inner div
    let div_small = document.createElement("div");
    div_small.setAttribute("class", "comment-div-small");
    let anchor = document.createElement('a')
    let a = "https://raidshadowlegends.com/"; // Add some content
    anchor.setAttribute('href',a)
    anchor.innerText = 'Visit our sponsor Raid Shadow Legends!'
    let h1 = 'Comments'
    div_small.append(anchor)
    div.append(div_small);

    document.body.append(div);
  }
});

follow.addEventListener('click',()=>{
    let x = document.querySelector('.follow1')
    if (num%2==0){
        x.style.backgroundColor = 'white'
        x.style.color = 'black'
        num+=1
    }
    else{
        x.style.backgroundColor = 'black'
        x.style.color = 'white'
        num+=1
    }
})