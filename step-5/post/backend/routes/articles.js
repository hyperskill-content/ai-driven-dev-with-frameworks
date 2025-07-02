const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// GET /articles - fetch articles from Supabase
router.get('/', async (req, res) => {
  const { isSubscriber } = req.query;
  let { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('isPremium', false);

  if (isSubscriber === 'true') {
    const { data: premium } = await supabase
      .from('articles')
      .select('*')
      .eq('isPremium', true);
    data = [...data, ...premium];
  }

  if (error) return res.status(500).json({ error });
  res.json(data);
});

module.exports = router;
