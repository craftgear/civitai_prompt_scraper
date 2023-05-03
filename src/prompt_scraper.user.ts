// import html2canvas from "html2canvas";

import { addGalleryDownloadButton } from "./gallery_download";
import { addDownloadButton } from "./model_image_download";

import { waitForElement, sleep } from "./utils";

// const getImageLinks = async () => {
//   scrollTo({ top: document.body.clientHeight, behavior: "instant" });
//   const selector = '#gallery a[href^="/images"]';
//   const imageLinks = await waitForElement(selector);
//   scrollTo({ top: 0, behavior: "instant" });
//   return imageLinks;
// };

// const screenShot = async () => {
//   const main = await waitForElement("main");
//
//   if (!main) {
//     return;
//   }
//   main.style.letterSpacing = "0.1rem";
//
//   document.querySelectorAll("canvas").forEach((x) => x.remove());
//   const canvas = await html2canvas(main, {
//     allowTaint: true,
//   });
//
//   const div = document.createElement("div");
//   div.setAttribute("style", "border: 1px solid red;");
//   div.appendChild(canvas);
//
//   document.body.appendChild(div);
//
//   main.style.letterSpacing = "inherit";
// };

// see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
const observer = new MutationObserver(async (_mutationList) => {
  if (prevHref !== window.location.href) {
    if (
      !window.location.href.includes("/images/") ||
      !prevHref.includes("/images/")
    ) {
      window.location.reload();
    }
    prevHref = window.location.href;
  }
});

let prevHref = "";
(async function () {
  prevHref = window.location.href;

  console.log("start");

  observer.observe(document.querySelector("html"), {
    attributes: true,
    childList: true,
    subtree: true,
  });

  if (window.location.href.includes("/models/")) {
    console.log("models");
    await waitForElement("main");
    // ギャラリーがロードされるまで待つ
    // await getImageLinks();
    //

    // FIXME: adhoc: wait for Nextjs rendering finish
    await sleep(2000);

    await addDownloadButton();

    const showMoreButton = Array.from(
      document.querySelectorAll("button")
    ).filter((x: HTMLElement) => x.innerHTML === "Show More")[0];
    showMoreButton && showMoreButton.click();
  }

  if (window.location.href.includes("/images/")) {
    console.log("images");

    // FIXME: adhoc: wait for Nextjs rendering finish
    await sleep(2000);
    await addGalleryDownloadButton();
  }

  console.log("done");
})();
