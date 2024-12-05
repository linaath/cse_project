var div1 = document.getElementById("d-1-c");
const initialContent = document.getElementById("d-1-c").innerHTML;
const title1 = document.getElementById("day-1");
const title2 = document.getElementById("day-2");
const menu = document.getElementById("links");
const hamburger = document.getElementById("menu-d")
function click1() {
    div1.innerHTML = initialContent;
    title2.style.color = "#484848";
    title1.style.background = "#444";
    title1.style.color = "#ffffff";
    title2.style.background = "#44444453"
}

function click2() {
    div1.innerHTML = `  <div class="content , dp-c">
    <div class="c-c">
        <h3 class="c-title"> (8:00 - 8:30 am) </h3>
        <p class="con-des"> petite déjeuner
        </p>
    </div>
    <div class="content">
        <div class="c-c">
            <h3 class="c-title"> (8:30 am - 12:00 pm) </h3>
            <p class="con-des"> petite finale pour désigner la troisiéme place
            </p>
        </div>
        <div class="c-c">
            <h3 class="c-title"> (12:00 - 13:00 pm) </h3>
            <p class="con-des"> petite déjeuner
            </p>
        </div>
        <div class="c-c">
            <h3 class="c-title"> (1:00 - 5:00 pm) </h3>
            <p class="con-des"> <span class="fin">-- finale --</span>
            </p>
        </div>
        <div class="c-c">
            <h3 class="c-title"> (5:00 - 6:00 pm) </h3>
            <p class="con-des"> cérémonie des prix and annone des gagnants
            </p>
        </div>
        <div class="c-c">
            <h3 class="c-title"> (6:00 - 7:00 pm) </h3>
            <p class="con-des"> cloture et rangement
            </p>
        </div>
    </div>
</div>
`
    title1.style.color = "#484848";
    title2.style.background = "#444";
    title2.style.color = "#ffffff";
    title1.style.background = "#44444453"
}
function click4() {
    menu.style.display = "block";
    hamburger.style.display = "none";
}
function click5() {
    hamburger.style.display = "block";
    menu.style.display = "none";
}