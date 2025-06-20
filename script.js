// Display browser info
const infoList = document.getElementById("browser-info");
const infoItems = [
  `Navigator: ${navigator.appName}, ${navigator.product}, ${navigator.appVersion}, ${navigator.userAgent}, ${navigator.platform}, ${navigator.language}`,
  `Window: ${window.innerHeight}x${window.innerWidth}`,
  `Screen: ${screen.width}x${screen.height}, Avail: ${screen.availWidth}x${screen.availHeight}, ColorDepth: ${screen.colorDepth}, PixelDepth: ${screen.pixelDepth}`,
  `Location: ${location.href}, ${location.hostname}, ${location.pathname}, ${location.protocol}`
];
infoItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  infoList.appendChild(li);
});

// Password validation
function validatePassword() {
  const pwd = document.getElementById("pwd");
  const value = pwd.value;
  const isValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{10,}$/.test(value);
  pwd.style.color = isValid ? "green" : "red";
}
