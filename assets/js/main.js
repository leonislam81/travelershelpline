! function(e) {
    "use strict";
    e(".youtube-bg").length && e(".youtube-bg").YTPlayer({
        videoURL: "Sz_1tkcU0Co",
        containment: ".youtube-bg",
        mute: !0,
        loop: !0,
        startAt: 7,
        showControls: !1,
        showYTLogo: !1
    }), e(document).ready(function() {
        e(document).on("click", ".navbar-area .navbar-nav li.menu-item-has-children>a", function(e) {
            e.preventDefault()
        }), e(window).on("scroll", function() {
            e(window).scrollTop() >= 1 ? e(".navbar-area").addClass("navbar-area-fixed") : e(".navbar-area").removeClass("navbar-area-fixed");
            var s = e(".back-to-top");
            e(window).scrollTop() > 1e3 ? s.fadeIn(1e3) : s.fadeOut(1e3)
        }), e("#tp_imageUpload").change(function() {
            ! function s(o) {
                if (o.files && o.files[0]) {
                    var a = new FileReader;
                    a.onload = function(s) {
                        e("#tp_imagePreview").css("background-image", "url(" + s.target.result + ")"), e("#tp_imagePreview").hide(), e("#tp_imagePreview").fadeIn(650)
                    }, a.readAsDataURL(o.files[0])
                }
            }(this)
        }), e(window).width() > 991 && e(".dropdown-menu-btn").length && (e(".dropdown-menu-btn").on("click", function() {
            e(".navbar-nav").fadeToggle("navbar-nav-show", "linear"), e(".dropdown-menu-btn").toggleClass("open")
        }), e("body").on("click", function(s) {
            e(s.target).closest(".dropdown-menu-btn").length || e(s.target).closest(".navbar-nav").length || e(".navbar-nav").fadeOut("navbar-nav-show"), e(s.target).closest(".dropdown-menu-btn").length || e(s.target).closest(".navbar-nav").length || e(".dropdown-menu-btn").removeClass("open")
        })), new WOW().init(), e(".select").length && e(".select").niceSelect(), e(".tp-search-single-wrap select").on("change", function() {
            e(".current").addClass("new-current")
        }), e(".banner-slider").slick({
            slidesToShow: 1,
            dots: !0,
            slidesToScroll: 1,
            speed: 400,
            loop: !0,
            fade: !0,
            autoplay: !0,
            autoplaySpeed: 9e3,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            appendDots: e(".banner-slider-dots")
        }), e(".banner-slider").on("beforeChange", function(s, o, t, l) {
            var n = a(++l);
            e(".banner-slider-controls .slider-extra .text .first").text(n)
        });
        var s = e(".banner-slider").slick("getSlick"),
            o = s.slideCount;

        function a(e) {
            return /^[0-9]+$/.test(e) ? "0" + e : null
        }
        e(".banner-slider-controls .slider-extra .text .last").text(a(o)), new Swiper(".banner-slider-two", {
            mode: "horizontal",
            loop: !0,
            autoHeight: !0,
            speed: 950,
            effect: "coverflow",
            grabCursor: !0,
            centeredSlides: !0,
            slidesPerView: "auto",
            nextButton: ".arrow-right",
            prevButton: ".arrow-left",
            coverflowEffect: {
                rotate: -10,
                stretch: 110,
                depth: 120,
                modifier: 1,
                slideShadows: !1
            },
            pagination: {
                el: ".swiper-pagination"
            },
            navigation: {
                nextEl: ".swiper-buttons-next",
                prevEl: ".swiper-buttons-prev"
            }
        });
        var t = e(".destinations-list-slider");
        t.slick({
            slidesToShow: 3,
            dots: !1,
            slidesToScroll: 1,
            speed: 400,
            loop: !0,
            autoplay: !1,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            appendArrows: e(".destinations-slider-controls .slider-nav"),
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "10px"
                }
            }]
        });
        var l = e(".d-list-progress"),
            n = e(".slider__label");
        t.on("beforeChange", function(e, s, o, a) {
            var t = a / (s.slideCount - 1) * 100;
            l.css("background-size", t + "% 100%").attr("aria-valuenow", t), n.text(t + "% completed")
        }), e(".destinations-list-slider").on("beforeChange", function(s, o, t, l) {
            var n = a(++l);
            e(".destinations-slider-controls .slider-extra .text .first").text(n)
        });
        var s = e(".destinations-list-slider").slick("getSlick"),
            o = s.slideCount;

        function a(e) {
            return /^[0-9]+$/.test(e) ? "0" + e : null
        }
        e(".destinations-slider-controls .slider-extra .text .last").text(a(o));
        var i = e(".destinations-details-main-slider");
        i.slick({
            slidesToShow: 1,
            dots: !1,
            slidesToScroll: 1,
            speed: 400,
            loop: !0,
            fade: !0,
            autoplay: !1,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            appendArrows: e(".destinations-details-main-slider-controls .slider-nav")
        });
        var l = e(".d-list-progress"),
            n = e(".slider__label");
        i.on("beforeChange", function(e, s, o, a) {
            var t = a / (s.slideCount - 1) * 100;
            l.css("background-size", t + "% 100%").attr("aria-valuenow", t), n.text(t + "% completed")
        }), e(".destinations-details-main-slider").on("beforeChange", function(s, o, t, l) {
            var n = a(++l);
            e(".destinations-details-main-slider-controls .slider-extra .text .first").text(n)
        });
        var s = e(".destinations-details-main-slider").slick("getSlick"),
            o = s.slideCount;

        function a(e) {
            return /^[0-9]+$/.test(e) ? "0" + e : null
        }
        e(".destinations-details-main-slider-controls .slider-extra .text .last").text(a(o)), e(".destinations-client-review-slider").slick({
            slidesToShow: 4,
            dots: !1,
            autoplaySpeed: 15e3,
            loop: !0,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "10px"
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "10px"
                }
            }]
        }), e(".upcomming-card-slider-1").slick({
            slidesToShow: 4,
            dots: !1,
            autoplay: !0,
            autoplaySpeed: 7e3,
            centerMode: !0,
            centerPadding: "140px",
            loop: !0,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            responsive: [{
                breakpoint: 1610,
                settings: {
                    centerPadding: "100px"
                }
            }, {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: "80px"
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "80px"
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "140px"
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "55px"
                }
            }, {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "30px"
                }
            }]
        }), e(".upcomming-card-slider-2").slick({
            slidesToShow: 3,
            dots: !1,
            centerMode: !0,
            centerPadding: "8px",
            autoplay: !0,
            autoplaySpeed: 7e3,
            loop: !0,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }]
        }), e(".upcomming-card-slider-3").slick({
            slidesToShow: 4,
            dots: !1,
            autoplay: !0,
            autoplaySpeed: 6e3,
            loop: !0,
            centerMode: !0,
            centerPadding: "8px",
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }), e(".client-slider").slick({
            slidesToShow: 3,
            dots: !1,
            autoplaySpeed: 25e3,
            loop: !0,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }), e(".instagram-slider").slick({
            slidesToShow: 6,
            dots: !1,
            arrows: !1,
            autoplaySpeed: 15e3,
            loop: !0,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }]
        }), e(".blog-slider").slick({
            slidesToShow: 2,
            dots: !1,
            autoplaySpeed: 25e3,
            loop: !0,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }), e(".gallery-slider").length && e(".gallery-slider").owlCarousel({
            items: 3,
            smartSpeed: 450,
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 1e4,
            nav: !1,
            dots: !1,
            smartSpeed: 1500,
            margin: 30,
            responsive: {
                0: {
                    items: 2,
                    margin: 20
                },
                767: {
                    items: 2,
                    margin: 20
                },
                768: {
                    items: 3,
                    margin: 20
                }
            }
        }), new Swiper(".client-slider-two", {
            mode: "horizontal",
            loop: !0,
            speed: 950,
            effect: "coverflow",
            grabCursor: !0,
            centeredSlides: !0,
            slidesPerView: "auto",
            nextButton: ".arrow-right",
            prevButton: ".arrow-left",
            coverflowEffect: {
                rotate: -10,
                stretch: 110,
                depth: 120,
                modifier: 1,
                slideShadows: !1
            },
            pagination: {
                el: ".swiper-pagination"
            },
            navigation: {
                nextEl: ".swiper-buttons-next",
                prevEl: ".swiper-buttons-prev"
            }
        }), e.fn.jarallax && e(".jarallax").jarallax({
            speed: .5
        }), e(".departing-date").length && e(function() {
            e(".departing-date").datepicker()
        }), e(".returning-date").length && e(function() {
            e(".returning-date").datepicker()
        }), e(".slider-product-sorting").length && e(function() {
            e(".slider-product-sorting").slider({
                range: !0,
                min: 50,
                max: 2e3,
                values: [50, 1560],
                slide: function(s, o) {
                    e("#amount").val("$" + o.values[0] + " - $" + o.values[1])
                }
            }), e("#amount").val("$" + e(".slider-product-sorting").slider("values", 0) + " - $" + e(".slider-product-sorting").slider("values", 1))
        });
        var r = e(".gallery-filter-area"),
            d = e(".gallery-filter-menu");
        d.on("click", "button, a", function() {
            var s = e(this),
                o = s.attr("data-filter");
            d.find("button, a").removeClass("active"), s.addClass("active"), r.isotope({
                filter: o
            })
        }), r.each(function() {
            e(".gallery-filter-area .popup-thumb").magnificPopup({
                type: "image",
                mainClass: "mfp-zoom-in",
                gallery: {
                    enabled: !0
                },
                zoom: {
                    enabled: !0,
                    duration: 300,
                    opener: function(e) {
                        return e.find("img")
                    }
                }
            });
            var s = e(this);
            s.imagesLoaded(function() {
                s.isotope({
                    itemSelector: ".tp-gallery-item",
                    percentPosition: !0,
                    masonry: {
                        columnWidth: ".gallery-sizer"
                    }
                })
            })
        }), e(".video-play-btn").magnificPopup({
            type: "video",
            removalDelay: 260,
            mainClass: "mfp-zoom-in"
        }), e(".count-num").length && e(".count-num").counterUp({
            delay: 10,
            time: 5e3
        });
        var c = e("#body-overlay"),
            p = e("#search-popup");
        e(document).on("click", "#body-overlay", function(e) {
            e.preventDefault(), c.removeClass("active"), p.removeClass("active")
        }), e(document).on("click", ".search", function(e) {
            e.preventDefault(), p.addClass("active"), c.addClass("active")
        });
        var c = e("#body-overlay"),
            $ = e("#signUp-popup");
        e(document).on("click", "#body-overlay", function(e) {
            e.preventDefault(), c.removeClass("active"), $.removeClass("active")
        }), e(document).on("click", ".signUp-btn", function(e) {
            e.preventDefault(), $.addClass("active"), c.addClass("active")
        })
    }), e(window).on("load", function() {
        e("#preloader").fadeOut(1e3), e(document).on("click", ".cancel-preloader a", function(s) {
            s.preventDefault(), e("#preloader").fadeOut(2e3)
        })
    }), e(document).on("click", ".back-to-top", function() {
        e("html,body").animate({
            scrollTop: 0
        }, 2e3)
    }), e('.scroll-down a[href^="#"]').length && e('.scroll-down a[href^="#"]').not("#scrollUp").on("click", function(s) {
        s.preventDefault();
        var o = e(this.hash);
        e("html, body").stop().animate({
            scrollTop: o.offset().top
        }, 900, "swing")
    })
}(jQuery);