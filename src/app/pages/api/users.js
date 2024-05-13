// pages/api/users.js
import { serialize } from 'cookie';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Extract form data from the request body
    const formData = req.body;

    try {
      // Simulate storing user data in the server's database
      // Replace this with your actual database logic
      // For demonstration purposes, we're just logging the data
      console.log('User signed up:', formData);

      // Set the user data in the cookie
      const userDataCookie = serialize('userData', JSON.stringify(formData), {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

      // Set cookie in the response
      res.setHeader('Set-Cookie', userDataCookie);

      // Respond with success status
      res.status(200).json({ message: 'User signed up successfully' });
    } catch (error) {
      console.error('Error occurred:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Method not allowed
    res.status(405).end();
  }
}
