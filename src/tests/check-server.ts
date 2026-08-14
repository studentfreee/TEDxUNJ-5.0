import http from 'http';

// Fetch localhost page HTML to ensure server is responding cleanly
http.get('http://localhost:5173/event', (res) => {
  console.log(`Development Server Status Code: ${res.statusCode} OK`);
}).on('error', (err) => {
  console.error('Server error:', err.message);
});
