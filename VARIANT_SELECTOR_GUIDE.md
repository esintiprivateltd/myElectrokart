# Product Variant Selector - Complete Guide

## 🎯 Overview

Your e-commerce website now features a professional variant selector system for Heavy Duty Connectors with pin-count options displayed in a clean, radio-button style horizontal row.

## ✨ Key Features

### 1. **Pin Configuration Options**
Available variants:
- 4 Pin - ₹335.87
- 6 Pin - ₹299.99
- 7 Pin - ₹365.00 (Out of Stock)
- 10 Pin - ₹425.50
- 16 Pin - ₹549.00
- 24 Pin - ₹699.00
- 32 Pin - ₹849.00 (Out of Stock)
- 48 Pin - ₹1,099.00

### 2. **Visual Design**
- Horizontal row layout
- Radio-button style selection
- Active state with primary color
- Checkmark indicator on selected
- Disabled state for out-of-stock
- Hover effects and animations
- Responsive and scrollable

### 3. **Dynamic Updates**
When user selects a variant:
- ✅ Price updates automatically
- ✅ Old price updates (if available)
- ✅ SKU updates
- ✅ Stock status updates
- ✅ Button states update
- ✅ Quantity resets to 1

### 4. **Stock Management**
- In-stock variants: Enabled with hover effects
- Out-of-stock variants: Disabled with strikethrough
- Stock badge: "Out of Stock" label
- Button states: Disabled when out of stock
- Toast notifications for stock issues

## 📐 Visual Layout

### Variant Selector
```
Pin Configuration
┌────┬────┬────┬────┬────┬────┬────┬────┐
│ 4  │ 6  │ 7  │ 10 │ 16 │ 24 │ 32 │ 48 │
│Pin │Pin │Pin │Pin │Pin │Pin │Pin │Pin │
└────┴────┴────┴────┴────┴────┴────┴────┘
 ✓    ○    ✗    ○    ○    ○    ✗    ○
Active  -  Out   -    -    -   Out   -
```

### States
```
Selected (4 Pin):
┌────────┐
│ ✓ 4 Pin│  ← Blue border, checkmark, shadow
└────────┘

Available (6 Pin):
┌────────┐
│  6 Pin │  ← Gray border, hover effect
└────────┘

Out of Stock (7 Pin):
┌────────┐
│ 7̶ ̶P̶i̶n̶ │  ← Strikethrough, disabled
│Out Stock│  ← Red badge
└────────┘
```

## 🎨 Design Specifications

### Selected Variant
- Border: 2px solid primary color
- Background: Primary color with 10% opacity
- Text: Primary color
- Shadow: Medium shadow with ring
- Checkmark: White on primary circle
- Scale: Normal
- Cursor: Pointer

### Available Variant
- Border: 2px solid gray-300
- Background: White
- Text: Gray-700
- Hover: Border primary/50, background primary/5
- Hover Scale: 105%
- Active Scale: 95%
- Cursor: Pointer

### Out of Stock Variant
- Border: 2px solid gray-200
- Background: Gray-50
- Text: Gray-400 with strikethrough
- Opacity: 60%
- Badge: Red "Out of Stock"
- Cursor: Not-allowed
- No hover effects

## 🔧 Implementation Details

### Component: `ProductVariantSelector.tsx`

**Props:**
```typescript
interface ProductVariantSelectorProps {
  variants: ProductVariant[];
  selectedVariant: string;
  onVariantChange: (variantId: string) => void;
  label?: string;
}

interface ProductVariant {
  id: string;
  value: string;
  label: string;
  price: number;
  oldPrice?: number;
  inStock: boolean;
  sku?: string;
}
```

### Product Data Structure

```typescript
{
  id: "hd-4",
  title: "Esinti Heavy Duty Connector",
  price: 335.87,
  hasVariants: true,
  variants: [
    {
      id: "4-pin",
      value: "4",
      label: "4 Pin",
      price: 335.87,
      oldPrice: 342.72,
      inStock: true,
      sku: "HD-4PIN"
    },
    // ... more variants
  ]
}
```

### State Management

```typescript
// Selected variant ID
const [selectedVariantId, setSelectedVariantId] = useState("4-pin");

// Get current variant details
const currentVariant = product.variants.find(
  v => v.id === selectedVariantId
);

// Dynamic values
const displayPrice = currentVariant.price;
const displayOldPrice = currentVariant.oldPrice;
const displaySku = currentVariant.sku;
const isInStock = currentVariant.inStock;
```

## 📱 Responsive Behavior

### Desktop (>1024px)
- All variants visible in single row
- Comfortable spacing (gap-2)
- Hover effects enabled
- Full button width

### Tablet (768px-1024px)
- Variants wrap to multiple rows if needed
- Maintained spacing
- Touch-friendly targets
- Scroll if necessary

### Mobile (<768px)
- Horizontal scroll enabled
- Flex wrap with gap
- Larger touch targets (min-width: 60px)
- Smooth scrolling
- Padding for scroll area

## 🎯 User Interactions

### Selecting a Variant
1. **Click variant button** → Updates selection
2. **Price updates** → New price displays
3. **SKU updates** → New SKU shows
4. **Stock status updates** → Badge changes
5. **Quantity resets** → Back to 1
6. **Buttons update** → Enable/disable based on stock

### Out of Stock Handling
1. **Click disabled variant** → No action
2. **Hover disabled variant** → No hover effect
3. **Try to add to cart** → Toast notification
4. **Try to buy now** → Toast notification
5. **Button shows** → "Out of Stock" text

## 💡 Features in Action

### Price Update
```
Before: ₹335.87 (4 Pin selected)
User clicks: 24 Pin
After: ₹699.00 (24 Pin selected)
```

### Stock Status
```
In Stock (4 Pin):
✅ In Stock – Fast Shipping Available
[Add to Cart] [Buy Now] ← Enabled

Out of Stock (7 Pin):
❌ Out of Stock – Select Another Variant
[Out of Stock] [Buy Now] ← Disabled
```

### SKU Display
```
Selected: 4 Pin
SKU: HD-4PIN

Selected: 24 Pin
SKU: HD-24PIN
```

## 🚀 Advanced Features

### Auto-Reset Quantity
```typescript
useEffect(() => {
  setQty(1);  // Reset to 1 when variant changes
}, [selectedVariantId]);
```

### Toast Notifications
```typescript
// Success
toast({
  title: "Added to Cart",
  description: "Esinti Heavy Duty Connector (4 Pin) added."
});

// Error
toast({
  title: "Out of Stock",
  description: "This variant is currently unavailable.",
  variant: "destructive"
});
```

### Cart Integration
```typescript
addToCart({
  id: product.id,
  title: `${product.title} - ${variantLabel}`,
  price: displayPrice,
  variant: variantLabel,
  quantity: qty,
  image: product.image
});
```

## 🎨 Customization Options

### Change Variant Layout
```tsx
// Current: Horizontal row
className="flex flex-wrap gap-2"

// Vertical stack
className="flex flex-col gap-2"

// Grid layout
className="grid grid-cols-4 gap-2"
```

### Adjust Button Size
```tsx
// Current: min-width 60px
className="min-w-[60px] px-4 py-3"

// Larger
className="min-w-[80px] px-6 py-4"

// Smaller
className="min-w-[50px] px-3 py-2"
```

### Change Colors
```tsx
// Selected state
border-primary bg-primary/10 text-primary

// Custom color (e.g., green)
border-green-600 bg-green-600/10 text-green-600
```

## 📊 Accessibility

### ARIA Labels
```tsx
aria-label="Select 4 Pin"
aria-pressed={isSelected}
aria-disabled={isDisabled}
```

### Keyboard Navigation
- Tab: Navigate between variants
- Enter/Space: Select variant
- Arrow keys: Move between options

### Screen Reader Support
- Descriptive labels
- State announcements
- Disabled state indication
- Selected state indication

## 🔧 Troubleshooting

### Variants Not Showing
- Check `hasVariants: true` in product data
- Verify `variants` array exists
- Inspect console for errors
- Check component import

### Price Not Updating
- Verify `currentVariant` is found
- Check `displayPrice` calculation
- Inspect state management
- Test with console logs

### Stock Status Wrong
- Check `inStock` property in variant
- Verify conditional rendering
- Test with different variants
- Inspect button disabled state

### Styling Issues
- Check Tailwind classes
- Verify responsive breakpoints
- Test on different screen sizes
- Inspect browser dev tools

## ✅ Testing Checklist

- [x] All 8 pin variants display
- [x] Horizontal row layout
- [x] Selected variant highlighted
- [x] Checkmark on selected
- [x] Out-of-stock variants disabled
- [x] Price updates on selection
- [x] SKU updates on selection
- [x] Stock status updates
- [x] Buttons disable when out of stock
- [x] Quantity resets on variant change
- [x] Toast notifications work
- [x] Responsive on mobile
- [x] Scrollable on small screens
- [x] Hover effects work
- [x] Accessibility compliant

## 🎉 Summary

Your Heavy Duty Connector products now feature:
- ✅ Professional variant selector
- ✅ 8 pin configuration options
- ✅ Clean radio-button style
- ✅ Horizontal row layout
- ✅ Dynamic price updates
- ✅ Stock management
- ✅ SKU tracking
- ✅ Disabled states
- ✅ Toast notifications
- ✅ Mobile responsive
- ✅ Accessibility compliant

The variant selector provides a premium e-commerce experience matching industry standards! 🚀
