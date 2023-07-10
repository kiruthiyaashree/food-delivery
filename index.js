var btn_open = document.getElementById("open-doc");
var div_blocks = document.getElementsByClassName("container-first");

btn_open.addEventListener("click", function() {
  for (var i = 0; i < div_blocks.length; i++) {
    var div_block = div_blocks[i];
    if (div_block.style.display === "none") {
      div_block.style.display = "flex";
      // div_block.style.flexDirection = "row";
    } else {
      div_block.style.display = "none";
    }
  }
});
var woth_with_qp_btn=document.getElementById("woth_with_qp_btn");
var sec_container=document.getElementsByClassName("container-second");
woth_with_qp_btn.addEventListener("click",function()
{
  for(var i=0;i<sec_container.length;i++)
  {
    var con=sec_container[i];
    if(con.style.display === "none")
    {
      con.style.display="flex";
      con.style.flexDirection="column";
    }
    else{
      con.style.display="none";
    }
  }

});