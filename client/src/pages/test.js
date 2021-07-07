import './App.css';

function Test() {
    return;
}

/*
const [techList, setTechList] = useState([]);

useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
        setTechList(response.data);
    });
}, []);

function App() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [adress, setAdress] = useState("");

    const submitForm = () => {
        Axios.post("http://localhost:3001/api/insert", {
            name: name,
            phone: phone,
            email: email,
            adress: adress,
        }).then(() => {
            alert('successfull insert');
        });
    };
    return (
        <div className="App">
            <h1>Formulario</h1>

            <div className="form">
                <label>Name</label>
                <input required type="text" name="name" value="" onChange={(e) => {
                    setName(e.target.value)
                }} />
                <label>Phone</label>
                <input type="text" phone="phone" value="" onChange={(e) => {
                    setPhone(e.target.value)
                }} />
                <label>Email</label>
                <input type="email" name="email" value="" required onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <label>Address</label>
                <input type="text" address="adress" value="" onChange={(e) => {
                    setAdress(e.target.value)
                }} />

                <button onClick={submitForm}>Submit</button>

                {techList.map((val) => {
                    return (
                        <h1>Name: { val.name}
                        </h1>
                    );
                })
                }


            </div >
            <a href="/"><button className="search">Return to Home</button></a>
        </div >

    );

}

export default App;
*/
export default Test;
