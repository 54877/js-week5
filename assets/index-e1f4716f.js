(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();let c;axios.get("https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json").then(e=>{c=e.data.data,o.querySelector("span").innerHTML=c.length}).catch(e=>{console.error("Error fetching data:",e)});const u=document.querySelector(".regionSearch"),l=document.querySelector(".ticketCard-area"),d=document.querySelector(".addTicket-form"),o=document.querySelector("#searchResult-text");function p(){l.innerHTML="",c.forEach(e=>{l.innerHTML+=`<li class="ticketCard">
          <div class="ticketCard-img">
            <a href="#">
              <img src=${e.imgUrl} alt="">
            </a>
            <div class="ticketCard-region">${e.area}</div>
            <div class="ticketCard-rank">${e.rate}</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a href="#" class="ticketCard-name">${e.name}</a>
              </h3>
              <p class="ticketCard-description">
               ${e.description}
              </p>
            </div>
            <div class="ticketCard-info">
              <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num">  ${e.group} </span> 組
              </p>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">$${e.price}</span>
              </p>
            </div>
          </div>
        </li>`})}d.addEventListener("submit",e=>{e.preventDefault();const i={name:e.target.ticketName.value,imgUrl:e.target.ticketImgUrl.value,area:e.target.ticketRegion.value,price:e.target.ticketPrice.value,group:e.target.ticketNum.value,rate:e.target.ticketRate.value,description:e.target.ticketDescription.value};if(Object.values(i).some(a=>a==="")){alert("未填寫完成");return}console.log(c),c.push(i),o.querySelector("span").innerHTML=c.length,p(),d.reset()});u.addEventListener("change",e=>{const i=document.querySelectorAll(".ticketCard"),a=e.target.value;let s=0;i.forEach(t=>{const r=t.querySelector(".ticketCard-region").innerHTML;a==""||a==r?(t.style.display="block",s++):t.style.display="none",o.querySelector("span").innerHTML=s})});
