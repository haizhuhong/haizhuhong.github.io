$('form.contactForm').on('submit',function(e){
    //optional validation code here

    e.preventDefault();
  
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwYACJ3parvWi47Klx8RN6pbSW23mGrk-YAH4f7uDd-uKNMc8vhNDFjkvjw7d84Oks/exec",
        type: "POST",
        dataType: "json",
        data: $("form.contactForm").serialize(),
        success: function(response) {
            
            if(response.result == "success") {
                $('form.contactForm')[0].reset();
                alert('Thank you for contacting us.');
                return true;
            }
            else {
                alert("Something went wrong. Please try again.")
            }
        },
        error: function() {
            
            alert("Something went wrong. Please try again.")
        }
    })
});