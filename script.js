// Show browser info in submenu
const browserList = document.getElementById("browser-info");
if (browserList) {
  const info = [
    `Navigator: ${navigator.appName}`,
    `Product: ${navigator.product}`,
    `Version: ${navigator.appVersion}`,
    `User Agent: ${navigator.userAgent}`,
    `Platform: ${navigator.platform}`,
    `Language: ${navigator.language}`,
    `Window: ${window.innerWidth} x ${window.innerHeight}`,
    `Screen: ${screen.width} x ${screen.height}`,
    `Location: ${location.href}`
  ];

  info.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    browserList.appendChild(li);
  });
}

// Password validation
function validatePassword() {
  const pwd = document.getElementById("pwd");
  const value = pwd.value;
  const isValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{10,}$/.test(value);
  pwd.style.color = isValid ? "green" : "red";
}
