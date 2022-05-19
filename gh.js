let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let result = document.getElementById("result");
var counting = 0;
var end = 100;
const box = document.getElementById("boxx");
var score = document.getElementById("score");
var replay_btn = document.getElementById("replay");

// random merhod
var myArray = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn10,btn11]
var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

function all(){
    counting = 0;
    function main(btn){
        btn.style.display = "inline";
        console.log(btn.id)
        btn.addEventListener("click",(e)=>{
            btn.style.display = "none";
            counting = counting + 1;
            var randomItem2 = myArray[Math.floor(Math.random()*myArray.length)];
            main(randomItem2)
        })
    }

    main(randomItem)

    //countdown system
    let countdn = document.getElementById("countdown")
    const startmin = 0.2;
    let time = startmin * 60;

    let interval = setInterval(tm,1000);

    function tm(){
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        countdn.innerHTML = `${minutes} : ${seconds}`
        time--;

        if (time == -1){
            clearInterval(interval);
            done();
        }
    }

    function done(){
        box.style.display = "inline";
        score.innerHTML = `Your Score :${counting}`;
    }
    }

all()
replay_btn.addEventListener("click",replays)

function replays(){
    box.style.display = "none";
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
    btn5.style.display = "none";
    btn6.style.display = "none";
    btn7.style.display = "none";
    btn8.style.display = "none";
    btn9.style.display = "none";
    btn10.style.display = "none";
    btn11.style.display = "none";
    all();
}

// starting page
let name = document.getElementById("name");
let play_btn = document.getElementById("start");
let start_page = document.getElementById("starting");
let main_page = document.getElementById("main");

play_btn.addEventListener("click",(e)=>{
    start_page.style.display = "none";
    main_page.style.display = "inline";
})

// closing
let end_btn = document.getElementById("ending");

end_btn.addEventListener("click",(e)=>{
    start_page.style.display = "inline";
    main_page.style.display = "none";
    box.style.display="none";
    all()
    
})



