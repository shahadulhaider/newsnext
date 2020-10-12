/* eslint-disable */

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import categories from './categories.json';
import posts from './posts.json';

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 4000;

app.get('/posts', (_, res) => {
  return res.json(posts);
});

app.get('/posts/:id', (req, res) => {
  const post = posts.find(({ id }) => String(id) === String(req.params.id));
  return res.json(post);
});

app.get('/categories', (_, res) => {
  return res.json(categories);
});

app.get('/categories/:id', (req, res) => {
  const found = posts.filter(({ category }) => category === req.params.id);
  const categoryPosts = [...found, ...found, ...found];
  return res.json(categoryPosts);
});

app.listen(port, () =>
  console.log(`DB is running on http://localhost:${port}`),
);
