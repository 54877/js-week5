import './assets/scss/all.scss';
// const data = [
//     {
//         name: "綠島自由行套裝行程",
//         pic: "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true",
//         city: "高雄",
//         price: 1400,
//         num: 87,
//         star: 10,
//         introduce: "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合。"
//     },
//     {
//         name: "清境高空觀景步道",
//         pic: "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_4.png?raw=true",
//         city: "台北",
//         price: 240,
//         num: 99,
//         star: 2,
//         introduce: "清境農場青青草原數十公頃碧草，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。"
//     },
//     {
//         name: "山林悠遊套票",
//         pic: "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_3.png?raw=true",
//         city: "台中",
//         price: 1765,
//         num: 20,
//         star: 7,
//         introduce: "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點。"
//     }
// ]

//JSON 提取data
let data 
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
    .then(response => {
      data = response.data.data
      searchResultText.querySelector("span").innerHTML = data.length
      dataInit();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

const regionSearch = document.querySelector(".regionSearch"),
      ticketCardArea = document.querySelector(".ticketCard-area"),
      addTicketForm = document.querySelector(".addTicket-form"),
      searchResultText = document.querySelector("#searchResult-text")
         
//data init
function dataInit() {
    ticketCardArea.innerHTML = ""
    data.forEach(e => {
        ticketCardArea.innerHTML += `<li class="ticketCard">
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
        </li>`
    })
    dountChart(data)
}

//新增資料
addTicketForm.addEventListener("submit", event => {
    event.preventDefault();
    const obj = {
        name: event.target.ticketName.value,
        imgUrl: event.target.ticketImgUrl.value,
        area: event.target.ticketRegion.value,
        price: event.target.ticketPrice.value,
        group: event.target.ticketNum.value,
        rate: event.target.ticketRate.value,
        description: event.target.ticketDescription.value
    }
    if (Object.values(obj).some(value => value === "")) {
        alert("未填寫完成")
        return
    }
    data.push(obj)
    searchResultText.querySelector("span").innerHTML = data.length
    dataInit()
    addTicketForm.reset()
})

//地區篩選器
regionSearch.addEventListener("change", event => {
    const ticketCards = document.querySelectorAll(".ticketCard"),
          selectRegion = event.target.value
    let n = 0
    ticketCards.forEach((iteam) => {
        const region = iteam.querySelector(".ticketCard-region").innerHTML
        if (selectRegion == "" || selectRegion == region) {
            iteam.style.display ="block"
            n++
        } else {
            iteam.style.display ="none"
        }
        searchResultText.querySelector("span").innerHTML = n
    })
})


//新增圖表
function dountChart(data){
    
    // let arr = []
    // dataChart.forEach((iteam)=>{
    //     let x = 1
    //     for(let i=0 ; i<arr.length ; i++){
    //         if(arr[i][0]==iteam.area){
    //             arr[i][1]+=1
    //             x = 0
    //             break ;
    //         }
    //     }
    //     if (x == 1) {
    //         arr.push([iteam.area, 1])
    //     }
    // })

    let arr = data.reduce((acc , iteam)=>{
        if (acc.find(el => el[0] === iteam.area)) {
            acc.find(el => el[0] === iteam.area)[1] += 1
        }
        else{
            acc.push([iteam.area, 1]);
        }
         return acc
    },[])

     console.log(arr)
     c3.generate({
        bindto: '#dountChart',
        size: {
            width: 170,
            height: 180
        },
        data: {
            columns: arr,
            type: 'donut',
        },
        donut: {
            title: "套票地區比重",
            width: 17,
            label: {
                show: false
            }
        }
    });
}
