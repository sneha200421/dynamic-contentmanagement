const itemNameInput = document.getElementById("item-name");
const itemQuantityInput = document.getElementById("item-quantity");
const addItemButton = document.getElementById("add-item");
const shoppingList = document.getElementById("shopping-list");

function addItem() {
    const itemName = itemNameInput.value.trim();
    const itemQuantity = itemQuantityInput.value.trim();

    if (itemName === "" || itemQuantity === "") {
        alert("Please enter both item name and quantity!");
        return;
    }

    const listItem = document.createElement("li");
    listItem.className = "shopping-list-item";

    const itemText = document.createElement("span");
    itemText.textContent = `${itemName} (x${itemQuantity})`;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editItem(listItem);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeItem(listItem);

    listItem.appendChild(itemText);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);

    shoppingList.appendChild(listItem);

    itemNameInput.value = "";
    itemQuantityInput.value = "";
}

function editItem(listItem) {
    const itemText = listItem.querySelector("span");
    const [name, quantity] = itemText.textContent.split(" (x");
    const newName = prompt("Edit item name:", name);
    const newQuantity = prompt("Edit item quantity:", quantity.slice(0, -1));

    if (newName && newQuantity) {
        itemText.textContent = `${newName} (x${newQuantity})`;
    }
}
function removeItem(listItem) {
    shoppingList.removeChild(listItem);
}
addItemButton.addEventListener("click", addItem);
