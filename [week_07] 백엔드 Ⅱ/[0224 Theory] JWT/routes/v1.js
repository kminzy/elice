const express = require('express');
const jwt = require('jsonwebtoken');

const {
    verifyToken
} = require('./middleware.js');

const router = express.Router();

router.get('/token', async (req, res) => {
    try {
        const token = jwt.sign({ // ? jwt.sign() = 원하는 내용 심기
            id: 'SNS user',
            nick: 'consumer00',
            grade: 'premium',
        }, process.env.JWT_SECRET, {
            expresIn: '60m',
            issuer: 'mySNS'
        });
    } catch(err) {
        
    }
});


router.get('/test', );