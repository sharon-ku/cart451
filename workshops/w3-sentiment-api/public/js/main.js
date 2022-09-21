$(document).ready(go);

function go(){
  console.log("we are ready to go");

  $("#getRes").click(getSentiment);
 
  function getSentiment(){
    let phrase = $("#sentimentSearch").val();
    console.log(phrase);
    let mData={clientPhrase:phrase};
 
    /*** request ***/
    $.ajax({
               type: "POST",
               data: JSON.stringify(mData),
               url:'/getSentiment',
               processData: false,
               contentType: "application/json",
               cache: false,
               timeout: 600000,
               success: function (response) {
               //reponse is a STRING
               console.log("we had success!");
               console.log(response);
              },
              error:function(e){
            console.log(e);
             console.log("error occurred");
           }
         });
 
  } //get sentiment
}
