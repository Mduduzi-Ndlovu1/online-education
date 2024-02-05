let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = function(){
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
}

window.onscroll = function(){
  menu.classList.remove('fa-times');
  header.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function () {
  // Array of content for each box
  const boxContent = [
      { icon: "fas fa-user-graduate", number: "+450", text: "Best Quality assignment" },
      // Add more content objects as needed
  ];

  // Function to update box content
  function updateBoxContent(box, content) {
      const icon = box.querySelector(".fas");
      const number = box.querySelector("h3");
      const text = box.querySelector("p");

      icon.className = content.icon;
      number.textContent = content.number;
      text.textContent = content.text;
  }

  // Initial setup for the first box
  const firstBox = document.querySelector(".box");
  updateBoxContent(firstBox, boxContent[0]);

  // Clone and append additional boxes with content
  const carousel = document.querySelector(".carousel");
  for (let i = 1; i < boxContent.length; i++) {
      const newBox = firstBox.cloneNode(true);
      updateBoxContent(newBox, boxContent[i]);
      carousel.appendChild(newBox);
  }

  // Function to handle box rotation
  function rotateBoxes() {
      const boxes = document.querySelectorAll(".box");
      const firstBoxClone = boxes[0].cloneNode(true);

      // Remove the first box
      boxes[0].remove();

      // Append the cloned first box at the end
      carousel.appendChild(firstBoxClone);

      // Update content for the new first box
      updateBoxContent(firstBoxClone, boxContent[0]);
  }

  // Set interval for rotating boxes
  setInterval(rotateBoxes, 5000); // Adjust the interval duration as needed
});

