
const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    // e.preventDefault()
    const firstname =form.firstname.value
    const lastname =form.lastname.value
    const email =form.email.value
    window.location.href = "login.html"
    console.log(firstname, lastname,email)
    alert("compleate")
})
