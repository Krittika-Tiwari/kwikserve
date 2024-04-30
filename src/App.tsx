import React from "react";
import "./App.css";
import HomePage from "./Componnet/HomePage";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import AboutUs from "./Componnet/AboutUs";
import AllServices from "./Componnet/AllServices";
import Subscription from "./Componnet/Subscription";
import ServicePaymentPage from "./Componnet/ServicePaymentPage";
import SubscriptionPayment from "./Componnet/SubscriptionPayment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/all-services" element={<AllServices />} />
          <Route path="/all-subscriptions" element={<Subscription />} />
          <Route path="/ServicePaymentPage/:service/:facality/:FacilityserviceId" element={<ServicePaymentPage />} />
          <Route path="/subscriptionPayment/:id" element={<SubscriptionPayment />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
