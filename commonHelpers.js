import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as v,i as l}from"./assets/vendor-77e16229.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("datetime-picker"),n=document.querySelector("button[data-start]"),m=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");let r,a;v(s,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=e[0],a<=new Date?(l.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):n.disabled=!1}}),n.addEventListener("click",()=>{n.disabled=!0,s.disabled=!0,r=setInterval(()=>{const t=a-new Date;if(t<=0){clearInterval(r),s.disabled=!1,d(0),l.success({title:"Completed",message:"Countdown finished"});return}d(t)},1e3)});function d(e){const{days:t,hours:c,minutes:u,seconds:i}=p(e);m.textContent=o(t),f.textContent=o(c),h.textContent=o(u),y.textContent=o(i)}function p(e){const S=Math.floor(e/864e5),C=Math.floor(e%864e5/36e5),b=Math.floor(e%864e5%36e5/6e4),g=Math.floor(e%864e5%36e5%6e4/1e3);return{days:S,hours:C,minutes:b,seconds:g}}function o(e){return String(e).padStart(2,"0")}});
//# sourceMappingURL=commonHelpers.js.map