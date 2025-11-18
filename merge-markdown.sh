#!/bin/bash
# merge-markdown.sh
# Merges all .md files into README.md
# Usage: chmod +x merge-markdown.sh && ./merge-markdown.sh

OUTPUT_FILE="README.md"
TEMP_FILE="README_TEMP.md"

echo ""
echo "=== Markdown File Merger ==="
echo "Merging all .md files into $OUTPUT_FILE"
echo ""

# Create header
cat > "$TEMP_FILE" << EOF
# Project Documentation

> **Note:** This file is auto-generated from all markdown files in the project.
> Last updated: $(date '+%Y-%m-%d %H:%M:%S')

---

EOF

# Find all .md files (excluding README.md and node_modules)
md_files=$(find . -type f -name "*.md" \
    ! -path "*/node_modules/*" \
    ! -path "*/.git/*" \
    ! -name "README.md" \
    ! -name "MERGE_MARKDOWN_GUIDE.md" \
    ! -name "merge-markdown.sh" \
    | sort)

# Count files
count=0
while IFS= read -r file; do
    if [ -n "$file" ]; then
        ((count++))
    fi
done <<< "$md_files"

echo "Found $count markdown files to merge:"
echo ""

# List files
while IFS= read -r file; do
    if [ -n "$file" ]; then
        relative_path="${file#./}"
        echo "  ✓ $relative_path"
    fi
done <<< "$md_files"

echo ""
echo "Processing files..."

# Process each file
current=0
while IFS= read -r file; do
    if [ -n "$file" ]; then
        relative_path="${file#./}"
        ((current++))
        echo "[$current/$count] Processing: $relative_path"
        
        # Add file header
        echo "" >> "$TEMP_FILE"
        echo "## File: $relative_path" >> "$TEMP_FILE"
        echo "" >> "$TEMP_FILE"
        
        # Add file content
        cat "$file" >> "$TEMP_FILE"
        
        # Add separator
        echo "" >> "$TEMP_FILE"
        echo "---" >> "$TEMP_FILE"
        echo "" >> "$TEMP_FILE"
    fi
done <<< "$md_files"

# Move temp file to README.md
mv "$TEMP_FILE" "$OUTPUT_FILE"

echo ""
echo "=== Success! ==="
echo "Merged $count files into $OUTPUT_FILE"
echo ""
echo "Next steps:"
echo "1. Preview README.md: cat $OUTPUT_FILE | head -n 50"
echo "2. Update .gitignore to hide original .md files"
echo "3. Commit: git add README.md .gitignore && git commit -m 'docs: merge markdown files'"
echo "4. Push: git push origin main"
echo ""
