import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Allow only requests from frontend running on localhost:5500
app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.options('*', cors()); // Preflight handler

app.use(express.json());
let dataStore = [
  { id: 1, name: 'Item One' },
  { id: 2, name: 'Item Two' },
];
let currentId = dataStore.length > 0 ? Math.max(...dataStore.map(i => i.id)) + 1 : 1;

// CREATE (POST /data)
app.post('/data', (req, res) => {
  const newItem = { id: currentId++, ...req.body };
  dataStore.push(newItem);
  res.status(201).json(newItem);
});

// READ ALL (GET /data)
app.get('/data', (req, res) => {
  res.json(dataStore);
});

// READ ONE (GET /data/:id)
app.get('/data/:id', (req, res) => {
  const item = dataStore.find(i => i.id == req.params.id);
  item ? res.json(item) : res.status(404).json({ error: 'Item not found' });
});

// UPDATE (PUT /data/:id)
app.put('/data/:id', (req, res) => {
  const index = dataStore.findIndex(i => i.id == req.params.id); //comparing request id to be update with id present in array 
  if (index !== -1) {
    dataStore[index] = { id: dataStore[index].id, ...req.body };//It replaces or merges other fields using the contents of req.body (i.e. the updated data sent by the client).
    res.json(dataStore[index]);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// DELETE (DELETE /data/:id)
app.delete('/data/:id', (req, res) => {
  const index = dataStore.findIndex(i => i.id == req.params.id);
  if (index !== -1) {
    const deleted = dataStore.splice(index, 1);//returns deleted element in array form 
    res.json(deleted[0]);//deleted[0] elemented deleted at postion in array form 
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
