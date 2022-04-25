import React, { useEffect, useState } from "react";
import { getDashboardMetrics } from "./Services/Api";
import { useDispatch } from "react-redux";
import { MetricsActions } from "./Features/MetricsSlice";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { CircularProgress, Box } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMetrics = async () => {
      // Getting Dashboard metrics from API Endpoint.
      try {
        const ordersMetrics = await getDashboardMetrics();
        setLoading(false);
        dispatch(MetricsActions.getMetrics({ metrics: ordersMetrics }));
      } catch (error) {
        console.log(error);
        /* Workaround to detect unauthorized 401 which means not logged in */
        if ((error.message ?? "").indexOf("401") !== false) {
          // redirectToLogin()
        }
      }
    };

    fetchMetrics();
  }, [dispatch]);

  return (
    <div className="App">
      {!loading ? (
        <Container maxWidth="xl">
          <Router>
            <Routes>
              <Route path="/">
                <Route index element={<HomePage />} />
              </Route>
            </Routes>
          </Router>
        </Container>
      ) : (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            maxHeight: "100%",
            minHeight: "60vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default App;
