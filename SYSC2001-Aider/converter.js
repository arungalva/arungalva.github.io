function number(){
	this.bin2B4 = function(num)
	{
	    return parseInt(num.toString(),2).toString(4);
	};
	
	this.bin2Oct = function(num)
	{
	    return parseInt(num.toString(),2).toString(8);
	};
	
	this.bin2Deci = function(num)
	{
	    return parseInt(num.toString(),2).toString(10);			    	
	};
	
	this.bin2Hex = function(num)
	{
		return parseInt(num.toString(),2).toString(16);
	}
	
	this.b42Bin = function(num)
	{
	    return parseInt(num.toString(),4).toString(2);
	};
	
	this.b42Oct = function(num)
	{
	    return parseInt(num.toString(),4).toString(8);
	};
	
	this.b42Hex = function(num)
	{
	    return parseInt(num.toString(),4).toString(16);
	};
	
	this.b42Dexi = function(num)
	{
	    return parseInt(num.toString(),4).toString(10);
	};
	
	this.oct2Deci = function(num)
	{
	    return parseInt(num.toString(),8).toString(10);
	};
	
	this.oct2B4 = function(num)
	{
	    return parseInt(num.toString(),8).toString(4);
	};
	
	this.oct2Hex = function(num)
	{
	    return parseInt(num.toString(),8).toString(16);
	};
	
	this.oct2Bin = function(num)
	{
	    return parseInt(num.toString(),8).toString(2);
	};
	
	this.hex2Bin = function(num)
	{
	    return parseInt(num.toString(),16).toString(2);
	};
	
	this.hex2B4 = function(num)
	{
	    return parseInt(num.toString(),16).toString(4);
	};
	
	this.hex2Oct = function(num)
	{
	    return parseInt(num.toString(),16).toString(8);
	};
	
	this.hex2Deci = function(num)
	{
	    return parseInt(num.toString(),16).toString(10);
	};
	
	
};
	
	var num = new number();

function print(input)
{
	document.write(input);

};

//How to use these functions
//num.bin2Hex('1011011101011101'); returns the Hex representation of the binary number in the paramater
