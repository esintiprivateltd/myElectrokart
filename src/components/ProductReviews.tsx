import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

const SAMPLE_REVIEWS: Review[] = [
  {
    id: "1",
    author: "Rajesh Kumar",
    rating: 5,
    comment: "Excellent quality product. Exactly as described. Fast delivery and great packaging.",
    date: "2025-01-10",
  },
  {
    id: "2",
    author: "Priya Sharma",
    rating: 4,
    comment: "Good product for the price. Works well in our industrial setup.",
    date: "2025-01-08",
  },
  {
    id: "3",
    author: "Amit Patel",
    rating: 5,
    comment: "Outstanding service and product quality. Highly recommended!",
    date: "2025-01-05",
  },
];

export default function ProductReviews() {
  const [reviews] = useState<Review[]>(SAMPLE_REVIEWS);
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState("");
  const { toast } = useToast();

  const handleSubmitReview = () => {
    if (newRating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a rating before submitting.",
        variant: "destructive",
      });
      return;
    }
    if (newComment.trim() === "") {
      toast({
        title: "Comment Required",
        description: "Please write a comment before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback!",
    });
    setNewRating(0);
    setNewComment("");
  };

  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-secondary">Customer Reviews</h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= Math.round(avgRating)
                      ? "fill-accent text-accent"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-muted-foreground">
              {avgRating.toFixed(1)} out of 5 ({reviews.length} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Existing Reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-secondary">{review.author}</p>
                  <div className="flex mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? "fill-accent text-accent"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-foreground">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Review Form */}
      <Card className="bg-accent/10">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-secondary mb-4">Write a Review</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Your Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setNewRating(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= newRating
                          ? "fill-accent text-accent"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your Review</label>
              <Textarea
                placeholder="Share your experience with this product..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={4}
                className="rounded-2xl"
              />
            </div>

            <Button onClick={handleSubmitReview} variant="gold" className="w-full">
              Submit Review
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
