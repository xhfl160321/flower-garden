(function () {
    //menu drop query
    $(".sub_menu").hide();
    $(".menu").hover(function () {
        $(this).find(".sub_menu").stop().slideDown(500);
        $(".subsub_menu").hide();
    }, function () {
        $(this).find(".sub_menu").stop().slideUp(500);
        $(".subsub_menu").hide();
    });

    //submenu drop query
    $(".sub_menu > li").hover(function () {
        $(this).find(".subsub_menu").stop().slideDown(500);
    }, function () {
        $(this).find(".subsub_menu").stop().slideUp(500);
    });

    var slide = setInterval(slideFun, 2000);
    var idx = 2;

    function slideFun() {
        $(".banner ul").animate({ "left": -450 * idx + "px" }, 300);
        idx++;
        if (idx > $(".banner ul li").length - 3) {
            $(".banner ul").animate({ "left": 0 }, 0);
            idx = 0;
        }
    }

    //layer popup img query
    var imgList = $(".imgList li");
    var imgCon = $(".imgCon li");
    var nameNprice = $(".nameNprice li");

    // imgList, imgCon, nameNprice, 의 첫번째 li만 show
    imgList.hide().eq(0).show();
    imgCon.hide().eq(0).show();
    nameNprice.hide().eq(0).show();

    //팝업의 x버튼 클릭 시 팝업 닫힘
    $("#popup").hide();
    $(".close").click(function () {
        $("#popup").hide();
        $(".wrapBlack").hide();
    });

    //p4의 해당 이미지 클릭 시 이미지 정보가 뜨는 팝업 생성
    var imgBtn = $(".p4ImgSlide .banner ul li");
    var popupImg = $("#popup .imgList li");
    var popupCon = $("#popup .imgCon li");
    var popupPrice = $("#popup .nameNprice li");

    imgBtn.each(function (index, obj) {

        // console.log(index, obj);
        var target = $(this);

        target.click(function (e) {
            e.preventDefault();

            // console.log(index, obj, "!button clicked!");

            $("#popup").show();
            $(".wrapBlack").show();
            target.removeClass("active");
            target.addClass("active");
            popupImg.hide();
            popupImg.eq(index).show();
            popupCon.hide();
            popupCon.eq(index).show();
            popupPrice.hide();
            popupPrice.eq(index).show();
        });
    });

    $(document).mouseup(function (e) {
        var imgPopup = $("#popup");
        if (imgPopup.has(e.target).length === 0) {
            imgPopup.hide();
            $(".wrapBlack").hide();
        }
    });

})(jQuery);