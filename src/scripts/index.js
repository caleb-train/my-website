function ace_is_elem_in_viewport(e, t) {
    var o = e[0].getBoundingClientRect();
    return (
        o.bottom >= 0 &&
        o.right >= 0 &&
        o.top + t <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        o.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function ace_is_elems_in_viewport(e, t) {
    for (var o = 0; o < e.length; o++) {
        var r = $(e[o]);
        if (r.hasClass("crt-animate") && ace_is_elem_in_viewport(r, t)) {
            if (
                (r.removeClass("crt-animate").addClass("crt-animated"),
                    r.hasClass("progress-chart"))
            ) {
                var i = r.find(".progress-bar");
                ace_progress_chart(i[0], i.data("text"), i.data("value"), 1e3);
            }
            if (r.hasClass("progress-line")) {
                var a = r.find(".progress-bar");
                ace_progress_line(a[0], a.data("text"), a.data("value"), 1e3);
            }
        }
    }
}

function ace_appear_elems(e, t) {
    ace_is_elems_in_viewport(e, t),
        $(window).scroll(function () {
            ace_is_elems_in_viewport(e, t);
        }),
        $(window).resize(function () {
            ace_is_elems_in_viewport(e, t);
        });
}

ace_appear_elems($(".crt-animate"), 150)