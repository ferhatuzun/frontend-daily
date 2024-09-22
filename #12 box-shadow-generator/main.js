let output = document.querySelector("#output");
let horizontalShadow = document.querySelector(".horizontalShadow");
let verticalShadow = document.querySelector(".verticalShadow");
let blurRadius = document.querySelector(".blurRadius");
let spreadRadius = document.querySelector(".spreadRadius");
let borderRadius = document.querySelector(".borderRadius");
let shadowOpacity = document.querySelector(".shadowOpacity");
let insertShadow = document.querySelector(".insertShadow");
let shadowColor = document.querySelector(".shadowColor");
let cssText = document.querySelector("#codes textarea");
let copyBtn = document.querySelector("#codes button");
let copyClipboard = document.querySelector("#copyClipboard");
let input = document.querySelectorAll("input");


let shadowGenerator=()=>{
    let boxShadow = `box-shadow: ${insertShadow.checked?"inset":""} ${horizontalShadow.value}px ${verticalShadow.value}px ${blurRadius.value}px ${spreadRadius.value}px ${hexToRgba(shadowColor.value,shadowOpacity.value)};`

    let border=`${borderRadius.value!=0?`border-radius:${borderRadius.value}px`:""};`

    cssText.innerHTML=`${boxShadow}\n${border}`;
    output.setAttribute("style",boxShadow+border);
}


for(let x of input){
    x.addEventListener("input",shadowGenerator);
}

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(cssText.value);

    copyClipboard.classList.add("fadeIn");
    copyClipboard.classList.remove("fadeOut");
    
    setTimeout(() => {
        copyClipboard.classList.remove("fadeIn");
        copyClipboard.classList.add("fadeOut");
    }, 900);
})

let hexToRgba = (color,opactiy)=>{
    let r = parseInt(color.substr(1,2),16);
    let g = parseInt(color.substr(3,2),16);
    let b = parseInt(color.substr(5,2),16);

    return `rgba(${r},${g},${b},${opactiy})`;
}

