function sendToBackend(event) {
    event.preventDefault(); // Prevent form submission until validation

    // Get form inputs
    let name = document.forms["form"]["username"].value;
    let email = document.forms["form"]["email"].value;
    let number = document.forms["form"]["number"].value;
    let destination = document.forms["form"]["destination"].value;
    let duration = document.forms["form"]["length"].value;

    // Check if any field is empty
    if (name === "" || email === "" || number === "" || destination === "null" || duration === "Select Duration") {
        alert("Please fill in all the required fields.");
        return false; // Stop function execution
    }

    // If all fields are filled, print "hello" and allow form submission
    console.log("hello");
     // Create a data object to send
     let formData = {
        username: name,
        email: email,
        phone: number,
        destination: destination,
        duration: duration
    };

    // Send data to backend using fetch()
    fetch("http://localhost:3000/api/submit", { // Replace with your actual backend URL
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convert data to JSON format
    })
    .then(response => response.json()) // Convert server response to JSON
    .then(data => {
        console.log("Success:", data);
        alert("Booking successful!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
    });


    // Submit the form (optional: if needed, you can manually submit it)
    document.forms["form"].submit();
}