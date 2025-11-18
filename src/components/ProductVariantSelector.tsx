import { useState } from "react";
import { Check } from "lucide-react";

export interface ProductVariant {
  id: string;
  value: string;
  label: string;
  price: number;
  oldPrice?: number;
  inStock: boolean;
  sku?: string;
}

interface ProductVariantSelectorProps {
  variants: ProductVariant[];
  selectedVariant: string;
  onVariantChange: (variantId: string) => void;
  label?: string;
}

export default function ProductVariantSelector({
  variants,
  selectedVariant,
  onVariantChange,
  label = "Select Variant"
}: ProductVariantSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-secondary">
        {label}
      </label>
      
      <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
        {variants.map((variant) => {
          const isSelected = selectedVariant === variant.id;
          const isDisabled = !variant.inStock;
          
          return (
            <button
              key={variant.id}
              onClick={() => !isDisabled && onVariantChange(variant.id)}
              disabled={isDisabled}
              className={`
                relative min-w-[60px] px-4 py-3 rounded-lg border-2 transition-all duration-200
                flex items-center justify-center font-medium text-sm
                ${isSelected 
                  ? 'border-primary bg-primary/10 text-primary shadow-md ring-2 ring-primary/30' 
                  : isDisabled
                    ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed opacity-60'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-primary/50 hover:bg-primary/5 hover:scale-105'
                }
                ${!isDisabled && 'active:scale-95'}
              `}
              aria-label={`Select ${variant.label}`}
              aria-pressed={isSelected}
              aria-disabled={isDisabled}
            >
              {/* Selected Checkmark */}
              {isSelected && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-sm">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
              
              {/* Variant Label */}
              <span className={isDisabled ? 'line-through' : ''}>
                {variant.label}
              </span>
              
              {/* Out of Stock Badge */}
              {isDisabled && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded whitespace-nowrap">
                  Out of Stock
                </span>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Selected Variant Info */}
      {selectedVariant && (
        <div className="text-sm text-muted-foreground">
          Selected: <span className="font-semibold text-secondary">
            {variants.find(v => v.id === selectedVariant)?.label}
          </span>
        </div>
      )}
    </div>
  );
}
