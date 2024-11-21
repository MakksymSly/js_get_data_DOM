var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),o=document.querySelector(".average-population"),n=Array.from(t).reduce(function(t,e){return t+ +e.textContent.split(",").join("")},0);e.textContent=n.toLocaleString(),o.textContent=(n/t.length).toLocaleString();
//# sourceMappingURL=index.87073e6b.js.map
