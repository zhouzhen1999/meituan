$.ajax({
    url: "/api/list",
    type: "get",
    dataType: "json",
    success: function(res) {
        if (res.code == 0) {
            renderSwiper(res.data)

        }
    }
})

function renderSwiper(data) {
    var str = "";
    data.forEach((i) => {
        str += `<div class="swiper-slide">`
        str += renderList(i.list);
        str += `</div>`;
    })
    $("#boxWrap").html(str);
    new Swiper("#boxWrap", {

    })
}



function renderList(datas) {
    return datas.map((i) => {
        return `<li>
            <img src="${i.url}" alt="">
            <p>${i.title}</p>
        </li>`;
    }).join("");
}

var bscroll = new BScroll(".wrapper", {
    scrollX: true
})

$("#footer span").on("click", function() {
    $(this).addClass("active").siblings().removeClass("active")
})

$(".one").on("click", function() {
    $(".box2").hide();
    $(".box1").show();
    $(".box3").hide();
})
$(".two").on("click", function() {
    $(".box1").hide();
    $(".box2").show();
    $(".box3").hide();
})
$(".three").on("click", function() {
    $(".box1").hide();
    $(".box3").show();
    $(".box2").hide();
})