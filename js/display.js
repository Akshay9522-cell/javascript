const head=document.getElementById('demo')

 async function myDisplay(){
    
    const api= "http://localhost:3000/employes"

    let response= await fetch(api)

    let data= await response.json()

    let table=`<table>
               <tr>
               <th>name</th>
               <th>id</th>
               <th>post</th>
               <th>salary</th>
               </tr>`

      data.map((e)=>{
         table+= `<tr>
                <td>${e.name}</td>
                <td>${e.id}</td>
                <td>${e.post}</td>
                <td>${e.salary}</td>
         
         </tr>`
      })
      table+="</table>"
      head.innerHTML=table

}
myDisplay()



