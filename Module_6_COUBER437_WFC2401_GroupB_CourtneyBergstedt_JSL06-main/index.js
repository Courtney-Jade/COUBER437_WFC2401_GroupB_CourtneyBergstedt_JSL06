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

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
