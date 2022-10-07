import "./App.css";
import data from "./components/data.json";

function App() {
  return (
    <div className="app">
      <h1>Movie List</h1>
      <br />
      <div className="main">
        {data &&
          data.map((data) => {
            return (
              <>
                <div className="card" key={data.id}>
                  <img
                    src={data.img.src}
                    className="card-img-top"
                    alt={data.img.alt}
                  />

                  <div className="card-body">
                    <h3 className="card-title">
                      #{data.id} - {data.title} ({data.year})
                    </h3>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Distributor: {data.distributor}
                    </li>
                    <li className="list-group-item">Amount: {data.amount}</li>
                  </ul>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default App;
