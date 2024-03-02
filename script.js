const inputbox = document.getElementById('input-box');
const listcontain = document.getElementById('listcontain');

function addtask()
{
    if(inputbox.value==='')
    {
        alert(`You must write somthing`);
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontain.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7"; 
        li.appendChild(span);
    }
    inputbox.value="";
}
listcontain.addEventListener("click",function(e){
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
    }
}
},false);