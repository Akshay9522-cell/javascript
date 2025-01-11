const mybtn=document.getElementById('btn')

const h=document.getElementById('show')

mybtn.addEventListener('click',myShow)

async function myShow(){

    let response= await fetch("http://localhost:3000/employes")
    let mydata= await response.json()

    let table=`<table>
              <tr>
              <th>name</th>
              <th>id</th>
              <th>post</th>
              <th>salary</th>
              
              </tr>   
    
    `
    mydata.map((e)=>{
        table+=`<tr>
                 <td>${e.name}</td>        
                 <td>${e.id}</td>        
                 <td>${e.post}</td>        
                 <td>${e.salary}</td>        
        
        </tr>`
    })
    table+="</table>"
    h.innerHTML=table
}