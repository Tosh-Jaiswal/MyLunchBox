const express = require('express')
const FoodProvider = require('../models/aunty')
const router = new express.Router()

router.post('/foodProviders', async (req, res) => {
    const foodProvider = new FoodProvider(req.body)

    try {
        await foodProvider.save()
        res.status(201).send(foodProvider)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/foodProviders', async (req, res) => {
    try {
        const foodProviders = await FoodProvider.find({})
        res.send(foodProviders)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/foodProviders/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const foodProvider = await FoodProvider.findById(_id)

        if (!foodProvider) {
            return res.status(404).send()
        }

        res.send(foodProvider)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/foodProviders/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'mobileNumber', 'idproof', 'address', 'pincode']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const foodProvider = await FoodProvider.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!foodProvider) {
            return res.status(404).send()
        }

        res.send(foodProvider)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/foodProviders/:id', async (req, res) => {
    try {
        const foodProvider = await FoodProvider.findByIdAndDelete(req.params.id)

        if (!foodProvider) {
            return res.status(404).send()
        }

        res.send(foodProvider)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router