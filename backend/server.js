const express = require('express');
const fileUpload = require('express-fileupload');
const { PythonShell } = require('python-shell');
const path = require('path');
const cors = require('cors');
const fs = require('fs'); // Fix: Import fs module

const app = express();
const port = 5000;

// Enable CORS for your React app
app.use(cors());

// Enable file uploads middleware
app.use(fileUpload());

// Create a directory for uploaded images
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) { // Fix: Use fs directly
    fs.mkdirSync(uploadDir);
}

app.post('/predict', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const plantImage = req.files.plantImage;
    const uploadPath = path.join(uploadDir, plantImage.name);

    // Use mv() to place the file on your server
    plantImage.mv(uploadPath, (err) => {
        if (err) {
            console.error('File upload error:', err);
            return res.status(500).send(err);
        }

        const options = {
            mode: 'text',
            pythonPath: 'python', // or 'python3' depending on your system
            scriptPath: __dirname,
            args: [uploadPath]
        };

        PythonShell.run('predict.py', options, (err, result) => {
            // Clean up the uploaded image file
            fs.unlink(uploadPath, (unlinkErr) => { // Fix: Use fs directly
                if (unlinkErr) console.error('Error deleting file:', unlinkErr);
            });

            if (err) {
                console.error('Python script error:', err);
                return res.status(500).json({ error: 'Prediction failed.' });
            }

            // The Python script prints the prediction to stdout, which `python-shell` captures in `result`
            const prediction = result && result[0] ? result[0] : null;
            res.json({ prediction: prediction });
        });
    });
});

app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});
