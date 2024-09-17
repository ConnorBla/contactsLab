import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Contacts router');
});

// Get all contacts
router.get('/all', (req, res) => {
    res.send('All contacts');
});




// to-do: add post, put, and delete routers


router.post('/create/:id', (req, res) => {
   const id = req.params.id;
    res.send("Here's your contact that you just made " + id);
});

// Get a contact by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send('Contact by id ' + id);
});

router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    res.send("Heres the id of the contact you want to update " + id);
});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    res.send("Heres the id of the contact you want to delete " + id);
});


export default router;
