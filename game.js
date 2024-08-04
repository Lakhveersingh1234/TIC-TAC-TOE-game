let boxes=document.querySelectorAll(".box")
let reset=document.querySelector("#reset")
let msg=document.querySelector("#msg")
let newgame=document.querySelector("#newgame")
let msgcontainer=document.querySelector(".message")
let turn0=true
let winingpattren=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [2,4,6],
    [1,4,7],
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turn0){
            box.innerText="0"
            turn0=false
          
        }
        else{
            box.innerText="x"
            turn0=true
           
        }
        box.disabled=true;
        checkwinner()
    });
});

const resetgame=()=>{
  turn0=true
  enable();
  msgcontainer.classList.add("hide")
}
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
        
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
     msg.innerText=`Congratulatons Winner is ${winner}`;
     msgcontainer.classList.remove("hide");
     disable();
}
cont=checkwinner=()=>{
    for(let winner of winingpattren){
       
           let post1val= boxes[winner[0]].innerText;
           let post1va2= boxes[winner[1]].innerText;
           let post1va3= boxes[winner[2]].innerText;
        if(post1val !=''&& post1va2 !='' && post1va3 !=''){
            if(post1val === post1va2 && post1va2 === post1va3){
                console.log(post1val);
                showwinner(post1val);
            }
        }
    }
};
reset.addEventListener("click",resetgame)
newgame.addEventListener("click",resetgame)