function dataUpdate(id)
{

    let rollno=document.getElementById("rno").value;
    let name=document.getElementById("nm").value;
    let city=document.getElementById("ct").value;
    let fees=document.getElementById("fs").value;

    let api=`http://localhost:3000/students/${id}`;
    fetch(api, { 
        method: 'PUT', 
        headers: { 
          'Content-type': 'application/json'
        }, 
        body: JSON.stringify({
            "rollno": rollno,
            "name": name,
            "city": city,
            "fees":fees
        }) 
      }).then((res)=>{
        alert("data updated!!!");
    })
}



function myDel(id)
{
     let api=`http://localhost:3000/students/${id}`;
     fetch(api, {method:'DELETE'}).then((res)=>{
        alert("Record Deleted!!!")
    })
}

async function myEdit(id)
{
    
    let api=`http://localhost:3000/students/${id}`;

    const Obj= await fetch(api);
    //console.log(Obj);
    const MyData= await Obj.json();
   // console.log(MyData);

   document.getElementById("demo1").innerHTML=`
       Edit Rollno <input type="text" value="${MyData.rollno}" id="rno" >
       <br >
        Edit Name<input type="text" value="${MyData.name}" id="nm" >
       <br >
        Edit City <input type="text" value="${MyData.city}" id="ct" >
       <br >
        Edit Fees <input type="text" value="${MyData.fees}" id="fs" >
       <br >
       <button onclick="dataUpdate(${MyData.id})"> Data update</button>

   
   
   `

}





async function dataShow(){
   let api="http://localhost:3000/employes";

   const Obj= await fetch(api);
   console.log(Obj);
   const Data= await Obj.json();
   console.log(Data);
   
   let Table=`<table width="500" border="1" bgcolor="pink">
                <tr bgcolor="orange">
                  <td> Rollno </td>
                   <td> Name </td>
                   <td> City </td>
                   <td> Fees </td> 
                   <td> </td>
                   </tr> `;


        Data.map((key)=>{
             Table+=`<tr>
                        <td> ${key.name} </td>
                          <td> ${key.id} </td>
                            <td> ${key.post} </td>
                              <td> ${key.salary} </td>
                              <td> 
                               
                                 <a href="#" onclick="myDel(${key.id})">
                                   <img src="del.png" width="30" height="30" >
                                  </a>

                                  <a href="#" onclick="myEdit(${key.id})">
                                  <img src="edit.png" width="30" height="30" >
                                </a>
                              
                              </td>
                       </tr>`       
        })

        Table+="</table>";
    
        document.getElementById('show').innerHTML=Table;
}



dataShow();

