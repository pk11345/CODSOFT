var st="";
function append(a)
{
    st=st+a;
    document.getElementById("values").value = st;
}
function equal(){
    st = eval(st);
    document.getElementById("values").value = st;
}
function clr(){
    st = "";
     document.getElementById("values").value = st;
    
 }
 function bck(){
    st = st.slice(0, st.length-1)
    document.getElementById("values").value = st;
 }
