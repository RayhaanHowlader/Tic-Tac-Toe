console.log("Welcome To Tic Toe");
let music =new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn = "X";
let isgameover=false
let reset=document.getElementById('reset');
// music.play();
//Function to change turn
const change=()=>{
    return turn=="X"?"0":"X"
}
//Function to check for a win
const checkWin=()=>{
    boxtext=Array.from(document.getElementsByClassName('boxtext'))
    let  wins=[[0,1,2,-19,5,0],[3,4,5,-19,16,0],[6,7,8,-19,26,0],[0,3,6,-29,15,90],[1,4,7,-19,17,90],[2,5,8,-8,15,90],[0,4,8,-20,13,45],[2,4,6,-17,14,321]]; 
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText==boxtext[e[1]].innerText) && (boxtext[e[1]].innerText==boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!='') ){         
           document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won";
           let x1=e[3];
           let x2=e[4];
           let x3=e[5];
           document.querySelector('.line').style.width='35vw';
           document.querySelector('.line').style.transform=`translate(${x1}vw,${x2}vw) rotate(${x3}deg)`;
           isgameover=true;
           document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='200px';
           document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height='256px';
         
        }

    })
}
//Game Logic
let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==''){
            boxtext.innerText=turn;
          
            turn = change();
           
            audioturn.play()
            checkWin();
            if(!isgameover){
            document.getElementsByClassName('info')[0].innerText="Turn for"+turn;
            }       
        }
    })

});
reset.addEventListener('click',(e)=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=" "
    })
    document.querySelector('.line').style.width="0vw";
    turn="X";
    isgameover=false;
    document.getElementsByClassName('info')[0].innerText="Turn for"+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px';
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height='0px';
})
