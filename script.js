const inpKey = document.querySelector("#keyInput");
const inpVal = document.querySelector("#valueInput");
const dataList = document.querySelector("#dataList");

renderData();

function insertData() {
  const key = inpKey.value;
  const val = inpVal.value;

  let isValid = true;

  // Key validation
  if (!key) {
    inpKey.style.border = "1px solid #ff5050";
    isValid = false;
  } else {
    inpKey.style.border = "1px solid #444";
  }

  // Value validation
  if (!val) {
    inpVal.style.border = "1px solid #ff5050";
    isValid = false;
  } else {
    inpVal.style.border = "1px solid #444";
  }

  if (!isValid) return;

  localStorage.setItem(key, val);
  inpKey.value = "";
  inpVal.value = "";
  renderData();
}

function renderData() {
  dataList.innerHTML = "";
  if (localStorage.length === 0) {
    dataList.innerHTML = "<li>No data stored yet.</li>";
    return;
  }

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const val = localStorage.getItem(key);
    dataList.innerHTML += `<li><strong>${key}</strong> : ${val}</li>`;
  }
}

function clearData() {
  localStorage.clear();
  renderData();
}
