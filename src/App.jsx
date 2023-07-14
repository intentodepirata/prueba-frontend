import { CircularProgress, Container } from "@mui/material";
import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";
import BarChart from "./components/BarChart/BarChart";
const App = () => {
  const [data, setData] = useState(null);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    const fetchData = async () => {
      const res = await fetch(
        "https://apidatos.ree.es/es/datos/balance/balance-electrico?start_date=2019-07-01T11:07&end_date=2019-07-31T11:07&time_trunc=year"
      );
      const data = await res.json();
      setData(data);
      setIsloading(false);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" color="initial">
        Grafica de Electricidad
      </Typography>
      {isloading ? <CircularProgress /> : <BarChart data={data} />}
    </Container>
  );
};

export default App;
