(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();let n;axios.get("https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json").then(e=>{n=e.data.data,s.querySelector("span").innerHTML=n.length,p()}).catch(e=>{console.error("Error fetching data:",e)});const f=document.querySelector(".regionSearch"),l=document.querySelector(".ticketCard-area"),d=document.querySelector(".addTicket-form"),s=document.querySelector("#searchResult-text");let u;function p(){l.innerHTML="",n.forEach(e=>{l.innerHTML+=`<li class="ticketCard">
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
        </li>`}),u=n,g(u)}d.addEventListener("submit",e=>{e.preventDefault();const a={name:e.target.ticketName.value,imgUrl:e.target.ticketImgUrl.value,area:e.target.ticketRegion.value,price:e.target.ticketPrice.value,group:e.target.ticketNum.value,rate:e.target.ticketRate.value,description:e.target.ticketDescription.value};if(Object.values(a).some(i=>i==="")){alert("未填寫完成");return}n.push(a),s.querySelector("span").innerHTML=n.length,p(),d.reset()});f.addEventListener("change",e=>{const a=document.querySelectorAll(".ticketCard"),i=e.target.value;let c=0;a.forEach(t=>{const r=t.querySelector(".ticketCard-region").innerHTML;i==""||i==r?(t.style.display="block",c++):t.style.display="none",s.querySelector("span").innerHTML=c})});function g(e){let a=e.reduce((i,c)=>(i.find(t=>t[0]===c.area)?i.find(t=>t[0]===c.area)[1]+=1:i.push([c.area,1]),i),[]);console.log(a),c3.generate({bindto:"#dountChart",size:{width:160,height:180},data:{columns:a,type:"donut"},donut:{title:"套票地區比重",width:17,label:{show:!1}}})}
