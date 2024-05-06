export const sign_in_user = async userData => {
  try {
    console.log('inside the API ', userData);
    const response = await fetch('http://10.0.2.2:5000/sing/sgin_ad', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    console.log('inside the API ', userData);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('sign_in_user', data);
    return data;
  } catch (error) {
    // console.error("An error occurred:", error);
  }
};
