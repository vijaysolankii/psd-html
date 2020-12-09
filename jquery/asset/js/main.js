// Task-1 Image Upload Preview Function
function fileValidation() {
    var fileInput = document.getElementById("avtar");
    var filepath = fileInput.value;
    var allowed_ext = /(\.jpeg|\.jpg|\.png)$/i;

    if (!allowed_ext.exec(filepath)) {
        // alert('Please upload file having  jpeg,jpg,png extension');
        $("#p4").text('Please upload file having  jpeg,jpg,png extension');
        $("#avatar").focus();
        fileInput.value = "";
        return false;
    } else {
        // Image Preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("p4").innerHTML = '<img src="' + e.target.result + '" />'
            }
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}

// Task-1 JS Validation
$(document).ready(function () {
    $("#submit").click(function () {

        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var address = $("#address").val();

        if (fname.length == "") {
            $("#p1").text("Please Enter your Name");
            return false;
        } else if ($.isNumeric(fname)) {
            $("#p1").text("Please enter only alphabet");
            return false;
        } else if (fname.length <= 2) {
            $("#p1").text("Name can't be smaller then 2 Digits");
            $("#fname").focus();
            return false;
        }

        if (lname.length == "") {
            $("#p2").text("Please Enter your Name");
            return false;
        } else if ($.isNumeric(lname)) {
            $("#p2").text("please enter only alphabet");
            return false;
        } else if (lname.length <= 2) {
            $("#p2").text("name can't be smaller then 2 Digits");
            $("#lname").focus();
            return false;
        }

        if (address.length == "") {
            $("#p3").text("address can't be blank")
            $("#address").focus();
            return false;
        } else if (address.length <= 2) {
            $("#p3").text("address can't be smaller then 2 alphabets");
            $("#address").focus();
            return false;
        } else if (address.length > 150) {
            $("#p3").text("address is too long")
            $("#address").focus();
            return false;
        } else if (address.length <= 10) {
            $("#p3").text("address is too short")
            $("#address").focus();
            return false;
        }

        var x = $("p4").show();
        $('#avatar').show().focus().click().hide();
        $('input[type="file"]').change(function () {

            var val = $('this').val;
            $('.img').append('<img src="' + val + '" />')

        });

        alert(`
            Your FirstName is ${fname},
            Your LastName is ${lname},
            Your address is ${address},
            Your address is ${avtar.valueOf()}, 
        `);
        document.write(`
            Your FirstName is ${fname} <br>
            Your LastName is ${lname} <br>
            Your address is ${address} <br>
            Your address is ${avtar.valueOf()} <br>
            your op is ${x}
        `);
    });
});


// Task-2 Accordion/Collapse Function
document.querySelectorAll(".accordion__button").forEach(btn => {
    btn.addEventListener('click', () => {
        const accordionContentX = btn.nextElementSibling;
        btn.classList.toggle("accordion__button--active");
        if (btn.classList.contains("accordion__button--active")) {
            accordionContentX.style.maxHeight = accordionContentX.scrollHeight + "px";
        } else {
            accordionContentX.style.maxHeight = 0;
        }
    });
});

// Task-2 Accordion Diffrent way Explanation
var data = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < data.length; i++) {
    data[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

