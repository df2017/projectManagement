const app = express();

let ruta = path.join(__dirname+'/projectManagement/src/index.html')
let ruta2 = path.join(__dirname)
console.log('ruta1', ruta)
console.log('ruta2',ruta2)
app.use(express.static(__dirname+'/projectManagement'));
app.get('/',function(req,res){
    console.log('ruta2', ruta)
    res.sendFile(path.join(__dirname+'/projectManagement/src/index.html'));
});

app.listen(process.env.PORT || 8080);
