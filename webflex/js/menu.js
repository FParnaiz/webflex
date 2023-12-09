document.addEventListener("DOMContentLoaded", function() {
    var pos1 = Math.floor(Math.random() * 10);
    var pos2 = Math.floor(Math.random() * 10);
    var pos3 = Math.floor(Math.random() * 10);
    var item1 = document.getElementById("m_item1");
    var item2 = document.getElementById("m_item2");
    var item3 = document.getElementById("m_item3");
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");
    item1.style.order = pos1;
    item2.style.order = pos2;
    item3.style.order = pos3;
    item1.style.backgroundColor = color();
    item2.style.backgroundColor = color();
    item3.style.backgroundColor = color();
    link1.style.color = color();
    link2.style.color = color();
    link3.style.color = color();
});


