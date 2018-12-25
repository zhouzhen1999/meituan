$.ajax({
    url: "/api/list",
    type: "get",
    dataType: "json",
    success: function(res) {
        if (res.code == 0) {
            renderList(res.data)
        }
    }
})


function renderList(data) {
    var str = "";
    data.forEach((i) => {
        //     str += `
        //         <div class="swiper-slide">`
        //     str += renderDatas(i.list)
        //     str += `</div>
        //    `;
        console.log(i.list)
    })

    $("#boxWrap").html(str);

    var Swiper = new Swiper("#boxWrap", {
        navigation: {
            prevEl: "#prev",
            nextEl: "#next"
        },
        pagination: {
            el: "#round",
            clickable: true
        }
    })
}


function renderDatas(data) {
    return data.map((i) => {
        return `<li>
                    <img src="${i.img}" alt="">
                    <p>${i.title}</p>
                </li>`
    }).join("");
}