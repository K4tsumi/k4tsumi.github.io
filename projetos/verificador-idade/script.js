function verify() {
    var birth = Number(document.getElementById("yearOfBirth").value) //get the year of birth the user gave && converts it in number
    var date = new Date()
    var year = date.getFullYear() //gets the current year
    var result = (year - birth) //the math
    var ageResult = document.getElementById("age") //gets the result div
    var img = document.createElement('img')
    img.setAttribute('id', 'img')
    img.height = '250'

    if (birth.value >= year) { //verify if the box is empty or has too high number
        window.alert("[ERRO] Verifique os dados informados e tente novamente.")
    } else {
        var gender = ``
        if (sex[0].checked) {
            gender = `homem`
            if (result > 0 && result < 10) {
                img.src = `https://images.pexels.com/photos/1535438/pexels-photo-1535438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
            } else if (result >= 10 && result < 20) {
                img.src = `https://images.pexels.com/photos/10885225/pexels-photo-10885225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
            } else if (result >= 20 && result < 40) {
                img.src = `https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
            } else if (result >= 40 && result < 60) {
                img.src = `https://images.pexels.com/photos/7752850/pexels-photo-7752850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
            } else if (result >= 60 && result < 123) { //thats the limit!!!
                img.src = `https://images.pexels.com/photos/11579595/pexels-photo-11579595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
            } else {
                img.src = `https://images.pexels.com/photos/11061245/pexels-photo-11061245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
            }
        } else if (sex[1].checked) {
            gender = `mulher`
            if (result > 0 && result < 10) {
                img.src = `https://images.pexels.com/photos/2276589/pexels-photo-2276589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
            } else if (result >= 10 && result < 20) {
                img.src = `https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
            } else if (result >= 20 && result < 40) {
                img.src = `https://images.pexels.com/photos/3021538/pexels-photo-3021538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
            } else if (result >= 40 && result < 60) {
                img.src = `https://images.pexels.com/photos/7752791/pexels-photo-7752791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
            } else if (result >= 60 && result < 123) { //thats the limit!!!
                img.src = `https://images.pexels.com/photos/9639666/pexels-photo-9639666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
            } else {
                img.src = `https://images.pexels.com/photos/11061245/pexels-photo-11061245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
            }
        }
        ageResult.innerHTML = `Você é ${gender} e tem <strong>${result}</strong> anos.`
        ageResult.appendChild(img)
    }
}