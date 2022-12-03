let element=document.querySelector(".btn");
element.addEventListener('click', Convert);

function Convert(e){
    var binary = document.querySelector("#binary").value;
    var decimal = parseInt(binary, 2);
    let answer = document.querySelector(".result");
    answer.innerHTML = `Decimal Number :${decimal}`;
    return e.preventDefault();
}