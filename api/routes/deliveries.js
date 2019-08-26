const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const notFound = require('../middleware/not-found');

let sequence = 0;

const demoDeliveryJSONSample = { 
    id: ++sequence,
    orderId: 1,
    clientId: 1,
    clientName: 'DeliveryJSONSample',
    clientCPF: 00000000000,
    isClientReceiver: false,
    date: new Date(Date.now()).toString(),
    geoLocation: 'lat 1 lon 1'
}

let db = [
    demoDeliveryJSONSample    
];

router.get('/', (req, res) => {
        const toArray = key => db[key];
        const deliveries = Object.keys(db).map(toArray);

        deliveries.length ? res.json(deliveries) : res.status(204).end();
});

router.get('/:deliveryId', (req, res) => {
    const delivery = db[req.params.deliveryId];
    delivery ? res.json(delivery) : notFound(req, res);
});

router.post('/', checkAuth, (req, res) => {
    const newDelivery = {
        id: ++sequence,
        orderId: req.body.orderId,
        clientId: req.body.clientId,
        clientName: req.body.clientName,
        clientCPF: req.body.clientCPF,
        isClientReceiver: req.body.isClientReceiver || false,
        date: new Date(Date.now()).toString(),
        geoLocation: req.body.geoLocation || 'Unknown'
    }

    db[newDelivery.id] = newDelivery;

    res.status(201).json({
        message: `Delivery has been created`,
        newDelivery
    });
});

//SAME AS PUT, BUT IT ONLY UPDATES. PUT RECREATES IF THE TASK DOESN'T EXIST
router.patch('/:deliveryId', checkAuth, (req, res) => {
    const delivery = db[req.params.deliveryId];

    if(delivery) {
        delivery.orderId = req.body.orderId || delivery.orderId;
        delivery.clientId = req.body.clientId || delivery.clientId;
        delivery.clientName = req.body.clientName || delivery.clientName;
        delivery.clientCPF = req.body.clientCPF || delivery.clientCPF;
        delivery.isClientReceiver = req.body.isClientReceiver || delivery.isClientReceiver;
        delivery.date = new Date(Date.now()).toString();
        delivery.geoLocation = req.body.geoLocation || delivery.geoLocation;

        res.json(delivery);
    } else {
        notFound(req, res);
    }
});

router.delete('/:deliveryId', checkAuth, (req, res) => {
    const delivery = db[req.params.deliveryId];
    if(delivery) {
        delete db[delivery.id];
        res.status(200).end();
    } else {
        notFound(req, res);
    }
});

module.exports = router;