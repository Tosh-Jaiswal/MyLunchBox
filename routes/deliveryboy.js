const express = require('express')
const DeliveryBoy = require('../models/deliveryboy')
const router = new express.Router()

router.post('/deliveryboys', async (req, res) => {
    const deliveryboy = new DeliveryBoy(req.body)

    try {
        
        await deliveryboy.save()
        res.status(201).send(deliveryboy)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/deliveryboys', async (req, res) => {
    try {
        const deliveryboys = await DeliveryBoy.find({})
        res.send(deliveryboys)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/deliveryboys/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const deliveryboy = await DeliveryBoy.findById(_id)

        if (!deliveryboy) {
            return res.status(404).send()
        }

        res.send(deliveryboy)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/deliveryboys/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'mobileNumber', 'address']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const deliveryboy = await DeliveryBoy.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!deliveryboy) {
            return res.status(404).send()
        }

        res.send(deliveryboy)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/deliveryboys/:id', async (req, res) => {
    try {
        const deliveryboy = await DeliveryBoy.findByIdAndDelete(req.params.id)

        if (!deliveryboy) {
            return res.status(404).send()
        }

        res.send(deliveryboy)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router