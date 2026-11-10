function reg() {
    let n = document.getElementById("n").value.trim();
    let e = document.getElementById("e").value.trim();
    let p = document.getElementById("p").value.trim();
    let g = document.getElementById("g").value.trim();
    let c = document.getElementById("c").value.trim();
    let d = document.getElementById("d").value.trim();
    let y = document.getElementById("y").value.trim();
    let v = document.getElementById("v").value.trim();

    if (!n || !e || !p || !g || !c || !d || !y || !v) {
        alert("Enter all details");
    } else if (!e.includes("@") || isNaN(p) || p.length != 10) {
        alert("Enter valid email and phone number");
    } else {
        document.getElementById("msg").innerHTML =
            "Registration Successful<br>" +
            n + "<br>" + e + "<br>" + p + "<br>" +
            g + "<br>" + c + "<br>" + d + "<br>" +
            y + "<br>" + v;
    }
}

function resetForm() {
    document.querySelectorAll("input").forEach(function (i) {
        i.value = "";
    });
    document.getElementById("msg").innerHTML = "";
}