import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

const CalendarWithCheckInCheckOut = () => {
  const [selectedDates, setSelectedDates] = useState<{
    checkIn: Date | null;
    checkOut: Date | null;
  }>({ checkIn: null, checkOut: null });
  const [showModal, setShowModal] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [email, setEmail] = useState("");

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    if (!selectedDates.checkIn || (selectedDates.checkIn && selectedDates.checkOut)) {
      setSelectedDates({ checkIn: date, checkOut: null });
    } else if (selectedDates.checkIn && date > selectedDates.checkIn) {
      setSelectedDates({ ...selectedDates, checkOut: date });
      setShowModal(true); // Open modal when both dates are selected
    }
  };

  // Highlight check-in and check-out dates on the calendar
  const tileClassName = ({ date }: { date: Date }) => {
    if (selectedDates.checkIn?.toDateString() === date.toDateString()) {
      return "highlight-checkin";
    }
    if (selectedDates.checkOut?.toDateString() === date.toDateString()) {
      return "highlight-checkout";
    }
    if (
      selectedDates.checkIn &&
      selectedDates.checkOut &&
      date > selectedDates.checkIn &&
      date < selectedDates.checkOut
    ) {
      return "highlight-between";
    }
    return null;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName && roomNumber && selectedDates.checkIn && selectedDates.checkOut) {
      // Logic to save guest data
      console.log({
        checkIn: selectedDates.checkIn.toDateString(),
        checkOut: selectedDates.checkOut.toDateString(),
        guestName,
        roomNumber,
        email,
      });

      // Reset the form and close modal
      setGuestName("");
      setRoomNumber("");
      setEmail("");
      setSelectedDates({ checkIn: null, checkOut: null });
      setShowModal(false);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Apartment Booking Calendar</h2>
      <div className="custom-calendar-container mx-auto mb-4">
        <Calendar
          onClickDay={handleDateSelect}
          value={new Date()}
          className="custom-calendar"
          tileClassName={tileClassName}
        />
      </div>

      {/* Modal for guest registration */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register a Guest</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Check-In Date</Form.Label>
              <Form.Control
                type="text"
                readOnly
                value={selectedDates.checkIn ? selectedDates.checkIn.toDateString() : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Check-Out Date</Form.Label>
              <Form.Control
                type="text"
                readOnly
                value={selectedDates.checkOut ? selectedDates.checkOut.toDateString() : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Guest Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter guest name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Room Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter room number"
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Guest Email (Optional)</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Save Guest
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <style>
        {`
          .custom-calendar-container {
            width: 90%;
            max-width: 1000px;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          .custom-calendar {
            font-size: 1.5rem; /* Increased font size for larger appearance */
            background-color: #fff;
            border-radius: 8px;
          }
          .highlight-checkin {
            background-color: #4caf50 !important;
            color: white !important;
            border-radius: 50%;
          }
          .highlight-checkout {
            background-color: #f44336 !important;
            color: white !important;
            border-radius: 50%;
          }
          .highlight-between {
            background-color: #ffeb3b !important;
            color: black !important;
            border-radius: 50%;
          }
          .react-calendar__tile--active {
            background: #2196f3 !important;
            color: white !important;
          }
        `}
      </style>
    </div>
  );
};

export default CalendarWithCheckInCheckOut;
