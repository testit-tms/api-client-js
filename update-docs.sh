#!/bin/bash

# Script to update API documentation in README.MD
# Copies everything after "## Documentation for API Endpoints" from README-NEW.MD to README.MD

# Define file paths
SOURCE_FILE="README-NEW.MD"
TARGET_FILE="README.MD"
TEMP_FILE="temp_readme.md"

# Check if source file exists
if [ ! -f "$SOURCE_FILE" ]; then
    echo "Error: Source file $SOURCE_FILE not found!"
    exit 1
fi

# Check if target file exists
if [ ! -f "$TARGET_FILE" ]; then
    echo "Error: Target file $TARGET_FILE not found!"
    exit 1
fi

# Find the line number where "## Documentation for API Endpoints" is located in both files
SOURCE_API_LINE=$(grep -n "^## Documentation for API Endpoints" "$SOURCE_FILE" | cut -d: -f1)
TARGET_API_LINE=$(grep -n "^## Documentation for API Endpoints" "$TARGET_FILE" | cut -d: -f1)

# Check if the section exists in both files
if [ -z "$SOURCE_API_LINE" ]; then
    echo "Error: '## Documentation for API Endpoints' section not found in $SOURCE_FILE!"
    exit 1
fi

if [ -z "$TARGET_API_LINE" ]; then
    echo "Error: '## Documentation for API Endpoints' section not found in $TARGET_FILE!"
    exit 1
fi

# Get the content before "## Documentation for API Endpoints" from the target file
head -n "$TARGET_API_LINE" "$TARGET_FILE" > "$TEMP_FILE"

# Get the content after "## Documentation for API Endpoints" from the source file
tail -n +$((SOURCE_API_LINE + 1)) "$SOURCE_FILE" >> "$TEMP_FILE"

# Replace the original target file with the updated content
mv "$TEMP_FILE" "$TARGET_FILE"

echo "Successfully updated API documentation in $TARGET_FILE"
