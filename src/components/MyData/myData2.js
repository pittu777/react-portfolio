import axios from 'axios';

export const fetchDataFromGoogleSheet = async () => {
  const SHEET_ID = '19PQnTuAUn46mGia4inNCKjfuM4qVJSq2HEOvkh2kmSE';
  const API_KEY = 'AIzaSyAaXQyjh9_-nAEUOwBc9IoqXV8x8yIDtxI';

  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`
    );

    // Extract the data from the response
    const sheetData = response.data.values;
    
    // Process the sheetData as needed
    console.log(sheetData);
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
  }
};

fetchDataFromGoogleSheet();
