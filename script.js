var number = document.querySelectorAll(".number");
var operator = document.querySelectorAll(".operator");

for (var j = 0; j < operator.length; j++) {
    operator[j].addEventListener("click", function () {
        if (this.id === "C") {
            putOutput("");
            putHistory("");
        }
        else if (this.id === "CE") {
            var n = getOutput();
            if (n.textContent != "") {
                n = n.substr(0, (n.length - 1));
                putOutput(n);
            }
        }
        else if (this.id === "=") {
            var his = getHistory();
            var out = getOutput();
            his += out;
            var result = eval(his);
            if (result % 1 !== 0) {
                result = result.toFixed(4);
            }
            putOutput(result);
            putHistory("");
        }
        else {
            var his = getHistory();
            var out = getOutput();
            if (his !== "" || out !== "") {
                if (out === "") {
                    his = his.substr(0, (his.length - 1)) + this.id;
                }
                else {
                    his += out + this.id;
                }

            }
            putHistory(his);
            putOutput("");
        }
    })
}

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function () {
        var n = getOutput();
        n = n + this.id;
        putOutput(n);
    })
}

function getOutput() {
    return document.querySelector("#output").textContent;
}
function getHistory() {
    return document.querySelector("#history").textContent;
}
function putOutput(n) {
    document.querySelector("#output").textContent = n;
}
function putHistory(n) {
    document.querySelector("#history").textContent = n;
}