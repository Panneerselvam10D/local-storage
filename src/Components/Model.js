import React from "react";

//code to remove array index from an array of local storage
const RemoveElementByIndex = (index) => {
  // Step 1: Retrieve the array from localStorage
  const storedUserData = localStorage.getItem('userData');
  if (!storedUserData) {
    console.log('No user data found in localStorage.');
    return;
  }

  // Parse the JSON data into an array
  const userData = JSON.parse(storedUserData);

  // Step 2: Remove the desired element from the array based on its index
  if (index >= 0 && index < userData.length) {
    userData.splice(index, 1); // Remove 1 element at the specified index
  } else {
    console.log('Invalid index. Element cannot be removed.');
    return;
  }

  // Step 3: Save the updated array back to localStorage
  localStorage.setItem('userData', JSON.stringify(userData));

  console.log('Element removed successfully.');

  RemoveElementByIndex(0);
};

export default RemoveElementByIndex;
