import React, { useEffect, useState } from "react";
import axios from "axios";

const Customer = () => {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    const res = await axios.get("https://dummyjson.com/users");
    setCustomers(res.data.users);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="customer-page">
      <h1 className="customer-title">Our Customers</h1>

      <div className="customer-container">
        {customers.map((user) => (
          <div className="customer-card" key={user.id}>
            {/* HEADER */}
            <div className="customer-header">
              <img src={user.image} alt={user.firstName} />
              <div>
                <h2>
                  {user.firstName} {user.lastName}
                </h2>
                <p className="role">{user.role.toUpperCase()}</p>
              </div>
            </div>

            {/* BASIC INFO */}
            <div className="customer-section">
              <h4>Personal Info</h4>
              <p><b>Username:</b> {user.username}</p>
              <p><b>Email:</b> {user.email}</p>
              <p><b>Phone:</b> {user.phone}</p>
              <p><b>Gender:</b> {user.gender}</p>
              <p><b>Age:</b> {user.age}</p>
              <p><b>DOB:</b> {user.birthDate}</p>
              <p><b>Blood Group:</b> {user.bloodGroup}</p>
            </div>

            {/* ADDRESS */}
            <div className="customer-section">
              <h4>Address</h4>
              <p>{user.address.address}</p>
              <p>
                {user.address.city}, {user.address.state} ({user.address.stateCode})
              </p>
              <p>{user.address.country} - {user.address.postalCode}</p>
            </div>

            {/* COMPANY */}
            <div className="customer-section">
              <h4>Company</h4>
              <p><b>Name:</b> {user.company.name}</p>
              <p><b>Department:</b> {user.company.department}</p>
              <p><b>Title:</b> {user.company.title}</p>
            </div>

            {/* BANK */}
            <div className="customer-section">
              <h4>Bank Details</h4>
              <p><b>Card Type:</b> {user.bank.cardType}</p>
              <p><b>Card Number:</b> {user.bank.cardNumber}</p>
              <p><b>Expiry:</b> {user.bank.cardExpire}</p>
              <p><b>Currency:</b> {user.bank.currency}</p>
            </div>

            {/* CRYPTO */}
            <div className="customer-section">
              <h4>Crypto</h4>
              <p><b>Coin:</b> {user.crypto.coin}</p>
              <p><b>Network:</b> {user.crypto.network}</p>
              <p className="wallet">{user.crypto.wallet}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
