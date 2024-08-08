fetch('https://api.example.com/data')
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



axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('There was a problem with the axios request:', error);
  });




axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('There was a problem with the axios request:', error);
  });




axios.post('https://api.example.com/data', {
    key: 'value'
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was a problem with the axios request:', error);
    });
  

axios.get('https://api.example.com/data').then