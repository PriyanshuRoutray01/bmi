var a=document.querySelector("#submit")
a.addEventListener('click',function(e){
e.preventDefault()
const height=parseFloat(document.getElementById("heightinput").value)
const weight =parseFloat(document.getElementById("weightinput").value) 
const results= document.getElementById("results")

if(height<0 || height === '' || isNaN(height)){
    results.innerHTML="enter a valid height"
}else if(weight<0 || weight===''||isNaN(weight)){
    results.innerHTML="enter a valid weight"
}else{

    const bmi=(weight/((height/100)*(height/100))).toFixed(2)
    if(bmi<18.5){
        results.innerHTML=`your bmi is ${bmi} and you are underweight`
    }
    else if(bmi>18.5 && bmi<25){
        results.innerHTML=`your bmi is ${bmi} and you are normal`
    }else if(bmi>25 && bmi<30){
        results.innerHTML=`your bmi is ${bmi} and you are overweight`
    }else{
        results.innerHTML=`your bmi is ${bmi} and you are obese`
    }

}

})