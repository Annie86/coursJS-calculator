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
				$(that.field).val("");
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