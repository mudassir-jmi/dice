//
//
//
//   function result() {
//   var a = Number(document.getElementById('first').value);
//   var b =Number(document.getElementById('second').value);
//   var p=document.getElementById('operator').value;
//   var r;
//
// switch (p) {
//   case "+":
//   r=a+b;
//   break;
//   case "-":
//   r=a-b;
//   break;
//   case "*":
//   r=a*b;
//   break;
//   case "/":
//   r=a/b;
//
//     break;
//   default:
//
//
//
//      document.getElementById('result').innerHTML="result "+r;
//      }
//
//
// function name() {
//   var n=document.getElementById('name1').value;
//   document.getElementById('result').innerHTML="name "+n;
// }



var today=new Date();

 var dayl=today.getDay();

var dayName="";

switch (dayl) {
  case 0:
    dayName="Sunday";
    break;
    case 1:
      dayName="Monday";
      break;
      case 2:
        dayName="Tuesday";
        break;
        case 3:
          dayName="Wednesday";
          break;
          case 4:
            dayName="Thrusday";
            break;
            case 5:
              dayName="Fridayday";
              break;
              case 6:
                dayName="Saturday";
                break;
  default:

}

  var daten=today.getDate();


   var dateMy =daten+", ";
    dateMy+=dayName;
   $("#dat").html(dateMy);


$("#btn").click(function () {
  start();
});



function start() {
  var r1=Math.floor(Math.random()*6)+1;
  //  document.getElementById("ply1").innerHTML= +r1;

    var r2=Math.floor(Math.random()*6)+1;
  //  document.getElementById("ply2").innerHTML= +r2;




    if (r1===r2) {
      $("#plwin").html("game draw");
    } else if(r1>r2){
      $("#plwin").html("palyer 1 is win");
    }else{
      $("#plwin").html("player 2 is win");
          }

          $("#dice1").attr("src", "imges/dice"+r1+".png");
          $("#dice2").attr("src", "imges/dice" +r2+ ".png");
}
//create date
