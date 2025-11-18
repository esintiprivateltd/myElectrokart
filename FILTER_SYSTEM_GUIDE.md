# Product Filter System - User Guide

## 🎯 How the Filter System Works

### Category Navigation

**From Navigation Bar:**
1. Click "Categories" dropdown in the header
2. Select any category
3. URL updates to `/category/{category-slug}`
4. Products filter automatically

**From Sidebar:**
1. Click any category in the left sidebar
2. URL updates automatically
3. Products display for that category only
4. Active category is highlighted

**Direct URL Access:**
- `/products` - All products
- `/category/heavy-duty-connector` - Heavy Duty Connectors only
- `/category/uv-lamp` - UV Lamps only
- etc.

### Search Filtering

**Sidebar Search:**
1. Type in the search box in the sidebar
2. Products filter in real-time
3. Searches: product names, descriptions, badges
4. Works with category filters

**Global Search:**
1. Click search icon in navigation
2. Type to search all products
3. Click result to go to product page

### Price Range Filtering

1. Use the slider in the sidebar
2. Drag to set min/max price
3. Products filter automatically
4. Range displays above slider
5. Works with other filters

### Sorting

1. Use "Sort by" dropdown above products
2. Options:
   - Default (original order)
   - Price: Low to High
   - Price: High to Low
   - Name: A to Z
3. Sorting applies to filtered results

### Reset Filters

1. Click "Reset" button in sidebar
2. All filters clear
3. Returns to "All Products"
4. Search clears
5. Price range resets

## 🔄 Filter Combinations

Filters work together:
- **Category + Search**: Search within a category
- **Category + Price**: Filter category by price
- **Search + Price**: Search results within price range
- **All Three**: Category + Search + Price + Sort

## 📱 Mobile Usage

1. Click "Show Filters" button
2. Sidebar appears
3. Apply filters
4. Click "Hide Filters" to see results
5. Filters persist when hidden

## 🎨 Visual Indicators

- **Active Category**: Blue gradient background
- **Product Count**: Shows "X products found"
- **Loading**: Spinner during filter updates
- **No Results**: Clear message with reset option
- **Breadcrumbs**: Shows current location

## ⚡ Performance

- Filters update instantly (no page reload)
- Smooth animations
- Optimized for large product catalogs
- Fast search with debouncing
- Memoized calculations

## 🔗 URL Behavior

- Category changes update URL
- URL can be bookmarked
- Back button works correctly
- Share-friendly URLs
- SEO-optimized paths

## 💡 Tips

1. **Quick Category Switch**: Use navigation dropdown
2. **Narrow Results**: Combine multiple filters
3. **Find Specific Product**: Use search + category
4. **Compare Prices**: Sort by price
5. **Start Fresh**: Click Reset button

## 🐛 Troubleshooting

**No products showing?**
- Check if filters are too restrictive
- Click "Reset" to clear all filters
- Verify category selection

**Search not working?**
- Type at least 2 characters
- Check spelling
- Try broader terms

**Filters not applying?**
- Wait for loading spinner
- Check internet connection
- Refresh page if needed

## 🎯 Common Use Cases

**"Show me all UV Lamps under ₹2000"**
1. Click "UV Lamp" category
2. Adjust price slider to ₹0-₹2000
3. Results filter automatically

**"Find connectors with IP67 rating"**
1. Click "Heavy Duty Connector" category
2. Type "IP67" in search
3. See matching products

**"Browse all products by price"**
1. Stay on "All Products"
2. Sort by "Price: Low to High"
3. Scroll through results

## 📊 Filter States

- **Default**: All products, no filters
- **Category Active**: One category selected
- **Search Active**: Search term entered
- **Price Active**: Price range adjusted
- **Multiple Active**: Combination of filters
- **No Results**: Filters too restrictive

## ✨ Best Practices

1. Start broad, then narrow down
2. Use category first, then search
3. Adjust price range last
4. Reset when starting new search
5. Bookmark favorite category pages
