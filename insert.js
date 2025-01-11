


const mybtn=document.getElementById('save')

mybtn.addEventListener('click',myData)

function myData(){

const name=document.getElementById('name').value
const id=document.getElementById('id').value
const post=document.getElementById('post').value
const salary=document.getElementById('salary').value
const api="http://localhost:3000/employes"

    fetch(api,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 

            "name":name,
            "id":id,
            "post":post,
            "salary":salary
         })
    }).then((res)=>{
        alert("Data save successfully")
    })
}