app.use(express.static('../frontend'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/index.html'));
});
