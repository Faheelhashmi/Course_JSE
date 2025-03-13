// breakfast menu
const breakfastMenu=['Pancakes','Eggs','Oatmeal','Fritta'];
const mainCourseMenu=['Steak','Pasta','Burger','Salmon'];
const dessertMenu=['Cake','Ice Cream','Pudding','Fruit Salad'];


const breakfastMenuItemsHTML = breakfastMenu.map(
						(item, index) => `<p>Item ${index + 1}: ${item}</p>`
						).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;


let mainCourseItem = '';
mainCourseMenu.forEach(
			(item, index) => {
					mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
					}
			);
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;


let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
	dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
						}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
















//<!DOCTYPE html>
//<html>
//<head>
//	<title> Restaurant Menu</title>	
//</head>
//
//<body>
//	<h1>Restaurant Menu</h1>
//
//	<h2>Breakfast Menu</h2>
//	<div id="breakfastTotalItems"></div>			
//	<div id="breakfastMenuItems"></div>			

//	<h2>Main Course Menu</h2>
//	<div id="maincourseTotalItems"></div>			
//	<div id="maincourseMenuItems"></div>			
////

//	<h2>Dessert Menu</h2>
//	<div id="dessertTotalItems"></div>			
//	<div id="dessertMenuItems"></div>			
//	<script src="./restaurant_menu.js"></script>
//</body>
//</html>
