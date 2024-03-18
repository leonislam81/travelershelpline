function EmailValdi(e) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e) ? "Yes" : "No"
}

function newsletter() {
    var e = $("#newsletter_email").val(),
        t = EmailValdi(e);
    if (e.length < 5 || "No" == t) return $("#msg_newsletter").html("<span style='color:red;'>Enter valid Email id</span>"), setTimeout(function() {
        $("#msg_newsletter").empty()
    }, 2e3), !1;
    $.ajax({
        url: "/newsletter.php?email=" + e,
        method: "GET",
        dataType: "html",
        success: function(e) {
            1 == e ? ($("#msg_newsletter").html("<span style='color:green;'>Subscription for newsletter succesfully</span>"), $("#newsletter_email").val(""), setTimeout(function() {
                $("#msg_newsletter").empty()
            }, 2e3)) : 2 == e ? ($("#msg_newsletter").html("<span style='color:red;'>You already subscribed</span>"), setTimeout(function() {
                $("#msg_newsletter").empty()
            }, 2e3)) : ($("#msg_newsletter").html("<span style='color:red;'>Try again after some time</span>"), setTimeout(function() {
                $("#msg_newsletter").empty()
            }, 2e3))
        }
    })
}
$("#contact").submit(function(e) {
    e.preventDefault();
    let t = $(this).serialize();
    $.ajax({
        type: "GET",
        url: "/contact-submit.php",
        data: t,
        success: function(e) {
            "1" == e || 1 == e ? (alert("Thank you. Our team will contact you shortly!"), window.location.href = "/") : $("#contactError").html(e)
        }
    })
});