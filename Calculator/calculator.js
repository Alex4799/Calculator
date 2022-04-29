let resultTag=document.querySelector(".result")
let buttons=Array.from(document.querySelectorAll(".buttonTag"))

buttons.map((button) => {
    button.addEventListener("click", calculate)
})

function calculate(event){
    let value=event.target.innerText;
    switch (value) {
        case "←": resultTag.innerText=resultTag.innerText.slice(0,-1);
            break;

        case "C": resultTag.innerText="";
            break;

        case "=": try {
            resultTag.innerText+="="+eval(resultTag.innerText)
                } catch (error) {
                    resultTag.innerText="Error!!!"
                }
            break;
    
        default: resultTag.innerText+=value;
            break;
    }
}