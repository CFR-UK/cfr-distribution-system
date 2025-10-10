import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ no BrowserRouter here
import { ModalProvider } from "./context/ModalContext";
import MainLayout from "./Layout/MainLayout";
import Dashboard from "./Pages/Dashboard";
import PinSection from "./Pages/PinSection";
import MainMenu from "./Pages/MainMenu";
import Order from "./Pages/Order";
import OrderDetails from "./Pages/OrderDetails";
import Inventory from "./Pages/Inventory";
import Manufacturer from "./Pages/Manufacturer";
import ManufacturerOrderDetails from "./Pages/ManufacturerOrderDetails";
import ManufacturerDetails from "./Pages/MaufacturerDetails";
import OrderTaker from "./Pages/OrderTaker";
import OrderTakerDetail from "./Pages/OrderTakerDetail";
import Shops from "./Pages/Shops";
import ShopDetails from "./Pages/ShopDetails";
import Reports from "./Pages/Reports";
import ViewReport from "./Pages/ViewReport";
import Warehouse from "./Pages/Warehouse";
import WarehouseDetails from "./Pages/WarehouseDetails";
import Setting from "./Pages/Setting.jsx";
import Discount from "./Pages/Discount.jsx";
import DiscountViewDetails from "./Pages/DiscountViewDetails.jsx";
import AddDiscountForm from "./Pages/AddDiscount.jsx";
import SignUpAndLogin from "./Pages/SignUpAndLogin.jsx";
import CodeVerification from "./Pages/CodeVerification.jsx";
import ResetCode from "./Pages/ResetCode.jsx";
import WelcomeScreen from "./Pages/WelcomeScreen.jsx";
import NewPassword from "./Pages/NewPassword.jsx";
import Notification from "./Pages/NotificationPage.jsx";
import Chat from "./components/ChatPanel.jsx";

function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/signup-login" element={<SignUpAndLogin />} />
        <Route path="/verify-code" element={<CodeVerification />} />
        <Route path="/reset" element={<ResetCode />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<MainMenu />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/pinsection" element={<PinSection />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/manufacturer" element={<Manufacturer />} />
          <Route
            path="/manufacturerorderdetails"
            element={<ManufacturerOrderDetails />}
          />
          <Route
            path="/manufacturerdetails"
            element={<ManufacturerDetails />}
          />
          <Route path="/order-takers" element={<OrderTaker />} />
          <Route path="/order-takers-detail" element={<OrderTakerDetail />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/shop-details" element={<ShopDetails />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/view-report" element={<ViewReport />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/warehouse-details" element={<WarehouseDetails />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/discount" element={<Discount />} />
          <Route
            path="/DiscountViewDetails"
            element={<DiscountViewDetails />}
          />
          <Route path="/add-discount" element={<AddDiscountForm />} />
        </Route>
      </Routes>
    </ModalProvider>
  );
}

export default App;
