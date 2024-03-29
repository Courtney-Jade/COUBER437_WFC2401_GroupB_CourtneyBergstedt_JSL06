// Menu data
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

function displayMenuItems(menu) {
    const menuContainer = document.getElementById("menu");
    for (const [category, items] of Object.entries(menu)) {
        const categroyHeading = document.createElement("h3");
        categoryHeading.textContent = category;
        menuContainer.appendChild(categoryHeading);

        const itemList = document.createElement("ul");
        items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            listItem.addEventListener("click", () => addToOrder(item));
            itemList.appendChild(listItem);
        });
        menuContainer.appendChild(itemList);
    }
}

function addToOrder(itemName) {
    const orderItemsList = document.getElementById("order-items");
    const orderTotalElem = document.getElementById("order-total");

    const listItem = document.createElement("li");
    listItem.textContent = itemName;
    orderItemsList.appendChild(listItem);

    const currentTotal = parseFloat(orderTotalElem.textContent);
    const itemPrice = 60; 
    const newTotal = currentTotal + itemPrice;
    orderTotalElem.textContent = newTotal.toFixed(2);
}

function initMenuSystem() {
    displayMenuItems(menu);
}

initMenuSystem(menu);
