import React, { useState } from 'react';
import { Form, Button, Rating } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

const RatingsAndReviews = () => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');
  const [guestName, setGuestName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Handle rating change
  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  // Handle review submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!rating || !review || !guestName) {
      alert('Please provide a rating, review, and your name.');
      return;
    }

    try {
      const reviewRef = collection(db, 'reviews');
      await addDoc(reviewRef, {
        guestName,
        rating,
        review,
        date: new Date().toISOString(),
      });
      setIsSubmitted(true);
      setGuestName('');
      setReview('');
      setRating(0);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Leave a Rating and Review</h2>
      {isSubmitted ? (
        <div className="alert alert-success" role="alert">
          Thank you for your feedback!
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <div>
              <Rating
                name="rating"
                value={rating}
                onChange={handleRatingChange}
                size={30}
                max={5}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Write your review here"
              value={review}
              onChange={(e)
