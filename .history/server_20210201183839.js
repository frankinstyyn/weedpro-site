const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); 
const cors = require('cors');

const app = express();
const email = process.env.mailTo;
const password = process.env.mailPw;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.get('/', () => {
//     res.send("Form here")
// })

app.post('/api/forma', (req, res) => {
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: `${email}`,
            pass: `${password}`
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'frankie-cormack@hotmail.com',
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
    console.log(`Server live on port ${PORT}`);
})