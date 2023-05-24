import fs from 'fs';

export default function registerUserHandler(req, res) {
  try {
    const content = req.body;
    const filePath = './user.json';

    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        res.status(500).json({ error: 'Error writing file.' });
        return;
      }

      console.log('File written successfully!');
      res.status(200).json({ message: 'File written successfully!' });
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error.' });
  }
}
