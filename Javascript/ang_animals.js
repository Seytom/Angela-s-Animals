function expand(menu)
{
	var td = menu;
	var d = td.getElementsByTagName("div").item(0);
	console.log("var d: ");
	console.log(d);
	td.className="menuHover";
	d.className = "menuHover";
}

function collapse(menu)
{
	var td = menu;
	var d = td.getElementsByTagName("div").item(0);
	
	td.className="menuNormal";
	d.className = "menuNormal";
}