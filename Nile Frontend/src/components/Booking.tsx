import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarWithCheckInCheckOut from './BookNow';

const rooms = [
  {
    id: 1,
    name: "Terrace Room",
    maxOccupancy: 2,
    minimumStay: "1 Night(s)",
    nonRefundablePrice: 85076,
    refundablePrice: 97837,
    imgSrc: "/terrace.jpg",
    available: 1,
  },
  {
    id: 2,
    name: "Double Room",
    maxOccupancy: 2,
    minimumStay: "1 Night(s)",
    nonRefundablePrice: 72885,
    refundablePrice: 97837,
    imgSrc: "/double.jpg",
    available: 3,
  },
  {
    id: 3,
    name: "Family Room",
    maxOccupancy: 4,
    minimumStay: "1 Night(s)",
    nonRefundablePrice: 98363,
    refundablePrice: 113117,
    imgSrc: "/family.jpg",
    available: 2,
  }
];

const Booking = () => {
const [selectedRooms, setSelectedRooms] = useState(
  rooms.map(() => ({ adults: 0, children: 0, rooms: 0 }))
);

const handleSelectionChange = (index: number, key: 'adults' | 'children' | 'rooms', value: number) => {
  const updatedSelections = [...selectedRooms];
  updatedSelections[index][key] = value;
  setSelectedRooms(updatedSelections);
};

const handleBookNow = () => {
  console.log("Booking details:", selectedRooms);
  // Add your booking logic here
};

return (
  <div className="container mt-4">
    {rooms.map((room, index) => (
      <div className="card mb-4" key={room.id}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={room.imgSrc}
              className="img-fluid rounded-start"
              alt={`${room.name}`}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{room.name}</h5>
              <p className="card-text">
                <strong>Maximum Occupancy:</strong> {room.maxOccupancy}
                <br />
                <strong>Minimum Stay:</strong> {room.minimumStay}
              </p>
              <div className="form-group">
                <strong>Price:</strong>
                <div className="mb-2">
                  <label>
                    <input
                      type="radio"
                      name={`pricing-${room.id}`}
                      value="nonRefundable"
                      defaultChecked
                    />
                    Non-Refundable: Bed & Breakfast -{" "}
                    <strong>
                      RWF {room.nonRefundablePrice.toLocaleString()}
                    </strong>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name={`pricing-${room.id}`}
                      value="refundable"
                    />
                    Refundable: Bed & Breakfast -{" "}
                    <strong>
                      RWF {room.refundablePrice.toLocaleString()}
                    </strong>
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <label>Adults:</label>
                  <input
                    type="number"
                    className="form-control d-inline mx-2"
                    style={{ width: "60px" }}
                    min="0"
                    value={selectedRooms[index].adults}
                    onChange={(e) =>
                      handleSelectionChange(index, "adults", parseInt(e.target.value))
                    }
                  />
                </div>
                <div>
                  <label>Children:</label>
                  <input
                    type="number"
                    className="form-control d-inline mx-2"
                    style={{ width: "60px" }}
                    min="0"
                    value={selectedRooms[index].children}
                    onChange={(e) =>
                      handleSelectionChange(index, "children", parseInt(e.target.value))
                    }
                  />
                </div>
                <div>
                  <label>Rooms:</label>
                  <input
                    type="number"
                    className="form-control d-inline mx-2"
                    style={{ width: "60px" }}
                    min="0"
                    max={room.available || undefined}
                    value={selectedRooms[index].rooms}
                    onChange={(e) =>
                      handleSelectionChange(index, "rooms", parseInt(e.target.value))
                    }
                  />
                </div>
              </div>
              <div className="mt-3 text-end">
                {room.available !== null && (
                  <small className="text-muted">
                    Only {room.available} left
                  </small>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
    <div className="text-end">
      <button className="btn btn-primary" onClick={handleBookNow}>BOOK NOW</button>
    </div>
  </div>
);
};

export default Booking;
