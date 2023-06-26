const data = [{
    title: "Electro Dragon",
    describe: "For the lightning arc to chain, buildings must be spaced one tile apart at most. Therefore, by spacing them out further it is possible to drastically reduce their effectiveness.",
    img: "../img/Relaxing Sleep Music + Rain Sound - Deep Sleeping Music, music for sleeping fall asleep fast(카페 음악).jpg",
    bgColor: "#6ce3f2",
    target: "any",
    housing: 30,
    movement: 13,
    attack: "3.5s",
    training: "6m"
},
{
    title: "Lava Hound",
    describe: "For the lightning arc to chain, buildings must be spaced one tile apart at most. Therefore, by spacing them out further it is possible to drastically reduce their effectiveness.",
    img: "../img/Download Mountains at Night Landscape Scene  for free.jpg",
    bgColor: "#7b5e4d",
    target: "air",
    housing: 30,
    movement: 13,
    attack: "3.5s",
    training: "6m"
},
{
    title: "Baby Dragon",
    describe: "For the lightning arc to chain, buildings must be spaced one tile apart at most. Therefore, by spacing them out further it is possible to drastically reduce their effectiveness.",
    img: "../img/high mountain and cold winter.png",
    bgColor: "#6ce3f2",
    target: "any",
    housing: 30,
    movement: 13,
    attack: "3.5s",
    training: "6m"
},
{
    title: "Baby Dragon",
    describe: "For the lightning arc to chain, buildings must be spaced one tile apart at most. Therefore, by spacing them out further it is possible to drastically reduce their effectiveness.",
    img: "../img/tải xuống (1).jpg",
    bgColor: "#6ce3f2",
    target: "any",
    housing: 30,
    movement: 13,
    attack: "3.5s",
    training: "6m"
},
{
    title: "Lava Hound",
    describe: "For the lightning arc to chain, buildings must be spaced one tile apart at most. Therefore, by spacing them out further it is possible to drastically reduce their effectiveness.",
    img: "../img/Beautiful calm night in mountain forest with moon and stars.jpg",
    bgColor: "#7b5e4d",
    target: "air",
    housing: 30,
    movement: 13,
    attack: "3.5s",
    training: "6m"
},
];

const backgroundWrapper = document.querySelector(".carousel-bg-wrapper");
for(let i = 0 ; i < data.length ; i++){
    backgroundWrapper.innerHTML +=`
       <div class="carousel-bg"> <img src="${data[i].img}" alt=""  ></div>
    `
}

const contentWrapper = document.querySelector(".content-wrapper");
for(let i = 0 ; i < data.length ; i++){
    contentWrapper.innerHTML +=`
    <div class="content">
    <h1 class="name" style="--i: 0">${data[i].title}</h1>
    <div class="describe" style="--i: 1">
        <p>${data[i].describe}</p>
    </div>
    <ul class="properties" style="--i: 2">
        <li>
            <span>Preferred Target</span>
            <span>${data[i].target}</span>
        </li>
        <li>
            <span>housing</span>
            <span>${data[i].housing}</span>
        </li>
        <li>
            <span>movement</span>
            <span>${data[i].movement}</span>
        </li>
        <li>
            <span>attack</span>
            <span>${data[i].attack}</span>
        </li>
        <li>
            <span>training</span>
            <span>${data[i].training}</span>
        </li>
    </ul>
    <button style="--i: 3"> More detail</button>
</div>
`
}

const silde = document.querySelector(".slide-wrapper .slide");
for(let i =0 ; i < data.length ; i++){
    silde.innerHTML +=` <div class="item-wrapper">
    <div class="item" style="--bg: ${data[i].bgColor}">
        <img src="${data[i].img}" alt="">
    </div>
</div>`

}

const backgrounds = document.querySelectorAll(".carousel-bg")
const indicatorNumbers = document.querySelectorAll(".carousel-indicators .number");
const content = document.querySelectorAll(".content");
const items = document.querySelectorAll(".slide .item-wrapper")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

let currentIndex = 0;
const setActive = (index) => {
    currentIndex = index;
    if(currentIndex == 0){
        prev.disabled = true;
    }else{
        prev.disabled = false;
    };

    if(currentIndex == data.length - 1){
        next.disabled = true;
    }else{
        next.disabled = false;
    };

    backgrounds.forEach((bg)=>{
        bg.classList.remove("active");
        // bg.classList.remove("avtive");
    });
    backgrounds[currentIndex].classList.add("active");

    indicatorNumbers.forEach((number)=>{
            number.classList.remove("active");
    });
    indicatorNumbers[currentIndex].classList.add("active");

    content.forEach((contents)=>{
        contents.classList.remove("active");
    });
    content[currentIndex].classList.add("active");

    items.forEach((item)=>{
        item.classList.remove("active");
    });
    items[currentIndex].classList.add("active");

};
setActive(currentIndex);
prev.onclick = ()=>{
    currentIndex--;
    silde.style = `--i: ${currentIndex}`;
    setActive(currentIndex)
};

next.onclick = ()=>{
    currentIndex++;
    silde.style = `--i: ${currentIndex}`;
    setActive(currentIndex)
};