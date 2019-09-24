const express = require('express')
const Hostler = require('../models/bhukkad')
const router = new express.Router()

router.post('/hostlers', async (req, res) => {
    const hostler = new Hostler(req.body)

    try {
        await hostler.save()
        res.status(201).send(hostler)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/hostlers', async (req, res) => {
    try {
        const hostlers = await Hostler.find({})
        res.send(hostlers)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/hostlers/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const hostler = await Hostler.findById(_id)

        if (!hostler) {
            return res.status(404).send()
        }

        res.send(hostler)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/hostlers/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'mobileNumber', 'address']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const hostler = await Hostler.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!hostler) {
            return res.status(404).send()
        }

        res.send(hostler)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/hostlers/:id', async (req, res) => {
    try {
        const hostler = await Hostler.findByIdAndDelete(req.params.id)

        if (!hostler) {
            return res.status(404).send()
        }

        res.send(hostler)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router