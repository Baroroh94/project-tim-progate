const collections = document.querySelectorAll(".fa-heart");
const navList = document.querySelectorAll(".nav-list");

const stateCount = { count: 0 }

const count = document.querySelector(".collections");
count.innerHTML = stateCount.count;

navList.forEach((list) => {
    list.addEventListener("click", function () {
        let active = document.getElementsByClassName("active");
        active[0].className = active[0].className.replace("active", "");
        this.className += " active";
    });
});

collections.forEach(element => {
    element.setAttribute("value", "false");
    element.addEventListener("click", function () {
        const value = this.getAttribute("value");
        if (value === "true") {
            this.setAttribute("value", "false");
            this.style.color = "#fff";
            this.classList.remove("add-animasi");
            document.querySelector(".collections").innerHTML = stateCount.count -= 1;
        } else {
            this.setAttribute("value", "true");
            this.style.color = " rgb(233, 7, 146)";
            this.classList.add("add-animasi");
            document.querySelector(".collections").style.display = "block";
            document.querySelector(".collections").innerHTML = stateCount.count += 1;
        }
    });
});