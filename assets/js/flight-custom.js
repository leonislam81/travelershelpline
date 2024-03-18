if ($('input[name="ttype"]:checked').val() == 'One') {
  document.getElementById('datepicker2').disabled = true;
  //$('#datepicker2').datepicker('disable');
  var a = document.getElementById('datepicker2');
  a.removeAttribute('required');
  a.value = '';
  $('#rdat').val('');
  $('.returnclass').addClass('returndate');
  $('.departclass').addClass('departdate');
}

//   rturncls returnclass
function show_date(data) {
  //$("#flightType").val(data);
  if (data == 'One') {
    document.getElementById('datepicker2').disabled = true;
    var a = document.getElementById('datepicker2');
    a.removeAttribute('required');
    a.value = '';
    $('#rdat').val('');
    $('.returnclass').addClass('returndate');
    $('.departclass').addClass('departdate');
  } else if (data == 'Round') {
    document.getElementById('datepicker2').disabled = false;
    var b = document.getElementById('datepicker2');
    b.setAttribute('required', true);

    //var currentDate = new Date($('#datepicker').val());
    // currentDate.setDate(currentDate.getDate()+1);
    // var currentDate = new Date(new Date($('#datepicker').val()).getTime()+(1*24*60*60*1000))
    b.value = $('#datepicker').val();
    $('.returnclass').removeClass('returndate');
    $('.departclass').removeClass('departdate');
  }
}

$(document).ready(function () {
  $('#btm_clk').click(function () {
    $('.psg_dls').toggle(1e3);
  }),
    $('.btn_done').click(function () {
      var e = all_pesenger(),
        t = $('#ct').val();
      //   "Y" == t && (t = "Economy"), "W" == t && (t = "Premium Economy"), "C" == t && (t = "Business Class"), "F" == t && (t = "First Class"), $("#btm_clk").val("Passengers " + e + "," + t), $(".psg_dls").hide(1e3);
    });
});

function addPassenger(id) {
  var AdultsRT = $('#AdultsRT').val();
  var ChildrenRT = $('#ChildrenRT').val();
  var InfantsRT = $('#InfantsRT').val();

  var total = +AdultsRT + +ChildrenRT + +InfantsRT;

  if (total < 9) {
    if (id == 'InfantsRT' && InfantsRT < AdultsRT) {
      $('#InfantsRT').val(+InfantsRT + 1);
    }

    if (id == 'AdultsRT') {
      $('#AdultsRT').val(+AdultsRT + 1);
    }
    if (id == 'ChildrenRT') {
      $('#ChildrenRT').val(+ChildrenRT + 1);
    }
  } else {
    return false;
  }
}

function removePassenger(id) {
  var AdultsRT = $('#AdultsRT').val();
  var ChildrenRT = $('#ChildrenRT').val();
  var InfantsRT = $('#InfantsRT').val();

  var total = +AdultsRT + +ChildrenRT + +InfantsRT;

  var infantvalue = $('#' + id).val();
  if (id == 'AdultsRT' && AdultsRT > 1) {
    $('#' + id).val(infantvalue - 1);
  }

  if (id != 'AdultsRT') {
    if (infantvalue > 0) {
      $('#' + id).val(infantvalue - 1);
    }
  }
}

function all_pesenger() {
  var infow = $('#InfantsRT').val();
  var childow = $('#ChildrenRT').val();
  var adultow = $('#AdultsRT').val();
  if (adultow == 0) {
    $('#AdultsRT').val(1);
  }
  var total = +infow + +childow + +adultow;
  if (total > 9) {
  }
  $('#btm_clk').val(
    'Passengers ' + total + ',' + $('#ct option:selected').text()
  );
  $('.psg_dls').hide();
}

jQuery(function ($) {
  var arr = [];
  $.getJSON(baseurl + 'airport.json', function (data) {
    $.each(data, function (key, value) {
      var codes = value.substring(0, 3);
      if ($.inArray(value, arr) === -1) {
        arr.push(value);
      }
    });
  });

  $('#location').autocomplete({
    source: function (request, response) {
      var stringLength = $.ui.autocomplete.escapeRegex(request.term).length;
      var matcher = new RegExp(
        '^' + $.ui.autocomplete.escapeRegex(request.term),
        'i'
      );
      var matcher2 = new RegExp(
        $.ui.autocomplete.escapeRegex(request.term) + '+',
        'i'
      );
      var isData = 1;

      var item_arr = arr.slice(0, 10);
      response(
        $.grep(arr, function (item) {
          if (stringLength <= 3) {
            if (matcher.test(item)) {
              isData = 22;
            }
            return matcher.test(item);
          } else {
            if (matcher2.test(item)) {
              isData = 22;
            }
            return matcher2.test(item);
          }
        })
      );

      if (stringLength == 3 && isData == 1) {
        response(
          $.grep(arr, function (item) {
            return matcher2.test(item);
          })
        );
      }
    },
    minLength: 1,
    change: function (event, ui) {
      if (ui.item === null) {
        $(this).val('');
        $('#location').val('');
      }
    },
    select: function (event, ui) {
      // console.log(ui.item.value);

      $('.shortfrom').val(ui.item.value.slice(0, 3));
      $('.fullfrom').val(ui.item.value.slice(4));

      $('.fromshort').html(ui.item.value.slice(0, 3));
      $('.fromfull').html(ui.item.value.slice(4));
      setTimeout(function () {
        $('#location2').focus();
      }, 1);
    },
  });

  $('#location2').autocomplete({
    source: function (request, response) {
      var stringLength = $.ui.autocomplete.escapeRegex(request.term).length;
      var matcher = new RegExp(
        '^' + $.ui.autocomplete.escapeRegex(request.term),
        'i'
      );
      var matcher2 = new RegExp(
        $.ui.autocomplete.escapeRegex(request.term) + '+',
        'i'
      );
      var isData = 1;
      response(
        $.grep(arr, function (item) {
          if (stringLength <= 3) {
            if (matcher.test(item)) {
              isData = 22;
            }
            return matcher.test(item);
          } else {
            if (matcher2.test(item)) {
              isData = 22;
            }
            return matcher2.test(item);
          }
        })
      );

      if (stringLength == 3 && isData == 1) {
        response(
          $.grep(arr, function (item) {
            return matcher2.test(item);
          })
        );
      }
    },
    minLength: 1,
    change: function (event, ui) {
      if (ui.item === null) {
        $(this).val('');
        $('#location2').val('');
      }
    },
    select: function (event, ui) {
      $('.shortto').val(ui.item.value.slice(0, 3));
      $('.fullto').val(ui.item.value.slice(4));
      $('.toshort').html(ui.item.value.slice(0, 3));
      $('.tofull').html(ui.item.value.slice(4));
      setTimeout(function () {
        $('#datepicker').focus();
      }, 1);
    },
  });
});

function Resolution() {
  if (window.innerWidth < 780) {
    return 1;
  } else {
    return 2;
  }
}
jQuery(function ($) {
  $('#datepicker').datepicker({
    minDate: 'D',
    maxDate: '+11M',
    dateFormat: 'dd-M-yy-DD',
    // defaultDate: "+1w",
    numberOfMonths: Resolution(),
    onClose: function (selectedDate) {
      var counter = $('#multicity_div_input').val();

      if (selectedDate) {
        var s = selectedDate.split('-');
        if (s[3] == undefined) {
          var selectedDate = selectedDate;
          return false;
        } else {
          if ($('#flightType').val() != 'oneway') {
            $('#datepicker2').datepicker('enable');
          }
          var selectedDate = s[0] + '-' + s[1] + '-' + s[2] + '-' + s[3];
        }
        var depdate = s[0] + ' ' + s[1] + ' ' + s[2];
        $('#depDt').val(depdate);
        // var d_dat = s[0]+ '-' + s[1] + '-' + s[2];
        var d_dat = depdate;
        $('#datepicker').val(d_dat);
        $('.mydate').text(s[0]);
        $('.d1-name').text(s[3]);
        $('.month-year').text(s[1] + ' ' + s[2]);
        $('#datepicker_label').html(s[1] + '-' + s[3]);

        var sd = s[0] + '-' + s[1] + '-' + s[2];
        var actualDate = new Date(sd);
        var chngDate = new Date(
          actualDate.getFullYear(),
          actualDate.getMonth(),
          actualDate.getDate() + 1
        );

        $('#datepicker2').datepicker('option', 'minDate', chngDate);
        //$("#datepicker2").select();
      } else {
        var nextDay1 = new Date();
        nextDay1.setDate(nextDay1.getDate());
        var dep_Date = moment(nextDay1, 'DD MM YYYY').format('DD MMM YYYY');
        var s = dep_Date.split(' ');
        var depdate = s[0] + ' ' + s[1] + ' ' + s[2];
        $('#depDt').val(depdate);
        // var d_dat = s[0]+ '-' + s[1] + '-' + s[2];
        // alert(depdate);
        var d_dat = depdate;
        $('#datepicker').val(d_dat);
        $('.mydate').text(s[0]);
        $('.d1-name').text(s[3]);

        // $('.departing').val(d_dat);
        $('.month-year').text(s[1] + ' ' + s[2]);
        $('#datepicker_label').html(s[1] + '-' + s[3]);
        $('#datepicker2').datepicker('option', 'minDate', selectedDate);
      }

      if ($('input[name="ttype"]:checked').val() == 'One') {
        document.getElementById('datepicker2').disabled = true;
        //$('#datepicker2').datepicker('disable');
        var a = document.getElementById('datepicker2');
        a.removeAttribute('required');
        a.value = '';
        $('#rdat').val('');
      } else {
        setTimeout(function () {
          $('#datepicker2').focus();
        }, 1);
      }

      return false;
    },
  });
});

jQuery(function ($) {
  $('#datepicker2').datepicker({
    minDate: 'D',
    maxDate: '+11M',
    dateFormat: 'dd-M-yy-DD',
    numberOfMonths: Resolution(),
    onClose: function (selectedDate) {
      if (selectedDate) {
        //  var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        if (selectedDate.indexOf('-') > -1) {
          var s = selectedDate.split('-');
        } else {
          var s = selectedDate.split(' ');
        }
        var depdate = s[0] + ' ' + s[1] + ' ' + s[2];
        $('#retDt').val(depdate);
        //var d_dat = s[0]+ '-' + s[1] + '-' + s[2];
        var d_dat = depdate;
        $('.mydate1').text(s[0]);
        $('.d2-name').text(s[3]);
        $('.month-year1').text(s[1] + ' ' + s[2]);
        $('#datepicker2').val(d_dat);
        $('#datepicker2_label').html(s[1] + '-' + s[3]);
      } else {
        if ($('#depDt').val() != '') {
          var dep_Date = $('#depDt').val();
          var s = dep_Date.split(' ');
        } else {
          var nextDay1 = new Date();
          nextDay1.setDate(nextDay1.getDate() + 1);
          var dep_Date = moment(nextDay1, 'DD MM YYYY').format('DD MMM YYYY');
          var s = dep_Date.split(' ');
        }
        var nextDay = new Date(dep_Date);
        nextDay.setDate(nextDay.getDate() + 1);
        //   var depdate = moment(nextDay,'DD MM YYYY').format('DD-MMM-YYYY');
        var depdate = moment(nextDay, 'DD MM YYYY').format('DD MMM YYYY');
        //var day = +s[0] + +1;
        //var depdate = day + ' ' + s[1] + ' ' + s[2];
        $('#retDt').val(depdate);
        var d_dat = depdate; //day + ' ' + s[1] + ' ' + s[2];
        $('.mydate1').text(s[0]);
        $('.d2-name').text(s[3]);
        $('.month-year1').text(s[1] + ' ' + s[2]);
        $('#datepicker2').val(d_dat);
        $('#datepicker2_label').html(s[1] + '-' + s[3]);
      }
      return false;
    },
  });
});

$(document).ready(function () {
  $('.fr-input input').blur(function () {
    $(this).addClass('input-address'),
      $(this).siblings('.pl').removeClass('short-code'),
      $(this).siblings('.pl').addClass('z-ind');
  });
  $('.pl').click(function () {
    $(this).siblings('.ui-autocomplete-input').removeClass('input-address'),
      $(this).addClass('short-code'),
      $(this).removeClass('z-ind'),
      $(this).siblings('input[type=text]').val(''),
      $(this).siblings('input[type=text]').focus(),
      $(this).children('.gl').text(''),
      $(this).children('.tl').text('');
  });
});
