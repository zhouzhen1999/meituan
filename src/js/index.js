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
        str = `<div class="swiper-slide">`
        str += renderList(i.list);
        str + `</div>`;
    })
    $("#boxWrap").html(str);
    new Swiper("#boxWrap", {
        autoplay: true,
        slidesPerView: 1,
        // 显示几张图片
        slidesPerGround: 1,
        loop: true,
        direction: "horizontal",
        autoplay: {
            delay: 1000,
        },
        pagination: {
            el: "#paginAtion",
            clickable: true
        }

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
    scrolX: true
})

$("#footer span").on("click", function() {
    $(this).addClass("active").siblings().removeClass("active")
})