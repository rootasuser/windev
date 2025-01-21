
// Initialize Google API client
function loadClient() {
    gapi.client.init({
        apiKey: 'AIzaSyBnh47tWhDZ4DYl_MpFUPykIz8dRX7vkDU', // Your API Key
        clientId: '670466630908-ddtb0m1j4ue0mg2jj1h6g1c3aps2dper.apps.googleusercontent.com', // Your OAuth Client ID
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        scope: "https://www.googleapis.com/auth/spreadsheets"
    }).then(function () {
        console.log('API client loaded');
        // Sign in the user after the client has loaded
        gapi.auth2.getAuthInstance().signIn();
    }).catch(function (error) {
        console.error('Error loading Google API client:', error);
    });
}

// Load Google API client library and authenticate
gapi.load('client:auth2', loadClient);

// Function to handle form submission
async function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const email = document.getElementById('email').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const sheetId = '1h7gy6jrAS3jJZ74MTeyZUuLg_LwvoI_rAbw8OpqDu10'; // Google Sheet ID
    const range = 'Sheet1!A:C'; // Assuming the columns are A for email, B for title, and C for description

    // Prepare data for insertion
    const values = [
        [email, title, description]
    ];

    const resource = {
        values: values
    };

    // Append data to the sheet
    try {
        const response = await gapi.client.sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            range: range,
            valueInputOption: 'RAW',
            resource: resource
        });

        // Show success message using SweetAlert2
        Swal.fire({
            icon: 'success',
            title: 'Form Submitted Successfully!',
            text: 'Your message has been saved.',
            confirmButtonText: 'OK'
        });

        console.log(response);
    } catch (error) {
        console.error(error);

        // Show error message using SweetAlert2
        Swal.fire({
            icon: 'error',
            title: 'Error Submitting Form',
            text: 'There was an issue while submitting your message. Please try again.',
            confirmButtonText: 'Try Again'
        });
    }
}

// Add event listener for form submission
document.getElementById('contact-form').addEventListener('submit', handleSubmit);
