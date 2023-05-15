const generateBtn = document.querySelector("#generateBtn");
const gridContainer = document.querySelector("#gridContainer");
const progressBar = document.querySelector("#progressBar");
const max = 8;

generateBtn.addEventListener("click", () => {
  const gridConLength = gridContainer.children.length;
  if (gridConLength < max) {
    const remainingImages = max - gridConLength;
    let loadedImages = 0;
    for (let i = 0; i < remainingImages; i++) {
      createImage(() => {
        loadedImages++;
        const progressPercentage = (loadedImages / remainingImages) * 100;
        updateProgressBar(progressPercentage);
        if (loadedImages === remainingImages) {
          generateBtn.textContent = "이미지 모두 지우기";
          alert(`${max}개의 이미지가 생성되었습니다!`);
        }
      });
    }
  } else {
    const confirmed = confirm("이미지를 모두 지우시겠습니까?");
    if (confirmed) {
      gridContainer.innerHTML = "";
      generateBtn.textContent = "이미지 만들기!";
      updateProgressBar(0);
    }
  }
});

function createImage(callback) {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");
  const img = document.createElement("img");
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  const url = `https://picsum.photos/id/${randomNumber}/1536/804?random=${Date.now()}`;
  img.src = url;
  img.addEventListener("load", () => {
    imgContainer.appendChild(img);

    const actionsContainer = document.createElement("div");
    actionsContainer.classList.add("actionsContainer");

    const saveButton = document.createElement("a");
    saveButton.className = "btn";
    saveButton.textContent = "다운로드";
    const downloadId = `downloadLink${Date.now()}`; // 고유한 ID 생성
    saveButton.id = downloadId;
    saveButton.addEventListener("click", () => {
      downloadImage(url, downloadId);
    });

    const editButton = document.createElement("a");
    editButton.className = "btn";
    editButton.textContent = "수정";

    actionsContainer.appendChild(saveButton);
    actionsContainer.appendChild(editButton);
    imgContainer.appendChild(actionsContainer);

    gridContainer.appendChild(imgContainer);

    callback();
  });
  img.addEventListener("error", () => {
    img.remove();
    createImage(callback);
  });
}

function downloadImage(url, downloadId) {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const downloadLink = document.getElementById(downloadId);
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = "";
    })
    .catch((error) => {
      console.error("Error occurred while downloading the image:", error);
    });
}

function updateProgressBar(percentage) {
  progressBar.style.width = `${percentage}%`;
}
