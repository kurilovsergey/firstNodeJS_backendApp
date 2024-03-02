import  express, {Request, Response} from 'express'
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.json({serg: "kur"});
})

// app.get('/serg', (req, res) => {
//     res.send({serg: 30});
// })

app.get('/serg/:id', (req, res) => {
    if (+req.params.id == 7) {
        res.json(404);
        return;
    }
    res.json([{id: req.params.id}]);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})