import {Router} from 'express';

const router = Router();
export const getForm = async (req, res) => {
    const services = [
        { label: 'Haircut', value: 'haircut' },
        { label: 'Color', value: 'color' },
        { label: 'Perm', value: 'perm' }
    ];
    const message=""
    res.render('formv1', { services ,message});
};
export const bookService = async (req, res, next) => {
    try {
        const { name, email, phone, service, date, time } = req.body;
        const message = `Thank you, ${name}! Your ${service} appointment has been booked for ${date} at ${time}. We'll send a confirmation email to ${email} and contact you at ${phone} if necessary.`;
        res.render('formv1', { message,services:[] });
    }
    catch (err) {
        next(err)
    }

};
router.get('/', getForm);
router.post('/book', bookService);

export default router;

