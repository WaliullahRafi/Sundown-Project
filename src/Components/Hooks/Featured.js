//

import React from "react";

function Featured() {
  const elemContainer = document.querySelector("#elemContainer");
  const fixedImage = document.querySelector("#fixed-image");

  elemContainer.addEventListener("mouseenter", () => {
    fixedImage.style.display = "block";
  });

  elemContainer.addEventListener("mouseleave", () => {
    fixedImage.style.display = "none";
  });

  //   const elem1 = document.querySelector("#elem1");
  //   elem1.addEventListener("mouseenter", () => {
  //     const image = elem1.getAttribute("data-image");
  //     fixedImage.style.backgroundImage = `url(${image})`;
  //   });

  //   const elem2 = document.querySelector("#elem2");
  //   elem2.addEventListener("mouseenter", () => {
  //     const image = elem2.getAttribute("data-image");
  //     fixedImage.style.backgroundImage = `url(${image})`;
  //   });

  //   const elem3 = document.querySelector("#elem3");
  //   elem3.addEventListener("mouseenter", () => {
  //     const image = elem3.getAttribute("data-image");
  //     fixedImage.style.backgroundImage = `url(${image})`;
  //   });

  //   const elem4 = document.querySelector("#elem4");
  //   elem4.addEventListener("mouseenter", () => {
  //     const image = elem4.getAttribute("data-image");
  //     fixedImage.style.backgroundImage = `url(${image})`;
  //   });

  //   const elem5 = document.querySelector("#elem5");
  //   elem5.addEventListener("mouseenter", () => {
  //     const image = elem5.getAttribute("data-image");
  //     fixedImage.style.backgroundImage = `url(${image})`;
  //   });

  //   const elem6 = document.querySelector("#elem6");
  //   elem6.addEventListener("mouseenter", () => {
  //     const image = elem6.getAttribute("data-image");
  //     fixedImage.style.backgroundImage = `url(${image})`;
  //   });

  //   const elem7 = document.querySelector("#elem7");
  //   elem7.addEventListener("mouseenter", () => {
  //     const image = elem7.getAttribute("data-image");
  //     fixedImage.style.backgroundImage = `url(${image})`;
  //   });

  //   const elem8 = document.querySelector("#elem8");
  //   elem8.addEventListener("mouseenter", () => {
  //     const image = elem8.getAttribute("data-image");
  //     fixedImage.style.backgroundImage = `url(${image})`;
  //   });

  const elemAll = document.querySelectorAll(".elem");
  elemAll.forEach((event) => {
    event.addEventListener("mouseenter", () => {
      const image = event.getAttribute("data-image");
      fixedImage.style.backgroundImage = `url(${image})`;
    });
  });
}

export default Featured;
