function createStep(number, name) {
  const step = document.createElement("div");
  step.classList.add("step");

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.textContent = number;
  step.appendChild(circle);

  const stepName = document.createElement("div");
  stepName.textContent = name;
  step.appendChild(stepName);

  return step;
}

function activeStep(currentStep) {
  console.log(currentStep);
  const steps = document.querySelectorAll(".step");
  steps.forEach((step) => {
    step.classList.remove("active");
  });
  currentStep.classList.add("active");
}

function renderSteps(steps) {
  const stepper = document.getElementById("stepper");
  stepper.innerHTML = "";
  steps.forEach((step, index) => {
    const stepElement = createStep(index + 1, step.name);
    if (step.active) {
      stepElement.classList.add("active");
    }
    if (step.completed) {
      stepElement.classList.add("completed");
    }
    stepper.appendChild(stepElement);
    const line = document.createElement("div");
    line.classList.add("line");
    if (index != steps.length - 1) {
      stepper.appendChild(line);
    }
    // stepElement.addEventListener("click", function () {
    //   const steps = document.querySelectorAll(".step");
    //   steps.forEach((step) => {
    //     step.classList.remove("active");
    //   });
    //   stepElement.classList.add("active");
    // });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const url = window.location.href;
  if (url.includes("step")) {
    const steps = [
      { name: "Bottom rail fixing", active: true, completed: false },
      { name: "Posts fixing", active: false, completed: false },
      { name: "Wall fixing", active: false, completed: false },
    ];
    renderSteps(steps);
  }
  if (url.includes("two")) {
    const steps = [
      { name: "Bottom rail fixing", active: false, completed: true },
      { name: "Posts fixing", active: true, completed: false },
      { name: "Wall fixing", active: false, completed: false },
    ];
    renderSteps(steps);
  }
  if (url.includes("three")) {
    const steps = [
      { name: "Bottom rail fixing", active: false, completed: true },
      { name: "Posts fixing", active: false, completed: true },
      { name: "Wall fixing", active: true, completed: false },
    ];
    renderSteps(steps);
  }

  let radioButtons = document.querySelectorAll('input[name="choice"]');
  let tableElement = document.getElementById("myTable");
  let selectionElement = document.getElementById("selection");

  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("change", function () {
      console.log(radioButton);
      if (radioButton.value === "yes") {
        tableElement.style.display = "none";
        selectionElement.style.display = "block";
      } else {
        tableElement.style.display = "block";
        selectionElement.style.display = "none";
      }
    });
  });
});
