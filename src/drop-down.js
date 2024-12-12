import "./drop-down.css";

// throws error if trigger does not have set target data attribute
// throws error if target id does not exist
// adds "drop-down-content" class to targets
// adds/removes "visible" class on targets
function init() {
  const dropDownTriggers = document.querySelectorAll(".drop-down-trigger");

  for (let trigger of dropDownTriggers) {
    const contentID = trigger.getAttribute("data-triggers-id");
    if (contentID === null) {
      throw new Error(`${trigger} needs a data-triggers-id to be set.`);
    }
    const contentNode = document.getElementById(contentID);
    if (contentNode === null) {
      throw new Error(`${contentID} needs needs to exist.`);
    }

    //avoids forcing user to add class manually, id is enough
    if (!contentNode.classList.contains(".drop-down-content")) {
      contentNode.classList.add("drop-down-content");
    }

    trigger.addEventListener("mouseenter", () => {
      contentNode.classList.add("visible");
    });

    trigger.addEventListener("mouseleave", () => {
      contentNode.classList.remove("visible");
    });
  }
}

export { init as initDropDowns };
