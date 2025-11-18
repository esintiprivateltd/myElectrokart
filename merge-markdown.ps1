# merge-markdown.ps1
# Merges all .md files into README.md
# Usage: .\merge-markdown.ps1

$outputFile = "README.md"
$tempFile = "README_TEMP.md"

Write-Host "`n=== Markdown File Merger ===" -ForegroundColor Cyan
Write-Host "Merging all .md files into $outputFile`n" -ForegroundColor Cyan

# Create header
@"
# Project Documentation

> **Note:** This file is auto-generated from all markdown files in the project.
> Last updated: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

---

"@ | Out-File -FilePath $tempFile -Encoding UTF8

# Find all .md files (excluding README.md and node_modules)
$mdFiles = Get-ChildItem -Path . -Filter "*.md" -Recurse -File | 
    Where-Object { 
        $_.Name -ne "README.md" -and 
        $_.FullName -notmatch "node_modules" -and
        $_.FullName -notmatch ".git" -and
        $_.Name -ne "MERGE_MARKDOWN_GUIDE.md" -and
        $_.Name -ne "merge-markdown.ps1"
    } | 
    Sort-Object Name

Write-Host "Found $($mdFiles.Count) markdown files to merge:`n" -ForegroundColor Green

# List files that will be merged
foreach ($file in $mdFiles) {
    $relativePath = $file.FullName.Replace($PWD.Path, "").TrimStart("\")
    Write-Host "  ✓ $relativePath" -ForegroundColor Gray
}

Write-Host "`nProcessing files..." -ForegroundColor Yellow

# Process each file
$count = 0
foreach ($file in $mdFiles) {
    $relativePath = $file.FullName.Replace($PWD.Path, "").TrimStart("\")
    $count++
    
    Write-Host "[$count/$($mdFiles.Count)] Processing: $relativePath" -ForegroundColor Cyan
    
    # Add file header
    @"

## File: $relativePath

"@ | Out-File -FilePath $tempFile -Append -Encoding UTF8
    
    # Add file content
    Get-Content $file.FullName -Raw | Out-File -FilePath $tempFile -Append -Encoding UTF8
    
    # Add separator
    @"

---

"@ | Out-File -FilePath $tempFile -Append -Encoding UTF8
}

# Move temp file to README.md
Move-Item -Path $tempFile -Destination $outputFile -Force

Write-Host "`n=== Success! ===" -ForegroundColor Green
Write-Host "Merged $($mdFiles.Count) files into $outputFile" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Preview README.md: notepad $outputFile" -ForegroundColor White
Write-Host "2. Update .gitignore to hide original .md files" -ForegroundColor White
Write-Host "3. Commit: git add README.md .gitignore && git commit -m 'docs: merge markdown files'" -ForegroundColor White
Write-Host "4. Push: git push origin main`n" -ForegroundColor White
