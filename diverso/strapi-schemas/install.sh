#!/bin/bash

# Diverso Strapi Schemas Installation Script
# This script helps you install all Diverso Strapi schemas into your Strapi project

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if target directory is provided
if [ -z "$1" ]; then
    print_error "Usage: $0 <path-to-strapi-project>"
    print_error "Example: $0 /path/to/my-strapi-project"
    exit 1
fi

TARGET_DIR="$1"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Validate target directory
if [ ! -d "$TARGET_DIR" ]; then
    print_error "Target directory does not exist: $TARGET_DIR"
    exit 1
fi

if [ ! -f "$TARGET_DIR/package.json" ]; then
    print_error "Target directory does not appear to be a Node.js project (no package.json found)"
    exit 1
fi

# Check if it's a Strapi project
if ! grep -q "strapi" "$TARGET_DIR/package.json"; then
    print_warning "Target directory does not appear to be a Strapi project"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_error "Installation cancelled"
        exit 1
    fi
fi

print_status "Installing Diverso Strapi schemas to: $TARGET_DIR"

# Create necessary directories
print_status "Creating directory structure..."
mkdir -p "$TARGET_DIR/src/api"
mkdir -p "$TARGET_DIR/src/components"

# Copy components
print_status "Copying components..."
if [ -d "$SCRIPT_DIR/components" ]; then
    cp -r "$SCRIPT_DIR/components"/* "$TARGET_DIR/src/components/"
    print_success "Components copied successfully"
else
    print_warning "Components directory not found"
fi

# Copy collection types
print_status "Copying collection types..."
COLLECTIONS_COPIED=0

for dir in "$SCRIPT_DIR"/diverso-*; do
    if [ -d "$dir" ]; then
        collection_name=$(basename "$dir")
        print_status "  → Copying $collection_name..."
        cp -r "$dir" "$TARGET_DIR/src/api/"
        ((COLLECTIONS_COPIED++))
    fi
done

print_success "$COLLECTIONS_COPIED collection types copied successfully"

# Summary
print_success "Installation completed successfully!"
echo
print_status "What was installed:"
echo "  • 12 Components (diverso/*)"
echo "  • $COLLECTIONS_COPIED Collection Types with full API support"
echo "  • Each collection includes: schema.json, controller, service, and routes"
echo "  • Consolidated diverso-home schema with all homepage sections"
echo
print_status "Next steps:"
echo "  1. Start your Strapi server: npm run develop"
echo "  2. Go to Settings → Users & Permissions → Roles → Public"
echo "  3. Enable 'find' and 'findOne' permissions for diverso/* collections"
echo "  4. Your main API endpoints:"
echo "     - GET /api/diverso-homes (complete homepage data)"
echo "     - GET /api/diverso-abouts"
echo "     - GET /api/diverso-contacts"
echo "     - GET /api/diverso-*-services (all service pages)"
echo
print_status "The diverso-home endpoint now includes ALL homepage sections in one call!"
print_status "For detailed documentation, see README.md"
print_success "Happy coding! 🚀"
