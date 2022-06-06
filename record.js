// fill in javascript code here
document.querySelector("form").addEventListener("submit",myfunction)


function myfunction(event){
    event.preventDefault();
    var nam = document.querySelector("#name").value
    var employe =document.querySelector("#employeeID").value
    var department = document.querySelector("#department").value
    var experience = document.querySelector("#exp").value
    var eml = document.querySelector("#email").value
    var number = document.querySelector("#mbl").value

    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText=nam

    var td2 = document.createElement("td")
    td2.innerText=employe

    var td3 = document.createElement("td")
    td3.innerText=department

    var td4 = document.createElement("td")
    td4.innerText = experience

    var td5 = document.createElement("td")
    td5.innerText=eml

    var td6 = document.createElement("td")
    td6.innerText=number

    var td7 = document.createElement("td");
     if(Number(experience)>5){
         td7.innerText="Senior"
     }
     else if((Number(experience)<=5) && (Number(experience)>=2)){
        td7.innerText="Junior"
     }
     else{
        td7.innerText="Fresher"
     }
      var td8 =document.createElement("td")
     td8.innerText="Delete"
     td8.style.backgroundColor = "red"
     td8.style.color = " white"
     td8 .addEventListener("click",deletefunction)
    

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    document.querySelector("tbody").append(tr)
}

function deletefunction(event){
    event.target.parentNode.remove() 
}

function roleof(){
    addtxt.value
}
