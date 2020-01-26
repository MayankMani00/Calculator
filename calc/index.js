var expression = "";
var firstChar = true;
var symbols = ['+', '-', '*', '/'];

$(".key").click(function(event) {
    $(event.target).addClass('animated pulse faster');
    setTimeout(function(){
        $(event.target).removeClass('animated pulse faster');
    },1000);
    if (expression.length != 0)
        firstChar = false;
    if (firstChar) {
        if ($.isNumeric(event.target.innerHTML)) {
            expression += event.target.innerHTML;
        }
    } else {
        if ($.isNumeric(event.target.innerHTML)) {
            expression += event.target.innerHTML;
        } else {
            if (event.target.innerHTML == '=')
                expression = math.evaluate(expression);
            else if (event.target.innerHTML == 'C') {
                clearExpression();
            } else if ($.isNumeric(expression.slice(-1))) {
                expression += event.target.innerHTML;
            }
        }

    }
    $(".display").text(expression);
});

$(document).keyup(function(event) {
    console.log(event.originalEvent.key);
    if (expression.length != 0)
        firstChar = false;
    if (firstChar) {
        if ($.isNumeric(event.originalEvent.key)) {
            expression += event.originalEvent.key;
        }
    } else {
        if ($.isNumeric(event.originalEvent.key)) {
            expression += event.originalEvent.key;
        } else {
            if (event.originalEvent.key == 'Enter')
                expression = (math.evaluate(expression));
            else if (event.originalEvent.key == 'Backspace')
                clearExpression();
            else if ((event.originalEvent.key == '.') || (event.originalEvent.key == '+') || (event.originalEvent.key == '-') || (event.originalEvent.key == '*') || (event.originalEvent.key == '/'))
                if ($.isNumeric(expression.slice(-1))) {
                    expression += event.originalEvent.key;
                }
        }
    }
    expression = String(expression);
    $(".display").text(expression);
});


function clearExpression() {
    firstChar = true;
    expression = "";
}
