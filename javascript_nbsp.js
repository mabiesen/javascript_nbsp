//$(document).ready(function(){

  // var DOM_ELEMENTS = ['span','div'];
  // var DOM_CLASSES = [];
  // var DOM_IDS = ['something'];
  // var DOM_OBJECTS = {elements:DOM_ELEMENTS, classes:DOM_CLASSES, ids:DOM_IDS};
  // var WIDOW_GAGGLE = "3"

  function add_nbsp(content, widow_gaggle){
    var mysplit = content.split(" ");
    var myreturn = ""
    if(mysplit.length < widow_gaggle){
      //throw console error;
      console.error("Some content did not receive non-breaking spaces! \n" +
       "Content must meet a length requirement greater than widow number")
      return content;
    }else{
      for(var x = widow_gaggle; x > 0; x--){
        if(x == widow_gaggle){
          myreturn = mysplit[mysplit.length - x];
        }else{
          myreturn = myreturn + "&nbsp;" + mysplit[mysplit.length - x];
        }
        console.log(myreturn);
      }
      mysplit = mysplit.slice(0, mysplit.length - widow_gaggle);
      content = mysplit.join(" ") + " " + myreturn;
      return content;
    }
  }

  function loop_and_add_nbsp(dom_objects, type, widow_gaggle){
    if(dom_objects.length > 0){
      for(var elem in dom_objects){
        var element = dom_objects[elem];
        if(type == "class"){
          element = "." + dom_objects[elem];
        }
        if(type == "ids"){
          element = "#" + dom_objects[elem];
        }
        $.each($(element),function(){
          var mytext = $(this).text();
          $(this).html(add_nbsp(mytext, widow_gaggle));
        });

      }
    }
  }

// This is the main program if params configured within document
// otherwise call with function from on-load (?)
  // for(var key in DOM_OBJECTS){
  //   console.log(key);
  //   loop_and_add_nbsp(DOM_OBJECTS[key], key, WIDOW_GAGGLE);
  // }

  function main_nbsp(dom_elements, dom_classes, dom_ids, widow_gaggle){
    var dom_objects = {elements:dom_elements, classes:dom_classes, ids:dom_ids};
    for(var key in dom_objects){
      console.log(key);
      loop_and_add_nbsp(dom_objects[key], key, widow_gaggle);
    }
  }

//});
