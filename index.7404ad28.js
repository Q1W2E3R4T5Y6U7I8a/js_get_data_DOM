for(var e=document.querySelectorAll("span.population"),t=[],n=0;n<e.length;n++){var o=parseInt(e[n].textContent.replace(/,/g,""),10);t.push(o)}var r=t.reduce(function(e,t){return e+t},0),a=r/t.length,l=r.toLocaleString("en-US"),u=a.toLocaleString("en-US"),p=document.querySelector("span.total-population"),c=document.querySelector("span.average-population");p&&(p.textContent=l),c&&(c.textContent=u);
//# sourceMappingURL=index.7404ad28.js.map
