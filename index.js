// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};
const prices = {
    "Garlic Bread": 34.99,
    "Bruschetta": 28.99,
    "Margherita Pizza": 89.00,
    "Spaghetti Carbonara": 99.99,
    "Tiramisu": 50,
    "Cheesecake": 69.99
}


// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu")
    // Loop through each category and its items in the menu object
    Object.entries(menu).map(([category,items]) => {
        
        // Create an element to represent the category
        const categoryEl = document.createElement("h3")
    
        // Set the text content of the category element to the category name
        categoryEl.textContent=category
        // Append the category element to the menu container
        menuContainer.appendChild(categoryEl)
        // Create an element to represent a list of items
        const itemsList = document.createElement("ul")
        // Append a list of items element to the menu container
        menuContainer.appendChild(itemsList)
        // Loop through the items in the category and create list items
        items.map(item => { 
            // Create a list item element
            const itemEl = document.createElement("li")
            // Set the text content of the list item element to the item name
            itemEl.textContent = item
            // Attach a click event listener to the list item to add it to the order
            itemEl.addEventListener("click", () => {addToOrder(item)})
            // Append the list item to the list of items
            itemsList.appendChild(itemEl)
        })
    })
            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsEl = document.getElementById("order-items")
    const orderTotalEL = document.getElementById("order-total")
    // Create a list item for the order
    const orderItem = document.createElement("li")
    // Set the text content of the list item to the item name
    orderItem.textContent = itemName
    // Append the list item to the order items list
    orderItemsEl.appendChild(orderItem)
    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotalEL.textContent);
    const newTotal= currentTotal + prices[itemName]
    // Update the text content of the order total element with the new total
    orderTotalEL.textContent = `${newTotal.toFixed(2)}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu)
}

// Start the menu system by calling the init function
initMenuSystem(menu);
