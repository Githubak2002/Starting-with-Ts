

// ===================== FETCH =====================

// ====================== GET ======================
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); 
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// ================== POST/PUT ===================
fetch("https://api.example.com/data", {
  method: "POST",
  // method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ key: "value" }), // Data to be sent
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // or response.text() if expecting text
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });


// ==================== DELETE =====================
fetch('https://api.example.com/data/1', {
  method: 'DELETE',
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // or response.text() if expecting text
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


// Custom Headers and Additional Options
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Accept': 'application/json',
  }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // or response.text() if expecting text
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


// ===================== AXIOS =====================
axios
  .get("https://api.example.com/data")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("There was a problem with the axios request:", error);
  });

axios
  .post("https://api.example.com/data", {
    key: "value",
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("There was a problem with the axios request:", error);
  });

axios.get("https://api.example.com/data").then;
