const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); 
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', () => {
    resizeBy.send("Form here")
})

app.post('/api/forma', (req, res) => {
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'frankinstyyyn@gmail.com',
            pass: 'Problemsdrinkingm1lk'
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'lizziefox20@icloud.com',
        subject: `Free Quotation Request - ${data.name}`,
        html: `
            <h2>Free Quotation</h2>
                <ul>
                    <li>Name: ${data.name}</li>
                    <li>Number: ${data.number}</li>
                    <li>Email Address: ${data.email}</li>
                </ul>
            <h3>Their Message</h3>
            <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (err, response) => {
        if (err) {
            res.send(err)
        } else {
            res.send('Success')
        }
    });

    smtpTransport.close();
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
})