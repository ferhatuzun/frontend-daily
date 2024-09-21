const calculateContainer = document.querySelector(".calculateContainer");
const changeTheme = document.querySelector(".changeTheme");
const calculateNumber = document.querySelector(".calculateNumber");
const calculateHistory = document.querySelector(".calculateHistory");
const btnNumber = document.querySelectorAll(".btnNumber");
const btnType = document.querySelectorAll(".btnType");
const btnOndalik = document.querySelector(".btnOndalik");
const btnClear = document.querySelector(".btnClear");
const btnEsittir = document.querySelector(".btnEsittir");

for (let button of btnNumber) {
    button.addEventListener("click", clear0)

}
function clear0(e) {
    if (calculateNumber.textContent === "0") {
        calculateNumber.textContent = ""
    }
    calculateNumber.textContent += e.target.textContent
}
function converToNumber() {
    if (calculateNumber.textContent.includes(",")) {
        sayi = parseFloat(calculateNumber.textContent.replace(",", "."));
    } else {
        sayi = Number(calculateNumber.textContent);
    }
}
let sayi = 0;
let toplam = 0;
let type = "";
for (let button of btnType) {
    button.addEventListener("click", () => {

        converToNumber();
        type = button.getAttribute("type");
        calculateNumber.textContent = "0";
        calculate(sayi, button.getAttribute("type"));
    })
}

function calculate(sayi, type) {
    if (type == "yuzde") {
        if (toplam == 0) {
            toplam += sayi
            return
        }
        toplam = (toplam * sayi) / 100

    } else if (type == "bolme") {
        if (toplam == 0) {
            toplam += sayi
            return
        }
        toplam /= sayi;
    } else if (type == "carpma") {
        if (toplam == 0) {
            toplam += sayi
            return
        }
        toplam *= sayi;
    }
    else if (type == "cikarma") {
        if (toplam == 0) {
            toplam += sayi
            return
        }
        toplam -= sayi;
    }
    else if (type == "toplama") {
        if (toplam == 0) {
            toplam += sayi
            return
        }
        toplam += sayi;
    }

    calculateHistory.textContent = toplam.toString().includes(".") && toplam.toString().split(".")[1].length || toplam.toString().split(".")[1] == "00" ? toplam.toFixed(2) : toplam;
    console.log(toplam)
}

btnOndalik.addEventListener("click", () => {
    if (!calculateNumber.textContent.includes(",")) {
        calculateNumber.textContent += ","

    }
})

btnClear.addEventListener("click", () => {
    toplam = 0;
    sayi = 0;
    calculateNumber.textContent = "0";
    calculateHistory.textContent = "";
})

btnEsittir.addEventListener("click", () => {
    if (toplam == 0) {
        return;
    }
    converToNumber();
    calculate(sayi, type)
    calculateNumber.textContent = "0"
})



//! keyboard control
document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key) || e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/" || e.key == "Enter" || e.key == "Backspace" || e.key == "," || e.key == "Enter") {
        if (e.key == "1") {
            for (let button of btnNumber) {
                if (button.textContent == "1") {
                    button.click()
                }
            }
        } if (e.key == "2") {
            for (let button of btnNumber) {
                if (button.textContent == "2") {
                    button.click()
                }
            }
        } if (e.key == "3") {
            for (let button of btnNumber) {
                if (button.textContent == "3") {
                    button.click()
                }
            }
        } if (e.key == "4") {
            for (let button of btnNumber) {
                if (button.textContent == "4") {
                    button.click()
                }
            }
        } if (e.key == "5") {
            for (let button of btnNumber) {
                if (button.textContent == "5") {
                    button.click()
                }
            }
        } if (e.key == "6") {
            for (let button of btnNumber) {
                if (button.textContent == "6") {
                    button.click()
                }
            }
        } if (e.key == "7") {
            for (let button of btnNumber) {
                if (button.textContent == "7") {
                    button.click()
                }
            }
        } if (e.key == "8") {
            for (let button of btnNumber) {
                if (button.textContent == "8") {
                    button.click()
                }
            }
        } if (e.key == "9") {
            for (let button of btnNumber) {
                if (button.textContent == "9") {
                    button.click()
                }
            }
        } if (e.key == "0") {
            for (let button of btnNumber) {
                if (button.textContent == "0") {
                    button.click()
                }
            }
        }
        for (let typeButton of btnType) {
            if (typeButton.getAttribute("type") == "toplama") {
                if (e.key == "+") {
                    converToNumber()
                    calculate(sayi, "toplama")
                    calculateNumber.textContent = "0"
                    type = typeButton.getAttribute("type");
                }
            } if (typeButton.getAttribute("type") == "cikarma") {
                if (e.key == "-") {
                    converToNumber()
                    calculate(sayi, "cikarma")
                    calculateNumber.textContent = "0"
                    type = typeButton.getAttribute("type");
                }
            } if (typeButton.getAttribute("type") == "carpma") {
                if (e.key == "*") {
                    converToNumber()
                    calculate(sayi, "carpma")
                    calculateNumber.textContent = "0"
                    type = typeButton.getAttribute("type");
                }
            } if (typeButton.getAttribute("type") == "bolme") {
                if (e.key == "/") {
                    converToNumber()
                    calculate(sayi, "bolme")
                    calculateNumber.textContent = "0"
                    type = typeButton.getAttribute("type");
                }
            }
        }
         if (e.key == "Backspace") {
            if (calculateNumber.textContent != "0") {
                if(calculateNumber.textContent.length==1){
                    calculateNumber.textContent="0"
                }else{
                    calculateNumber.textContent = calculateNumber.textContent.substring(calculateNumber.textContent.length - 1, 0)

                }
            }
        }
        else if(e.key==","){
            btnOndalik.click()
        }
        else if(e.key=="Enter"){
            btnEsittir.click()
        }
    }
})


//! change theme

changeTheme.addEventListener("click",(e)=>{
    calculateContainer.classList.toggle("darkTheme")
    if(calculateContainer.className.includes("darkTheme")){
        changeTheme.querySelector("i:nth-child(1)").style.display="none";
        changeTheme.querySelector("i:nth-child(2)").style.display="block";
    }else{
        changeTheme.querySelector("i:nth-child(1)").style.display="block";
        changeTheme.querySelector("i:nth-child(2)").style.display="none";
    }
})