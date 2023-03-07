const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
})

router.get('/:id', (req, res) => {

})

router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        testcode: req.body.testcode
    })

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch(err) {
        res.status(400).json({message: err.message})
    }
})

router.patch('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

// async function getUser(req, res, next) {
//     let userData
//     try {
//         userData = await User.findById(req.params.id)
//         if(userData == null) {
//             return res.status(404).json({message: 'cannot find user'})
//         }
//     } catch(err) {
//         return res.status(500).json({message: err.message})
//     }

//     res.userData = userData
//     next()
// }

module.exports = router