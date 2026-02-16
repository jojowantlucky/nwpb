#!/bin/bash
mkdir -p custom/resized

for subfolder in custom/*/; do
  design=$(basename "$subfolder")
  counter=1
  
  for file in "$subfolder"*; do
    if [[ -f "$file" && "$file" =~ \.(jpg|jpeg|JPG|JPEG|png|PNG)$ ]]; then
      convert "$file" -resize 1200x\> -quality 85 "custom/resized/${design}-${counter}.webp"
      echo "Converted: ${design}-${counter}.webp"
      ((counter++))
    fi
  done
done
