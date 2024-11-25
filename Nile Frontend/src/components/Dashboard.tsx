import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import Calendar CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Value } from 'react-calendar/dist/cjs/shared/types';

const Dashboard = () => {
  
  const [date, setDate] = useState(new Date());
  const [reservations, setReservations] = useState<{ [key: string]: string[] }>({});
  const [loading, setLoading] = useState(false);

  
  const formatDate = (date: Date): string => date.toISOString().split("T")[0];

 
  useEffect(() => {
    const fetchReservations = async () => {
      setLoading(true);
      const formattedDate = formatDate(date);
      try {
        const reservationsRef = collection(db, 'reservations');
        const q = query(reservationsRef, where('date', '==', formattedDate));
        const querySnapshot = await getDocs(q);

        const reservationsData: { [key: string]: string[] } = {};
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.date && data.details) {
            reservationsData[data.date] = data.details;
          }
        });

        setReservations(reservationsData);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [date]);

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Dashboard</h1>
      </div>

      {/* Top Statistics */}
      <div className="row text-center mb-4">
        <div className="col-md-4">
          <div className="p-3 bg-light border rounded">
            <h2 className="text-primary">0</h2>
            <p>ARRIVALS</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-light border rounded">
            <h2 className="text-primary">0</h2>
            <p>DEPARTURES</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 bg-light border rounded">
            <h2 className="text-primary">0%</h2>
            <p>ACCOMMODATIONS BOOKED</p>
          </div>
        </div>
      </div>

      {/* Reservations and Today's Activity */}
      <div className="row">
        {/* Reservations */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5>Reservations</h5>
            </div>
            <div className="card-body">
              {/* Tabs */}
              <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                  <button className="nav-link active">Arrivals</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">Departures</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">Stayovers</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">In-House Guests</button>
                </li>
              </ul>
              {/* Table */}
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Guest</th>
                    <th>Confirmed</th>
                    <th>Room</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={4}>No reservations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5>Your Calendar</h5>
            </div>
            <div className="card-body">
              {/* Calendar */}
              <Calendar
                onChange={(value: Value, event: React.MouseEvent<HTMLButtonElement>) => {
                  if (value instanceof Date) {
                    setDate(value);
                  }
                }}
                value={date}
              />
              {/* Reservation Details */}
              <div className="mt-3">
                <h6>Reservations for {date.toDateString()}:</h6>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <ul>
                    {reservations[formatDate(date)] ? (
                      reservations[formatDate(date)].map((reservation, index) => (
                        <li key={index}>{reservation}</li>
                      ))
                    ) : (
                      <li>No reservations</li>
                    )}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
