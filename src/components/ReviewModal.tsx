import React, { useState } from 'react';
import { Star, X, ThumbsUp, MessageSquare } from 'lucide-react';

interface ReviewModalProps {
  booking: any;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (review: any) => void;
}

export const ReviewModal = ({ booking, isOpen, onClose, onSubmit }: ReviewModalProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !booking) return null;

  const handleSubmit = () => {
    if (rating > 0) {
      onSubmit({
        lawyerId: booking.lawyerId,
        lawyerName: booking.lawyerName,
        rating,
        review: reviewText,
        date: new Date().toLocaleDateString(),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setRating(0);
        setReviewText('');
        onClose();
      }, 2000);
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 text-center animate-in fade-in">
          <div className="mb-4 flex justify-center">
            <div className="bg-green-100 rounded-full p-4">
              <ThumbsUp className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h2>
          <p className="text-slate-600 mb-6">Your review has been submitted successfully.</p>
          <p className="text-amber-600 font-bold">★★★★★ {rating}.0</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 animate-in fade-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Rate Your Experience</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-6 p-4 bg-slate-50 rounded-lg">
          <p className="text-sm text-slate-600">Consultation with</p>
          <p className="font-bold text-slate-900">{booking.lawyerName}</p>
          <p className="text-sm text-amber-600">{booking.specialty}</p>
        </div>

        {/* Rating Stars */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-4">How would you rate this consultation?</label>
          <div className="flex gap-2 justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
                className="transition-all"
              >
                <Star
                  className={`h-10 w-10 ${
                    star <= (hoverRating || rating)
                      ? 'text-amber-400 fill-amber-400'
                      : 'text-slate-300'
                  } transition-all`}
                />
              </button>
            ))}
          </div>
          <p className="text-center text-sm text-slate-600">
            {rating > 0 ? `${rating} out of 5 stars` : 'Click to rate'}
          </p>
        </div>

        {/* Review Text */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            <MessageSquare className="h-4 w-4 inline mr-2" />
            Share your feedback (optional)
          </label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Tell us about your experience with the lawyer..."
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
            rows={4}
          />
        </div>

        {/* Benefits Info */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-700">
            ℹ️ Your review helps other clients find the right lawyer and helps lawyers improve their services.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-slate-300 text-slate-700 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
          >
            Skip
          </button>
          <button
            onClick={handleSubmit}
            disabled={rating === 0}
            className="flex-1 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-300 text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center"
          >
            <Star className="h-4 w-4 mr-2 fill-white" />
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};
