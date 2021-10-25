const btnsubmit = document.querySelector("#sub_btn")
btnsubmit.addEventListener('click', (e)=>{
    e.preventDefault()
    submitform()
})
function submitform(){
    const myform = document.querySelector("#myform");
    var fname = document.querySelector("#fname").value
    var lname = document.querySelector("#lname").value
    var email = document.querySelector("#email").value
    var msg = document.querySelector("#msg").value

    if (fname == "" || lname == "" || email == "" || msg == "") {
        Swal.fire({
            title: 'Error',
            icon: 'error',
            text: 'All fields are required!',
            showClass: {
              popup: 'animate__animated animate__bounceInRight'
            },
            hideClass: {
              popup: 'animate__animated animate__bounceOutLeft'
            }
          })
    }
    else{
        myform.submit()
    }
}