import { Link } from "react-router-dom";
import { CATEGORIES } from "@/data/products";
import { ChevronRight } from "lucide-react";

interface MobileCategoryMenuProps {
  onClose: () => void;
}

export default function MobileCategoryMenu({ onClose }: MobileCategoryMenuProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-bold text-lg mb-3 px-4">Categories</h3>
      {CATEGORIES.map((category) => (
        <Link
          key={category.slug}
          to={category.slug === "all" ? "/products" : `/category/${category.slug}`}
          onClick={onClose}
          className="flex items-center justify-between px-4 py-3 hover:bg-accent rounded-lg transition-all group"
        >
          <span className="text-foreground group-hover:text-primary font-medium">
            {category.name}
          </span>
          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  );
}
