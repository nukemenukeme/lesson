$(function() {
    var vimeoPlayer = $("<iframe>");

    vimeoPlayer.attr("src", "https://player.vimeo.com/video/181209409")
               .attr("frameborder", "0")
               .attr("webkitallowfullscreen", true)
               .attr("mozallowfullscreen", true)
               .attr("allowfullscreen", true)
               .attr("id", "vimeo-player");

    function resizeModal() {
        var playerWidth = $(window).width() * 0.8;
        var playerHeight = (playerWidth / 640) * 360;
        vimeoPlayer.attr("width", (playerWidth + "px"))
                   .attr("height", (playerHeight + "px"));
    }

    function closeModal(ev) {
        ev.preventDefault();
        $("body").removeClass("modal-open");
        $("#vimeo-player").remove();
    }

    $("#modal-link").on("click", function(ev) {
        ev.preventDefault();
        resizeModal();
        $("#modal").append(vimeoPlayer);
        $("body").addClass("modal-open");
    });

    $("#modal").on("click", closeModal);
    $(window).on("resize", resizeModal);
});
