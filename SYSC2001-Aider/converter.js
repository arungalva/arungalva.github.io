function binary(num){
			    this.value = num;

			    this.toBaseFour = function()
			    {
			    	console.log(parseInt(this.value,2).toString(4));
			    };

			    this.toOct = function()
			    {
			    	console.log(parseInt(this.value,2).toString(8))
			    };

			    this.toDecimal = function()
			    {
			    	console.log(parseInt(this.value,2).toString(10));			    	
			    };

			    this.toHex = function()
			    {
			    	console.log(parseInt(this.value,2).toString(16));	
			    };
			};

			function binaryToDeci(binaryNumber)
			{
				var binaryNum = new binary(binaryNumber);
				binaryNum.toDecimal();
			}

			function binaryToHex(binaryNumber)
			{
				var binaryNum = new binary(binaryNumber);
				binaryNum.toHex();
			}

			function binaryToOct(binaryNumber)
			{
				var binaryNum = new binary(binaryNumber);
				binaryNum.toOct();
			}

			function binaryToBaseFour(binaryNumber)
			{
				var binaryNum = new binary(binaryNumber);
				binaryNum.toBaseFour();
			}