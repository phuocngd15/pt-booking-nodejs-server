import {Router,Request, Response,} from 'express'
import {cloudinaryV2, uploadImageAvatars} from './cloudinary';


const router = Router();
// Set limit to 50mb for uploading images
const bodyParser = require('body-parser');
router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

router.get('/', (req: Request, res: Response)=>{
    res.status(200).json("working")
})
router.get('/all', async (req, res) => {
    const { resources } = await cloudinaryV2.search
        .expression('folder:avatars')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});
router.post('/upload-image', async (req: Request, res: Response) => {
    try {
        const fileStr = req.body.data;
        const secure_url = await uploadImageAvatars(fileStr);
        console.log(secure_url);
        res.json({ msg: 'File uploaded sucessfully', url:secure_url });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});
export default router;