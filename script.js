// Populate browser info
const browserInfo = document.getElementById("browser-info");

const items = [
  `Navigator: ${navigator.appName}`,
  `Product: ${navigator.product}`,
  `Version: ${navigator.appVersion}`,
  `User Agent: ${navigator.userAgent}`,
  `Platform: ${navigator.platform}`,
  `Language: ${navigator.language}`,
  `Window: ${window.innerWidth} x ${window.innerHeight}`,
  `Screen: ${screen.width} x ${screen.height}`,
  `Available Screen: ${screen.availWidth} x ${screen.availHeight}`,
  `Color Depth: ${screen.colorDepth}`,
  `Pixel Depth: ${screen.pixelDepth}`,
  `Location Href: ${location.href}`,
  `Hostname: ${location.hostname}`,
  `Pathname: ${location.pathname}`,
  `Protocol: ${location.protocol}`
];

if (browserInfo) {
  items.forEach(info => {
    const li = document.createElement("li");
    li.textContent = info;
    browserInfo.appendChild(li);
  });
}

// Password validator
function validatePassword() {
  const pwd = document.getElementById("pwd");
  const value = pwd.value;
  const valid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{10,}$/.test(value);
  pwd.style.color = valid ? "green" : "red";
}
