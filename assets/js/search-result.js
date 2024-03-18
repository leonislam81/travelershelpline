function addDays(e) {
  var t = new Date();
  t.setDate(t.getDate() + e);
  var n = '0' + (t.getMonth() + 1),
    a = '0' + t.getDate();
  n = n.slice(-2);
  var a = (a = a.slice(-2)) + '/' + n + '/' + t.getFullYear();
  return moment(a, 'DD MM YYYY').format('DD MMM YYYY');
}

// function flight_form() {
//     var e = new Date(addDays(0));
//     e = e.getTime();
//     var t = $("#location").val(),
//         n = $("#location2").val(),
//         a = $("#retDt").val(),
//         i = $("#depDt").val(),
//         l = $("#flightType").val(),
//         r = new Date(i);
//     r = r.getTime();
//     var o = new Date(a);
//     if (o = o.getTime(), "" == t) return $("#location").css("box-shadow", "0px 0px 3px red"), !1;
//     if ($("#location").css("box-shadow", "0px 0px 3px green"), "" == n) return $("#location2").css("box-shadow", "0px 0px 3px red"), !1;
//     if ($("#location2").css("box-shadow", "0px 0px 3px green"), "" == i || !moment(i, "DD MMM YYYY", !0).isValid()) return $("#datepicker").css("box-shadow", "0px 0px 3px red"), !1;
//     if (r < e) return $("#datepicker").css("box-shadow", "0px 0px 3px red"), !1;
//     $("#datepicker").css("box-shadow", "0px 0px 3px green");
//     if ("roundtrip" == l) {
//         if ("" == a) return $("#datepicker2").css("box-shadow", "0px 0px 3px red"), !1;
//         if (!moment(a, "DD MMM YYYY", !0).isValid()) return $("#datepicker2").css("box-shadow", "0px 0px 3px red"), !1;
//         if (o < e || r > o) return $("#datepicker2").css("box-shadow", "0px 0px 3px red"), !1;
//         $("#datepicker2").css("box-shadow", "0px 0px 3px green")
//     } else $("#retDt").empty();
//     var d = document.getElementById("location").value,
//         s = d.substring(0, 3);
//     document.getElementById("from_code").value = s;
//     var d = document.getElementById("location2").value,
//         s = d.substring(0, 3);
//     return document.getElementById("to_code").value = s, !0
// }

function display1() {
  var e = document.getElementById('add_input').value;
  (document.getElementById('dynamic-field-' + (+e + 1)).style.display =
    'block'),
    (document.getElementById('add_input').value = +e + 1);
}

function display2() {
  var e = document.getElementById('add_input').value,
    t = e;
  '1' != t &&
    ((document.getElementById('dynamic-field-' + t).style.display = 'none'),
    (document.getElementById('add_input').value = e - 1));
}

function all_pesengerH() {
  for (
    var e = 0, t = 0, n = document.getElementById('add_input').value, a = 0;
    a < n;
    a++
  ) {
    var i = 'hadult_' + (a + 1);
    e += +document.getElementById(i).value;
  }
  for (var a = 0; a < n; a++) {
    var i = 'ChildrenRT_' + (a + 1);
    t += +document.getElementById(i).value;
  }
  document.getElementById('total_hotel_passenger').value =
    n + ' Room ' + e + ' Adult ' + t + ' Child';
}

// function addPassenger(e) {
//     var t = $("#AdultsRT").val(),
//         n = $("#ChildrenRT").val(),
//         a = $("#InfantsRT").val(),
//         i = $("#InfantsRTonSeat").val();
//     if (!(+t + +n + +a + +i < 9)) return !1;
//     "InfantsRT" == e && a < t && $("#InfantsRT").val(+a + 1), "InfantsRTonSeat" == e && i < t && $("#InfantsRTonSeat").val(+i + 1), "AdultsRT" == e && $("#AdultsRT").val(+t + 1), "ChildrenRT" == e && $("#ChildrenRT").val(+n + 1)
// }

// function removePassenger(e) {
//     var t = $("#AdultsRT").val(),
//         n = ($("#ChildrenRT").val(), $("#InfantsRT").val(), $("#InfantsRTonSeat").val(), $("#" + e).val());
//     "AdultsRT" == e && t > 1 && $("#" + e).val(n - 1), "AdultsRT" != e && n > 0 && $("#" + e).val(n - 1)
// }

function QueryStringToJSON(e) {
  var t = e.slice(1).split('&'),
    n = {};
  return (
    t.forEach(function (e) {
      n[(e = e.split('='))[0]] = decodeURIComponent(e[1] || '');
    }),
    JSON.stringify(n)
  );
}

// function storevalue() {
//     if (!flight_form()) return !1;
//     var e = $("#retDt").val(),
//         t = $("#depDt").val().split(" ");
//     if (t = t[0] + "-" + t[1] + "-" + t[2], $("#depDt").val(t), e) {
//         var n = e.split(" ");
//         n = n[0] + "-" + n[1] + "-" + n[2], $("#retDt").val(n)
//     }
//     var a = document.getElementById("location").value,
//         i = a.substring(0, 3);
//     document.getElementById("from_code").value = i;
//     var a = document.getElementById("location2").value,
//         i = a.substring(0, 3);
//     document.getElementById("to_code").value = i;
//     var l = $("#flight_search_form").serialize(),
//         r = QueryStringToJSON(l);
//     r = (r = r.replace("roundtrip", "return")).replace("oneway", "single");
//     var o = btoa(r),
//         d = btoa("search" + Math.random());
//     return window.localStorage.setItem(d, o), window.location.href = "/flight-result.html?q=" + d, !1
// }

// function show_date(e) {
//     if ($("#flightType").val(e), "oneway" == e) {
//         document.getElementById("datepicker2").disabled = !0;
//         var t = document.getElementById("datepicker2");
//         t.removeAttribute("required"), t.value = "", $("#retDt").val("")
//     } else "roundtrip" == e && (document.getElementById("datepicker2").disabled = !1, document.getElementById("datepicker2").setAttribute("required", !0))
// }

function add_rt_passenger() {
  var e = $('#InfantsRT').val(),
    t = $('#ChildrenRT').val(),
    n = $('#AdultsRT').val();
  return +e + +t + +n;
}

// function all_pesenger() {
//     var e = $("#InfantsRT").val(),
//         t = $("#ChildrenRT").val(),
//         n = $("#AdultsRT").val(),
//         a = $("#InfantsRTonSeat").val();
//     return 0 == n && $("#AdultsRT").val(1), $("#flightChildrentotal").val(+t), +e + +t + +n + +a
// }

function Resolution() {
  return window.innerWidth < 780 ? 1 : 2;
}

function add_child1() {
  var e = +document.getElementById('ChildrenRT_1').value + 1;
  if (6 == e) return (document.getElementById('ChildrenRT_1').value = 5), !1;
  e < 6 && (document.getElementById('ChildrenRT_1').value = e),
    (document.getElementById('first_child_' + e).style.display = 'flex');
}

function remove_child1() {
  var e = document.getElementById('ChildrenRT_1').value;
  (document.getElementById('first_child_' + e).style.display = 'none'),
    (document.getElementById('ChildrenRT_1').value = e - 1);
}

function add_child2() {
  var e = +document.getElementById('ChildrenRT_2').value + 1;
  if (6 == e) return (document.getElementById('ChildrenRT_2').value = 5), !1;
  e < 6 && (document.getElementById('ChildrenRT_2').value = e),
    (document.getElementById('second_child_' + e).style.display = 'flex');
}

function remove_child2() {
  var e = document.getElementById('ChildrenRT_2').value;
  (document.getElementById('second_child_' + e).style.display = 'none'),
    (document.getElementById('ChildrenRT_2').value = e - 1);
}

function add_child3() {
  var e = +document.getElementById('ChildrenRT_3').value + 1;
  if (6 == e) return (document.getElementById('ChildrenRT_3').value = 5), !1;
  e < 6 && (document.getElementById('ChildrenRT_3').value = e),
    (document.getElementById('third_child_' + e).style.display = 'flex');
}

function remove_child3() {
  var e = document.getElementById('ChildrenRT_3').value;
  (document.getElementById('third_child_' + e).style.display = 'none'),
    (document.getElementById('ChildrenRT_3').value = e - 1);
}

function add_child4() {
  var e = +document.getElementById('ChildrenRT_4').value + 1;
  if (6 == e) return (document.getElementById('ChildrenRT_4').value = 5), !1;
  e < 6 && (document.getElementById('ChildrenRT_4').value = e),
    (document.getElementById('four_child_' + e).style.display = 'flex');
}

function remove_child4() {
  var e = document.getElementById('ChildrenRT_4').value;
  (document.getElementById('four_child_' + e).style.display = 'none'),
    (document.getElementById('ChildrenRT_4').value = e - 1);
}
// jQuery(function(e) {
//     e("#datepicker").datepicker({
//         minDate: "D",
//         maxDate: "+11M",
//         dateFormat: "dd-M-yy-DD",
//         numberOfMonths: Resolution(),
//         onClose: function(t) {
//             if (t) {
//                 var n = t.split("-");
//                 if (void 0 == n[3]) {
//                     var t = t;
//                     return !1
//                 }
//                 "oneway" != e("#flightType").val() && e("#datepicker2").datepicker("enable");
//                 var t = n[0] + "-" + n[1] + "-" + n[2] + "-" + n[3],
//                     a = n[0] + " " + n[1] + " " + n[2];
//                 e("#depDt").val(a);
//                 var i = a;
//                 e("#datepicker").val(i), e(".mydate").text(n[0]), e(".d1-name").text(n[3]), e(".month-year").text(n[1] + " " + n[2]), e("#datepicker_label").html(n[1] + "-" + n[3]), e("#datepicker2").datepicker("option", "minDate", t)
//             } else {
//                 var l = new Date;
//                 l.setDate(l.getDate());
//                 var n = moment(l, "DD MM YYYY").format("DD MMM YYYY").split(" "),
//                     a = n[0] + " " + n[1] + " " + n[2];
//                 e("#depDt").val(a);
//                 var i = a;
//                 e("#datepicker").val(i), e(".mydate").text(n[0]), e(".d1-name").text(n[3]), e(".month-year").text(n[1] + " " + n[2]), e("#datepicker_label").html(n[1] + "-" + n[3]), e("#datepicker2").datepicker("option", "minDate", t)
//             }
//             return setTimeout(function() {
//                 e("#datepicker2").select()
//             }, 1), !1
//         }
//     })
// }), jQuery(function(e) {
//     e("#datepicker2").datepicker({
//         minDate: "D",
//         maxDate: "+11M",
//         dateFormat: "dd-M-yy-DD",
//         numberOfMonths: Resolution(),
//         onClose: function(t) {
//             if (t) {
//                 if (t.indexOf("-") > -1) var n = t.split("-");
//                 else var n = t.split(" ");
//                 var a = n[0] + " " + n[1] + " " + n[2];
//                 e("#retDt").val(a);
//                 var i = a;
//                 e(".mydate1").text(n[0]), e(".d2-name").text(n[3]), e(".month-year1").text(n[1] + " " + n[2]), e("#datepicker2").val(i), e("#datepicker2_label").html(n[1] + "-" + n[3])
//             } else {
//                 if ("" != e("#depDt").val()) var l = e("#depDt").val(),
//                     n = l.split(" ");
//                 else {
//                     var r = new Date;
//                     r.setDate(r.getDate() + 1);
//                     var l = moment(r, "DD MM YYYY").format("DD MMM YYYY"),
//                         n = l.split(" ")
//                 }
//                 var o = new Date(l);
//                 o.setDate(o.getDate() + 1);
//                 var a = moment(o, "DD MM YYYY").format("DD MMM YYYY");
//                 e("#retDt").val(a);
//                 var i = a;
//                 e(".mydate1").text(n[0]), e(".d2-name").text(n[3]), e(".month-year1").text(n[1] + " " + n[2]), e("#datepicker2").val(i), e("#datepicker2_label").html(n[1] + "-" + n[3])
//             }
//             return !1
//         }
//     })
// }),  jQuery(function(e) {
//     e("#datepicker_car").datepicker({
//         minDate: "D",
//         dateFormat: "M-dd-yy",
//         numberOfMonths: Resolution(),
//         onClose: function(t) {
//             return e("#datepicker_car").val(t), e("#datepicker_car2").datepicker("option", "minDate", t), setTimeout(function() {
//                 e("#datepicker_car2").focus()
//             }, 1), !1
//         }
//     })
// }), jQuery(function(e) {
//     e("#datepicker_car2").datepicker({
//         minDate: "+1D",
//         dateFormat: "M-dd-yy",
//         numberOfMonths: Resolution(),
//         onClose: function(t) {
//             return e("#datepicker_car2").val(t), !1
//         }
//     })
// }), jQuery(function(e) {
//     e("input").focus(function() {
//         e(this).removeAttr("placeholder")
//     })
// }), jQuery(function(e) {
//     var t = [];
//     e.getJSON("airport.json", function(n) {
//         e.each(n, function(n, a) {
//             a.substring(0, 3), -1 === e.inArray(a, t) && t.push(a)
//         })
//     }), e("#location").autocomplete({
//         source: function(n, a) {
//             var i = e.ui.autocomplete.escapeRegex(n.term).length,
//                 l = RegExp("^" + e.ui.autocomplete.escapeRegex(n.term), "i"),
//                 r = RegExp(e.ui.autocomplete.escapeRegex(n.term) + "+", "i"),
//                 o = 1;
//             a(e.grep(t, function(e) {
//                 return i <= 3 ? (l.test(e) && (o = 22), l.test(e)) : (r.test(e) && (o = 22), r.test(e))
//             })), 3 == i && 1 == o && a(e.grep(t, function(e) {
//                 return r.test(e)
//             }))
//         },
//         minLength: 1,
//         change: function(t, n) {
//             null === n.item && (e(this).val(""), e("#location").val(""))
//         },
//         select: function(t, n) {
//             e(".fromshort").html(n.item.value.slice(0, 3)), e(".fromfull").html(n.item.value.slice(4)), setTimeout(function() {
//                 e("#location2").focus()
//             }, 1)
//         }
//     }), e("#pickuploc").autocomplete({
//         source: function(n, a) {
//             var i = e.ui.autocomplete.escapeRegex(n.term).length,
//                 l = RegExp("^" + e.ui.autocomplete.escapeRegex(n.term), "i"),
//                 r = RegExp(e.ui.autocomplete.escapeRegex(n.term) + "+", "i"),
//                 o = 1;
//             a(e.grep(t, function(e) {
//                 return i <= 3 ? (l.test(e) && (o = 22), l.test(e)) : (r.test(e) && (o = 22), r.test(e))
//             })), 3 == i && 1 == o && a(e.grep(t, function(e) {
//                 return r.test(e)
//             }))
//         },
//         minLength: 1,
//         select: function(t, n) {
//             e(".fromshort").html(n.item.value.slice(0, 3)), e(".fromfull").html(n.item.value.slice(4)), setTimeout(function() {
//                 e("#droploc").focus()
//             }, 1)
//         }
//     }), e("#droploc").autocomplete({
//         source: function(n, a) {
//             var i = e.ui.autocomplete.escapeRegex(n.term).length,
//                 l = RegExp("^" + e.ui.autocomplete.escapeRegex(n.term), "i"),
//                 r = RegExp(e.ui.autocomplete.escapeRegex(n.term) + "+", "i"),
//                 o = 1;
//             a(e.grep(t, function(e) {
//                 return i <= 3 ? (l.test(e) && (o = 22), l.test(e)) : (r.test(e) && (o = 22), r.test(e))
//             })), 3 == i && 1 == o && a(e.grep(t, function(e) {
//                 return r.test(e)
//             }))
//         },
//         minLength: 1,
//         select: function(t, n) {
//             e(".toshort").html(n.item.value.slice(0, 3)), e(".tofull").html(n.item.value.slice(4)), setTimeout(function() {
//                 e("#datepicker_car").focus()
//             }, 1)
//         }
//     }), e("#location2").autocomplete({
//         source: function(n, a) {
//             var i = e.ui.autocomplete.escapeRegex(n.term).length,
//                 l = RegExp("^" + e.ui.autocomplete.escapeRegex(n.term), "i"),
//                 r = RegExp(e.ui.autocomplete.escapeRegex(n.term) + "+", "i"),
//                 o = 1;
//             a(e.grep(t, function(e) {
//                 return i <= 3 ? (l.test(e) && (o = 22), l.test(e)) : (r.test(e) && (o = 22), r.test(e))
//             })), 3 == i && 1 == o && a(e.grep(t, function(e) {
//                 return r.test(e)
//             }))
//         },
//         minLength: 1,
//         change: function(t, n) {
//             null === n.item && (e(this).val(""), e("#location2").val(""))
//         },
//         select: function(t, n) {
//             e(".toshort").html(n.item.value.slice(0, 3)), e(".tofull").html(n.item.value.slice(4)), setTimeout(function() {
//                 e("#datepicker").focus()
//             }, 1)
//         }
//     })
// }),
jQuery(function (e) {
  e('.location-hotel').each(function () {
    var t = e(this).attr('id'),
      n = t + '_cleardata';
    e('#' + t)
      .autocomplete({
        minLength: 1,
        select: function (t, a) {
          if (
            (e(this).val(a.item.Destination + '-' + a.item.country),
            e('#hot_desti').val(a.item.cityid),
            e('#hot_cntry_code').val(a.item.countrycode),
            e('#' + n).show(),
            '' != a.item.StateProvinceCode)
          )
            var i = a.item.StateProvinceCode;
          else var i = a.item.Destination;
          return (
            e('.fromshorthotel').html(i),
            e('.fromfullhotel').html(a.item.Destination + '-' + a.item.country),
            console.log(a.item),
            setTimeout(function () {
              e('#datepickerH').focus();
            }, 1),
            !1
          );
        },
        source: function (t, n) {
          e.ajax({
            url: 'get_from_city.php?term=' + t.term,
            method: 'POST',
            data: {
              term: t.term,
            },
            dataType: 'json',
            success: function (e) {
              n(e);
            },
          });
        },
      })
      .autocomplete('instance')._renderItem = function (t, n) {
      return e(
        '<li><div><span style="display:none;">' +
          n.cityid +
          '</span> <span> ' +
          n.Destination +
          '</span>-<span> ' +
          n.country +
          '</span></div></li>'
      ).appendTo(t);
    };
  });
}),
  jQuery(function (e) {
    e('#datepickerH').datepicker({
      minDate: 'D',
      maxDate: '+11M',
      dateFormat: 'dd-mm-yy',
      numberOfMonths: Resolution(),
      onClose: function (t) {
        return (
          e('#depdth').val(t),
          e('#datepickerH').val(t),
          e('#datepickerH2').datepicker('option', 'minDate', t),
          e('#datepickerH2').select(),
          !1
        );
      },
    });
  }),
  jQuery(function (e) {
    e('#datepickerH2').datepicker({
      minDate: '+1D',
      maxDate: '+11M',
      dateFormat: 'dd-mm-yy',
      numberOfMonths: Resolution(),
      onClose: function (t) {
        return e('#retdth').val(t), e('#datepickerH2').val(t), !1;
      },
    });
  }),
  $(document).ready(function () {
    $('#total_hotel_passenger').click(function () {
      $('#psg_dls_hotel').toggle(1e3);
    }),
      $('.btn_doneH').click(function () {
        // var e = all_pesenger();
        // $("#btm_clkH").val("Adults/child " + e), $(".psg_dls").hide(1e3)
      });
  }),
  $(document).on('click', '.number-spinner a', function () {
    var e = $('#AdultsRT').val();
    $('#ChildrenRT').val(), $('#InfantsRT').val();
    var t = add_rt_passenger(),
      n = $(this),
      a = n.closest('.number-spinner').find('input').val().trim(),
      i = 0;
    if ('up' == n.attr('data-dir')) {
      if (t > 8 || a > 8) return !1;
      i = parseInt(a) + 1;
    } else e <= 1 && $('#AdultsRT').val('1'), a > 1 && (i = parseInt(a) - 1);
    n.closest('.number-spinner').find('input').val(i);
  }),
  $(function () {
    var e =
      "<div class='col-sm-12'><div class='flight_type'><div class='form-check-inline'><label class='radio-inline customradio'>Round Trip<input type='radio' checked='checked' onClick='show_date(this.value)' value='roundtrip' name='JType'><span class='checkmark'></span></label><label class='radio-inline customradio'>One Way<input type='radio' onClick='show_date(this.value)' value='oneway' name='JType'><span class='checkmark'></span></label><input type='hidden' id='flightType' value='roundtrip'></div></div></div>";
    window.innerWidth < 1920
      ? ($('#mobileTripTytpe').append(e), $('#from_code').attr('name', 'org'))
      : $('#TripTytpeDiv').append(e);
  }),
  $(document).ready(function () {
    $('.a-label-radio input:radio').click(function () {
      $('.a-label-radio input:radio[name=' + $(this).attr('name') + ']')
        .parent()
        .removeClass('checks'),
        $(this).parent().addClass('checks');
    });
  }),
  $(document).ready(function () {
    $('.fr-input input').blur(function () {
      $(this).addClass('input-address'),
        $(this).siblings('.pl').removeClass('short-code'),
        $(this).siblings('.pl').addClass('z-ind');
    }),
      $('.pl').click(function () {
        $(this).siblings('.ui-autocomplete-input').removeClass('input-address'),
          $(this).addClass('short-code'),
          $(this).removeClass('z-ind'),
          $(this).siblings('input[type=text]').val(''),
          $(this).siblings('input[type=text]').focus(),
          $(this).children('.gl').text(''),
          $(this).children('.tl').text('');
      }),
      $('.flight_type input:radio').click(function () {
        $('input:radio[name=' + $(this).attr('name') + ']')
          .parent()
          .removeClass('checks'),
          $(this).parent().addClass('checks');
      }),
      767 > $(window).width() &&
        ($('.from-a input').attr('placeholder', 'ATL'),
        $('.to-a input').attr('placeholder', 'MIA'));
  }),
  $(document).ready(function () {
    $('.flight_type input:radio').click(function () {
      $('input:radio[name=' + $(this).attr('name') + ']')
        .parent()
        .removeClass('checks'),
        $(this).parent().addClass('checks');
    });
  }),
  $(document).ready(function () {
    $('.one-way-trip').click(function () {
      $('.return-hide-ow').addClass('hide-div'),
        $('.full-width-date').addClass('full-width-div');
    }),
      $('.round.selecotr-item.checks').click(function () {
        $('.return-hide-ow').removeClass('hide-div'),
          $('.full-width-date').removeClass('full-width-div');
      });
  });
