
const show=document.getElementById('show')
const btn=document.getElementById('search')

btn.addEventListener('click',mySearch)

function mySearch(){
     
    const roll=document.getElementById('idd').value
   
    const api=`http://localhost:3000/employes/?id=${roll}`

    fetch(api).then((res)=>{
         return res.json()
         
    })
     .then((data)=>{
        let table=`<table border=1>
        <tr>
                   <th>Name</th>
                   <th>id</th>
                   <th>post</th>
                   <th>salary</th>
                   
        
        </tr> 
       `
        data.map((e)=>{
              table+=`<tr>
                    <td>${e.name}</td>
                    <td>${e.id}</td>
                    <td>${e.post}</td>
                    <td>${e.salary}</td>
                
              
              </tr> `;
            
        })
        table+='</table>'
        show.innerHTML=table
     })
}
