!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;function r(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));n.style.backgroundColor=t}function a(t){t.setAttribute("disabled","disabled")}function c(t){t.removeAttribute("disabled")}t.addEventListener("click",(function(){a(t),c(e),o=setInterval(r,1e3)})),e.addEventListener("click",(function(){a(e),c(t),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.cb8eec59.js.map