const openTriviaApi=(category = '', difficulty = '', type = '')=> {
  // Validate parameters if needed, e.g., ensure category, difficulty, type are valid strings
  const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`;
  
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.error(err?.message || 'Something went wrong during the API call');
      return null; // You can also rethrow the error or handle it differently based on your needs
    });
}

export { openTriviaApi };
