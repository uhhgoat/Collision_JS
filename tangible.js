// JavaScript Document
function Tangible(x, y, w, h, minX, minY, maxX, maxY)
{
	this.xCoord = x;
	this.yCoord = y;
	this.width = w;
	this.height = h;
	
	this.minXCoord = minX;
	this.minYCoord = minY;
	this.maxXCoord = maxX;
	this.maxYCoord = maxY;
	
	this.getRight = function()		{return this.xCoord + this.width;}
	this.getBottom = function()		{return this.yCoord + this.height;}

	this.move = function(dx, dy)
	{
		if (this.xCoord + dx > this.minXCoord && 
			this.getRight() + dx < this.maxXCoord && 
			this.yCoord + dy > this.minYCoord && 
			this.getBottom() + dy < this.maxYCoord)
		{
			this.xCoord += dx;
			this.yCoord += dy;
		}
	}
	
	this.hasCollision = function(otherTangible)
	{
		if (this.getRight() < otherTangible.xCoord ||
			this.xCoord > otherTangible.getRight() ||
			this.getBottom() < otherTangible.yCoord ||
			this.yCoord > otherTangible.getBottom())
		{
			return false;
		}

		return true;
	}
}
