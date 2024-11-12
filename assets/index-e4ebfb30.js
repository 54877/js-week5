(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const l=[{name:"綠島自由行套裝行程",pic:"https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true",city:"高雄",price:1400,num:87,star:10,introduce:"嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合。"},{name:"清境高空觀景步道",pic:"https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_4.png?raw=true",city:"台北",price:240,num:99,star:2,introduce:"清境農場青青草原數十公頃碧草，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。"},{name:"山林悠遊套票",pic:"https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_3.png?raw=true",city:"台中",price:1765,num:20,star:7,introduce:"山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點。"}],d=document.querySelector(".regionSearch"),o=document.querySelector(".ticketCard-area"),s=document.querySelector(".addTicket-form");function u(){o.innerHTML="",l.forEach(e=>{o.innerHTML+=`<li class="ticketCard">
          <div class="ticketCard-img">
            <a href="#">
              <img src=${e.pic} alt="">
            </a>
            <div class="ticketCard-region">${e.city}</div>
            <div class="ticketCard-rank">${e.star}</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a href="#" class="ticketCard-name">${e.name}</a>
              </h3>
              <p class="ticketCard-description">
               ${e.introduce}
              </p>
            </div>
            <div class="ticketCard-info">
              <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num">  ${e.num} </span> 組
              </p>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">${e.price}</span>
              </p>
            </div>
          </div>
        </li>`})}d.addEventListener("change",e=>{const r=document.querySelectorAll(".ticketCard"),a=e.target.value;r.forEach(c=>{const t=c.querySelector(".ticketCard-region").innerHTML;c.style.display=a==""||a==t?"block":"none"})});s.addEventListener("submit",e=>{e.preventDefault();const r={name:e.target.ticketName.value,pic:e.target.ticketImgUrl.value,city:e.target.ticketRegion.value,price:e.target.ticketPrice.value,num:e.target.ticketNum.value,star:e.target.ticketRate.value,introduce:e.target.ticketDescription.value};if(r.name==""||r.pic==""||r.city==""||r.price==""||r.num==""||r.star==""||r.introduce==""){alert("未填寫完成");return}l.push(r),u(),s.reset()});
