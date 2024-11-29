import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // For dynamic routing
import { db } from '../firebase-config'; // Assuming Firebase is being used
import { doc, getDoc } from 'firebase/firestore';

interface Reservation {
  guestName: string;
  room: string;
  checkInDate: string;
  checkOutDate: string;
  status: string;
  specialRequests: string;
}

const ReservationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get reservation ID from URL
  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservationDetails = async () => {
      if (id) {
        try {
          const docRef = doc(db, 'reservations', id); // Firestore reference
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            setReservation({
              guestName: data.guestName,
              room: data.room,
              checkInDate: data.checkInDate,
              checkOutDate: data.checkOutDate,
              status: data.status,
              specialRequests: data.specialRequests || 'None',
            });
          } else {
            console.log('No such reservation!');
          }
        } catch (error) {
          console.error('Error
