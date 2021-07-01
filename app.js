//toggle lock icon
const lockdiv = document.querySelector(".lock");
const lock = document.querySelector(".fa-lock");
lock.style.color = "#999";
lock.style.fontsize = "16px";
let sliderToggle = false;
const videoList = document.querySelector(".videolist");
lockdiv.addEventListener("click", () => {
  lock.classList.toggle("fa-unlock");
  sliderToggle = !sliderToggle;
  if (sliderToggle == false) {
    videoList.style.overflowY = "scroll";
  } else {
    videoList.style.overflowY = "hidden";
  }
});

const videoPlayer = document.querySelector(".video");

//fix the resize issue when the src changes

videoPlayer.addEventListener("onloadeddata", () => {
  videoPlayer.width = videoPlayer.clientWidth;
  videoPlayer.height = videoPlayer.clientHeight;
});

//show and hide the subsections
const mainfolder = document.querySelector(".mainfolder");
const subSections = document.querySelectorAll("li");
const lines = document.querySelectorAll(".virtcal_line");
let toggle = true;

mainfolder.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    subSections.forEach((subSection) => {
      subSection.style.display = "";
    });
    lines.forEach((line) => {
      line.style.display = "";
    });
  } else {
    subSections.forEach((subSection) => {
      subSection.style.display = "none";
    });
    lines.forEach((line) => {
      line.style.display = "none";
    });
  }
});

//Rest all the subsections colors to black
const allSubSections = document.querySelectorAll("li p");
const allIcons = document.querySelectorAll("li i");
const restColors = () => {
  allSubSections.forEach((section) => {
    section.style.color = "black";
  });
  allIcons.forEach((icon) => {
    icon.style.color = "grey";
  });
};

//videoes

//welcome video

const welcomeVideo = document.querySelector(".welcome p");
const welcomeIcon = document.querySelector(".welcome i");
welcomeVideo.style.color = "#57B643";
welcomeIcon.style.color = "#57B643";
const welcome = () => {
  restColors();
  restAllTags();
  restAllMapButtons();
  loadingIconVideos(welcomeIcon);
  firstQuiz.style.display = "none";
  mapContainer.style.display = "none";
  videoPlayer.style.display = "";
  videoPlayer.setAttribute("src", "./videos/2021, We Are Ready.mp4");
  welcomeVideo.style.color = "#57B643";
  welcomeIcon.style.color = "#57B643";
};

//second video
const secondVideo = document.querySelector(".second p");
const secondIcon = document.querySelector(".second i");
const second = () => {
  restColors();
  restAllTags();
  restAllMapButtons();
  loadingIconVideos(secondIcon);
  firstQuiz.style.display = "none";
  mapContainer.style.display = "none";
  videoPlayer.style.display = "";
  videoPlayer.setAttribute("src", "./videos/2021, We Are Ready.mp4");
  secondVideo.style.color = "#57B643";
  secondIcon.style.color = "#57B643";
};
//second video
const thirdVideo = document.querySelector(".third p");
const thirdIcon = document.querySelector(".third i");
const third = () => {
  restColors();
  restAllTags();
  restAllMapButtons();
  loadingIconVideos(thirdIcon);
  firstQuiz.style.display = "none";
  mapContainer.style.display = "none";
  videoPlayer.style.display = "";
  videoPlayer.setAttribute("src", "./videos/2021, We Are Ready.mp4");
  thirdVideo.style.color = "#57B643";
  thirdIcon.style.color = "#57B643";
};

//change the question

const previous = document.querySelector(".fa-chevron-circle-left");
const next = document.querySelector(".fa-chevron-circle-right");
const question = document.querySelector(".quiz1 .question1 p");
const questionNumber = document.querySelector(".question_num");
const goPrevious = () => {
  enableButton(next);
  disabledButton(previous);
  setQuestionone();
  removeCheckedAnswer();
  disableSubmit();
  labels.forEach((label) => {
    label.style.cursor = "pointer";
    label.removeAttribute("disabled");
  });
};

setQuestionone = () => {
  question.innerHTML =
    "Which of the following statements is correct for a three-phase system?";
  labels[0].innerHTML =
    "The power delivered to a three-phase load is pulasting in nature.";
  labels[1].innerHTML =
    "Power per kilogram of metal from a three-phase machine is less as compared to a single-phase machine.";
  labels[2].innerHTML = "A three-phase machine does not require a starter.";
  labels[3].innerHTML =
    "Mechanical vibration in three-phase motors are more as copmared to single phase motors.";
  questionNumber.innerHTML = "Question 1 / 2";
};

const setQuestionTwo = () => {
  question.innerHTML =
    "The main purpose of a generating plant substation is to ______________.";
  labels[0].innerHTML =
    "Step up the incoming voltage so that it can be transmitted over long distances.";
  labels[1].innerHTML =
    "Step down the voltage so that it can be transmitted over long distances.";
  labels[2].innerHTML =
    "Step up or step down the voltage to an appropriate level so that it can be transmitted over long distances.";
  labels[3].innerHTML =
    "Reverse the direction of the current to maintain a constant voltage.";
  questionNumber.innerHTML = "Question 2 / 2";
};

const disabledButton = (x) => {
  x.style.color = "#BEBEBE";
  x.disabled = true;
  x.style.cursor = "auto";
};

const enableButton = (x) => {
  x.style.color = "";
  x.disabled = false;
  x.style.cursor = "pointer";
};

const disableSubmit = () => {
  submit.disabled = true;
  submit.style.cursor = "auto";
  submit.style.color = "black";
  submit.style.backgroundColor = "#BEBEBE";
};

const enableSubmit = () => {
  submit.disabled = false;
  submit.style.cursor = "pointer";
  submit.style.color = "";
  submit.style.backgroundColor = "";
};

//go to the next question

const goNext = () => {
  disabledButton(next);
  enableButton(previous);
  disableSubmit();
  setQuestionTwo();
  removeCheckedAnswer();
  labels.forEach((label) => {
    label.style.cursor = "pointer";
    label.removeAttribute("disabled");
  });
};

const removeCheckedAnswer = () => {
  allOptions.forEach((item) => {
    item.checked = false;
    item.removeAttribute("disabled");
    item.addEventListener("click", () => {});
  });
};

//show first quiz
const firstQuiz = document.querySelector(".quiz1");
const quizOneIcon = document.querySelector(".quizOne i");
const quizOne = document.querySelector(".quizOne p");
const showQuiz = () => {
  restColors();
  restAllTags();
  videoPlayer.pause();
  restAllMapButtons();
  loadingAnimation(quizOneIcon);
  setQuestionone();
  disabledButton(previous);
  enableButton(next);
  removeCheckedAnswer();
  labels.forEach((label) => {
    label.style.cursor = "pointer";
    label.removeAttribute("disabled");
  });
  quizOneIcon.style.color = "#57B643";
  quizOne.style.color = "#57B643";
  videoPlayer.style.display = "none";
  mapContainer.style.display = "none";
  firstQuiz.style.display = "";
};

const loadingIconVideos = (icon) => {
  icon.classList.add("fa-spinner");
  icon.classList.add("fa-spin");
  videoPlayer.addEventListener("canplay", function () {
    icon.classList.remove("fa-spinner");
    icon.classList.remove("fa-spin");
  });
};

//Loading animation
const loadingAnimation = (icon) => {
  icon.classList.add("fa-spinner");
  icon.classList.add("fa-spin");
  setTimeout(() => {
    icon.classList.remove("fa-spinner");
    icon.classList.remove("fa-spin");
  }, 100);
};

//submit button
const submit = document.querySelector(".submit");
const allOptions = document.querySelectorAll("input[type]");
const header = document.querySelector(".header");
const message = document.querySelector(".message");
submit.addEventListener("click", () => {
  if (
    question.textContent ==
    "The main purpose of a generating plant substation is to ______________."
  ) {
    if (allOptions[0].checked) {
      overlay.style.display = "";
      popUp.style.display = "";
      header.innerHTML = "correct";
      header.style.color = "#9bce3b";
      message.innerHTML = "That’s correct!";
    } else {
      header.innerHTML = "incorrect";
      header.style.color = "#E56262";
      message.innerHTML = "That’s not quite right.";
      overlay.style.display = "";
      popUp.style.display = "";
    }
  } else {
    if (allOptions[2].checked) {
      overlay.style.display = "";
      popUp.style.display = "";
      header.innerHTML = "correct";
      header.style.color = "#9bce3b";
      message.innerHTML = "That’s correct!";
    } else {
      header.innerHTML = "incorrect";
      header.style.color = "#E56262";
      message.innerHTML = "That’s not quite right.";
      overlay.style.display = "";
      popUp.style.display = "";
    }
  }
});

//the user can't select submit button until he selects one answer
disableSubmit();
disabledButton(previous);
allOptions.forEach((item) => {
  item.addEventListener("click", () => {
    enableSubmit();
  });
});

//close the pop up window
const popUp = document.querySelector(".pop_up");
const closeButton = document.querySelector(".close_button");
const overlay = document.querySelector("#overlay");
const labels = document.querySelectorAll(".containerr .text");
closeButton.addEventListener("click", () => {
  popUp.style.display = "none";
  overlay.style.display = "none";
  overlay.style.pointerEvents = "none";
  disableSubmit();
  labels.forEach((label) => {
    label.style.cursor = "auto";
  });
  allOptions.forEach((item) => {
    item.setAttribute("disabled", "disabled");
    item.style.cursor = "auto";
  });
});

//continue button

const continueButton = document.querySelector(".continue");

const continueAction = () => {
  if ((videoPlayer.style.display = "none")) {
    videoPlayer.pause();
  }
  for (let i = 0; i < subSections.length; i++) {
    if (subSections[i].children[1].style.color == "rgb(87, 182, 67)") {
      subSections[i].children[0].style.color = " black";
      subSections[i].children[1].style.color = " black";
      loadingAnimation(subSections[i + 1].children[0]);
      subSections[i + 1].children[0].style.color = " rgb(87, 182, 67)";
      subSections[i + 1].children[1].style.color = " rgb(87, 182, 67)";
      subSections[i + 1].click();
      break;
    }
  }
};

const mapContainer = document.querySelector(".map");
const mapIcon = document.querySelector(".fa-flask");
const map1 = document.querySelector(".map1 p");
const mapButton = () => {
  restColors();
  videoPlayer.pause();
  loadingAnimation(mapIcon);
  firstQuiz.style.display = "none";
  videoPlayer.style.display = "none";
  mapContainer.style.display = "";
  mapIcon.style.color = "#57B643";
  map1.style.color = "#57B643";
  restAllTags();
};

//show and hide map tags
//all tags
const allTags = document.querySelectorAll(".map-tag");
const allMapButtons = document.querySelectorAll(".map-button");
const restAllTags = () => {
  document.getElementById("Group_491").style.display = "none";
  document.getElementById("Group_494").style.display = "none";
  document.getElementById("Group_492").style.display = "none";
  document.getElementById("Group_493").style.display = "none";
  document.getElementById("Group_495").style.display = "none";
};

const restAllMapButtons = () => {
  allMapButtons.forEach((item) => {
    item.children[0].style.color = "";
    item.children[1].style.color = "";
    item.style.backgroundColor = "";
  });
};

//steam-tag
const steamButton = document.querySelector(".steam");

steamButton.addEventListener("click", () => {
  restAllTags();
  restAllMapButtons();
  steamButton.style.backgroundColor = "#f68b2e";
  steamButton.children[0].style.color = "white";
  steamButton.children[1].style.color = "white";
  document.getElementById("Group_491").style.display = "";
});

//gas-tag
const gasButton = document.querySelector(".gas");

gasButton.addEventListener("click", () => {
  restAllTags();
  restAllMapButtons();
  gasButton.style.backgroundColor = "#cc4141";
  gasButton.children[0].style.color = "white";
  gasButton.children[1].style.color = "white";
  document.getElementById("Group_494").style.display = "";
});

//diesel-tag
const dieselButton = document.querySelector(".diesel");

dieselButton.addEventListener("click", () => {
  restAllTags();
  restAllMapButtons();
  dieselButton.style.backgroundColor = "#0054a3";
  dieselButton.children[0].style.color = "white";
  dieselButton.children[1].style.color = "white";
  document.getElementById("Group_492").style.display = "";
});

//combined-tag
const combinedButton = document.querySelector(".combined");

combinedButton.addEventListener("click", () => {
  restAllTags();
  restAllMapButtons();
  combinedButton.style.backgroundColor = "#42aebc";
  combinedButton.children[0].style.color = "white";
  combinedButton.children[1].style.color = "white";
  document.getElementById("Group_495").style.display = "";
});

//combined-tag
const dieselGasButton = document.querySelector(".diesel_gas");

dieselGasButton.addEventListener("click", () => {
  restAllTags();
  restAllMapButtons();
  dieselGasButton.style.backgroundColor = "#9bce3b";
  dieselGasButton.children[0].style.color = "white";
  dieselGasButton.children[1].style.color = "white";
  document.getElementById("Group_493").style.display = "";
});

//show all tags
const allTagsButton = document.querySelector(".show_all");

allTagsButton.addEventListener("click", () => {
  restAllMapButtons();
  allTagsButton.style.backgroundColor = "#60636a";
  allTagsButton.children[0].style.color = "white";
  allTagsButton.children[1].style.color = "white";
  document.getElementById("Group_491").style.display = "";
  document.getElementById("Group_494").style.display = "";
  document.getElementById("Group_492").style.display = "";
  document.getElementById("Group_493").style.display = "";
  document.getElementById("Group_495").style.display = "";
});
