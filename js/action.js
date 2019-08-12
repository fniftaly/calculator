var num = "";
var num2 = ""
var TEXT = ""
var num_stop = false;
var addNum = false;
var numMlt = false;
var numSub = false;
var numDel = false;
var numPrec = false;
var SUM = 0;

function add(num1, num2){
    var n1 = parseFloat(num1)
    var n2 = parseFloat(num2)
    return n1 + n2;
}

function substract(num1, num2){
    return num1 - num2;
}

function divide(num1, num2){
    if(num2 > 0)
    {
        return num1/num2;
    }
    else{
        return 0;
    }
    
}
function multiply(num1, num2){
    return num1*num2;
}

function percent(num1, num2){
    var n1 = parseFloat(num1)
    var n2 = parseFloat(num2)
    if(n1 != 0)
    {
        return n1/100;

    }else{
        return (n1*n2)/100;
    }
    
}

$(document).ready(function(){
    $('.grid-item').on('click', function(){
        var $this    
        if($(this).hasClass('num')){
            // console.log(num_stop)
            var text = $(this).text();
            if(!num_stop){
                num = num + text;
                $('.div-display').text(num)
            }else{
                num2 = num2 + text;
                $('.div-display').text(num2)
            }
            // console.log("Num" + num, "Num2" + num2, "Sum" + SUM)
        }
        else if(!($(this).hasClass('num')) && $(this).attr('id') == "clr") {
            num = ""
            num_stop = false;
            $('.div-display').text("")
            SUM = 0;
            num2 = ""
        } 
        else if(!($(this).hasClass('num')) && $(this).attr('id') == "add") {
            addNum = true
            num_stop = true;
            numMlt = false;
            $('.div-display').text("")
        }
        else if(!($(this).hasClass('num')) && $(this).attr('id') == "multiplay") {
            console.log("Num" + num, "Num2" + num2, "Sum" + SUM)
             numMlt = true;
             num_stop = true;
             addNum = false
            $('.div-display').text("")
        }
        else if(!($(this).hasClass('num')) && $(this).attr('id') == "substr") {
             numMlt = false;
             num_stop = true;
             addNum = false
             numSub = true;
            $('.div-display').text("")
        }
        else if(!($(this).hasClass('num')) && $(this).attr('id') == "delete") {
             numMlt = false;
             num_stop = true;
             addNum = false
             numSub = false;
             numDel = true;
            $('.div-display').text("")
        }
        else if(!($(this).hasClass('num')) && $(this).attr('id') == "precent") {
            // console.log("Num" + num, "Num2" + num2, "Sum" + SUM)
            if(num != ""){
              var lsum = (SUM == 0)?num:SUM;
              var res = percent(lsum, num2)
              $('.div-display').text(res)
              SUM = res;
            }else{
                $('.div-display').text("")
            }
            numMlt = false;
            num_stop = true;
            addNum = false
            numSub = false;
            numDel = false;
            numPrec = true;      
       }
        else if(!($(this).hasClass('num')) && $(this).attr('id') == "eqv") {
            var res = (SUM == 0)?num:SUM 
           var sum = 0
           if(addNum){      
                sum = add(res, num2)
           }else if(numMlt){
                sum = multiply(res, num2)
           }else if(numSub){
                sum = substract(res, num2)
           }else if(numDel){
                sum = divide(res, num2)
           }else if(numPrec){
                sum = percent(res,num2)
       }
          
           SUM = sum;
           $('.div-display').text(sum)
           console.log(num, num2, SUM)
           num = ""
           num2 = ""
        }  
        
    })
    
});