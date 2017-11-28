function Calculator()
{
	that = this
	this.field = "div#result"
	this.button = "#calculator .btn"
	this.init = false

	this.run = function()
	{

		$(this.button).click(function(){
			var value = $(this).html();

			if (that.init == false)
			{
				$(that.field).html("");
				that.init = true;
			}
			if (value != "=")
			{
			$(that.field).html($(that.field).html() + value);
			}

			if (value == "c")
			{
			$(that.field).html($(that.field).html(""));
			}


			that.dispatcher(value);
				
		});

		$('body').keypress(function(event) {
				console.log(event.which);
				
		    if (event.which == 48 ) {
		    	$("#result").html(0);
			}
			if (event.which == 49 ) {
		    	$("#result").html(1);
			}
			if (event.which == 50 ) {
		    	$("#result").html(2);
			}
			if (event.which == 51 ) {
		    	$("#result").html(3);
			}
			if (event.which == 52 ) {
		    	$("#result").html(4);
			}
			if (event.which == 53 ) {
		    	$("#result").html(5);
			}
			if (event.which == 54 ) {
		    	$("#result").html(6);
			}
			if (event.which == 55 ) {
		    	$("#result").html(7);
			}
			if (event.which == 56 ) {
		    	$("#result").html(8);
			}
			if (event.which == 57 ) {
		    	$("#result").html(9);
			}
			if (event.which == 13 ) {
		    	$("#result").html()
		    	if (value != "=")
			{
			$(that.field).html($(that.field).html() + value);
			};
			}
			
		});
	}

			

	this.dispatcher = function(value)
	{
		if ($(this.field).html().indexOf("/") != -1)
			this.operation(value, "/")
		if ($(this.field).html().indexOf("*") != -1)
			this.operation(value, "*")
		if ($(this.field).html().indexOf("-") != -1)
			this.operation(value, "-")
		if ($(this.field).html().indexOf("+") != -1)
			this.operation(value, "+")
	}
	this.operation = function(value, symbol)
	{
		var numbers = $(this.field).html().split(symbol),
		result;

		if (symbol == "/")
			result = numbers[0] / numbers[1];
		if (symbol == "*")
			result = numbers[0] * numbers[1];
		if (symbol == "-")
			result = numbers[0] - numbers[1];
		if (symbol == "+")
			result = parseFloat(numbers[0]) + parseFloat(numbers[1]);

			result = Math.round((result) * 100) / 100;

			if (numbers.length > 1)
			{
				if (value == "=")
					$(this.field).html(result);
				else if (numbers.length > 2)
					$(this.field).html(result + symbol);
			}
			
	};
}

 $(document).ready(function() {
        var calc = new Calculator();
        calc.run();
    });