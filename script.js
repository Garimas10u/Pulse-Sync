var arr=[
    {dp: "https://plus.unsplash.com/premium_photo-1664366737698-3a98169201c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1628015081036-0747ec8f077a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp: "https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", 
    story:"https://images.unsplash.com/photo-1624789389787-91e252ff8dac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
    {dp: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1633279309534-f761427548b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
    {dp: "https://images.unsplash.com/photo-1586351012965-861624544334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://media.istockphoto.com/id/923370822/photo/espresso-machine.jpg?s=612x612&w=0&k=20&c=2UomaIgsloq131KlAa3M4mYWLa3RyCeEN3AkCOGpPjM="},
    {dp: "https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1628015081036-0747ec8f077a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"}
]

var stories = document.querySelector("#stories")
var clutter = ""
arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
    <img id="${idx}"src="${elem.dp}" alt="" >
</div>`
})

stories.innerHTML = clutter;
stories.addEventListener("click", function(dets){
    document.querySelector("#fullscreen").style.display ="block";
    document.querySelector("#container").style.display ="none";
    document.querySelector("#container2").style.display ="none";

    document.querySelector("#fullscreen").style.backgroundImage=`url(${arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector("#fullscreen").style.display = "none"
        document.querySelector("#container").style.display ="block";
        document.querySelector("#container2").style.display ="block";
    },1000)
});

var con= document.querySelector("#container");
var love = document.querySelector("i");

con.addEventListener("dblclick", function(){
    love.style.transform= "translate(-50%,-50%) scale(1)";
    love.style.opacity=0.98

    setTimeout(function(){
        love.style.opacity= 0;
       },1000);
    setTimeout(function(){
        love.style.transform= "translate(-50%,-50%) scale(0)";
    },2000);
})

