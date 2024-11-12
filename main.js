import './assets/scss/all.scss';


const data = [
    {
        name : "綠島自由行套裝行程",
        pic: "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true",
        city : "高雄",
        price : 1400,
        num: 87,
        star: 10,
        introduce: "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合。"
    },
    {
        name: "清境高空觀景步道",
        pic: "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_4.png?raw=true",
        city: "台北",
        price: 240,
        num: 99,
        star: 2,
        introduce: "清境農場青青草原數十公頃碧草，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。"
    },
    {
        name: "山林悠遊套票",
        pic: "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_3.png?raw=true",
        city:"台中",
        price: 1765,
        num: 20,
        star: 7,
        introduce: "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點。"
    }
]

const regionSearch = document.querySelector(".regionSearch"),
      ticketCardArea = document.querySelector(".ticketCard-area"),
    addTicketForm = document.querySelector(".addTicket-form")

//data init
function dataInit() {
    ticketCardArea.innerHTML = ""
    data.forEach(e => {
        ticketCardArea.innerHTML += `<li class="ticketCard">
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
        </li>`
    })
}

//新增資料
addTicketForm.addEventListener("submit", event=>{   
    event.preventDefault();
    const obj = {
        name: event.target.ticketName.value,
        pic: event.target.ticketImgUrl.value,
        city: event.target.ticketRegion.value,
        price: event.target.ticketPrice.value,
        num: event.target.ticketNum.value,
        star: event.target.ticketRate.value,
        introduce: event.target.ticketDescription.value
    }
    if (obj.name == "" || obj.pic == "" || obj.city == "" || obj.price == "" || obj.num == "" || obj.star == "" || obj.introduce == ""){
        alert("未填寫完成")
        return
    }
    data.push(obj)
    dataInit()
    addTicketForm.reset()
})

//地區篩選器
regionSearch.addEventListener("change",event=>{
    const ticketCards = document.querySelectorAll(".ticketCard"),
          selectRegion = event.target.value
    ticketCards.forEach((iteam)=>{
        const region = iteam.querySelector(".ticketCard-region").innerHTML
        iteam.style.display = (selectRegion == "" || selectRegion == region) ? "block" : "none"
    })
})




