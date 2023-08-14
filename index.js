import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors());
import { shortestWord, longestWord, wordLengths } from './word.js'
import { enoughAirtime } from './enoughairtime.js';
import { totalPhoneBill } from './totalphonebill.js';




const type = {'call' : 2.75, 'sms' : 0.65}
let bill = {}

let PORT = process.env.PORT || 3007;

app.use(express.static('public'))
app.use(express.json())

//get route
app.get("/api/word_game", function (req, res) {
    const sentence = req.query.sentence;
    res.json({
        longestWord: longestWord(sentence),
        shortestWord: shortestWord(sentence),
        sum: wordLengths(sentence)
    });
});

app.get("/api/phonebill/prices", function (req, res) {

    res.json({
        call: 2.75,
        sms: 0.65

    });
});

app.post('/api/phonebill/price', function(req, res) {
    //const usage = req.body.usage;
    const currentType =  req.body.type
    const price = req.body.price
    type[currentType] = 
    res.json({
        status : 'success',
        message : `The ${type} was set to ${price}`
    });

});



app.post('/api/phonebill/total', function(req, res) {
    const bill = req.body.billItems;
    
    res.json({
        result : totalPhoneBill(bill)
    });

});

app.post('/api/enough', function(req, res) {
    const usage = req.body.usage;
    const available = req.body.available;
    
    res.json({
        result : enoughAirtime(usage,available)
    });

});

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});


// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// route definitions below here

app.post("/")