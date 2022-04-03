import React, {useEffect,useState} from "react";

export const Covid = () => {
    const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0])
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h1>O LIVE</h1>
      <div>Covid-19 coronavirus tracker</div>
      <ul>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span> OUR </span> COUNTRY</p>
                <p className="card__total card__small">INDIA</p>
            </div>
          </div>
        </li>

      </ul>

      <div class="row">
    <div class="col-6">
        <div class="card text-white bg-primary mb-4">
            <div class="card-body">
                <h5 class="card-title">Our Country</h5>
                <p class="card-text"> INDIA </p>
            </div>
        </div>
    </div>
    <div class="col-6">
        <div class="card text-white bg-secondary mb-4">
            <div class="card-body">
                <h5 class="card-title">Recovered</h5>
                <p class="card-text">{data.recovered}</p>
            </div>
        </div>
    </div>
    <div class="col-6">
        <div class="card text-white bg-success mb-4">
            <div class="card-body">
                <h5 class="card-title">Confirmed</h5>
                <p class="card-text">{data.confirmed}</p>
            </div>
        </div>
    </div>
    <div class="col-6">
        <div class="card text-white bg-danger mb-4">
            <div class="card-body">
                <h5 class="card-title">Deaths</h5>
                <p class="card-text">{data.deaths}</p>
            </div>
        </div>
    </div>
    <div class="col-6">
        <div class="card text-white bg-warning mb-4">
            <div class="card-body">
                <h5 class="card-title">last updated time</h5>
                <p class="card-text">{data.lastupdatedtime}</p>
            </div>
        </div>
    </div>
    <div class="col-6">
        <div class="card text-white bg-info mb-4">
            <div class="card-body">
                <h5 class="card-title">Active</h5>
                <p class="card-text">{data.active}</p>
            </div>
        </div>
    </div>
    <div class="col-6">
        <div class="card text-white bg-dark">
            <div class="card-body">
                <h5 class="card-title">Dark card title</h5>
                <p class="card-text">Some dytime.</p>
            </div>
        </div>
    </div>
    <div class="col-6">
        <div class="card bg-light">
            <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">Somenytime.</p>
            </div>
        </div>
    </div>
</div>
    </>
  );
};
