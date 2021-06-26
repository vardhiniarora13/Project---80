var Name_Guest_Array=[];
function Submit() {
    var guest_name = document.getElementById("Enter Name").value;
    Name_Guest_Array.push(guest_name);
    document.getElementById("display_name").innerHTML = Name_Guest_Array;
    console.log(Name_Guest_Array);
    var length_array = Name_Guest_Array.length;
    console.log(length_array);
}
function Show_list() {
    var i= Name_Guest_Array.join("<br>");
    console.log(Name_Guest_Array);
    document.getElementById("Show_names").innerHTML= i.toString();
}
function sorting() {
    Name_Guest_Array.sort();
    var i = Name_Guest_Array.join("<br>");
    console.log(Name_Guest_Array);
    document.getElementById("Sorted_names").innerHTML = i.toString();
}
function Search() {
    var s = document.getElementById("s1").value;
    var found = 0;
    for(j=0; j<names_people_length; j++)
    {
        if(s==names_people_length[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found"+found+" time/s";
    console.log(" found name "+found+" time/s");
}