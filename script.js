
const display = document.getElementById("display");
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".switch input");

  toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark", this.checked);
  });
});

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.textContent.trim(); 

    if (key === "AC") {
      display.value = "";
    }
    else if (key === "C") {
      display.value = display.value.slice(0, -1);
    }
    else if (key === "=") {
      try {
        display.value = eval(display.value) ?? "";
      } catch {
        display.value = "Error";
      }
    }
    else {
      display.value += key;
    }
  });
});

document.getElementById("footer").textContent=new Date().getFullYear();
console.log(new Date().getFullYear());