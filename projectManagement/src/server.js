const app = express();

app.use(express.static(__dirname+'/dist/projectManagement'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/projectManagement/src/index.html'));
});

app.listen(process.env.PORT || 8080);
