(()=>{
  ajax({
    type:"get",
    url:"head.html"
  }).then(html=>{

    document.getElementById("header").innerHTML=html;

    $('#header').on('click','#header #back',function(){
       window.history.back(-1);
    })
  })
})();



