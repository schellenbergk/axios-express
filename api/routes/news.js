import { Router } from 'express';
const router = Router();
const axios = require('axios').create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

// optional parameters are cityslug, bucketslug
router.get('/news', async (req, res, next) => {
  try {
    const result = await axios.get(
      "/posts"
    );
    res.json(result.data);
  } catch(e) {
    console.log('api error: ',e);
  }
});

export default router;
