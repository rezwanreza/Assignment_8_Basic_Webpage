// Check if DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  // Populate browser info
  const browserInfo = document.getElementById("browser-info");

  if (browserInfo) {
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

    items.forEach(info => {
      const li = document.createElement("li");
      li.textContent = info;
      browserInfo.appendChild(li);
    });
  }

  // Password validator
  const pwdInput = document.getElementById("pwd");
  if (pwdInput) {
    pwdInput.addEventListener("keyup", () => {
      const value = pwdInput.value;
      const valid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{10,}$/.test(value);
      pwdInput.style.color = valid ? "green" : "red";
    });
  }
});
