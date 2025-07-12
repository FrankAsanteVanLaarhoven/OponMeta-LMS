#!/bin/bash

# Deployment Script for Learning Management System
# This script automates the deployment process

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

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

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

print_success "Node.js version check passed: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_success "npm is available: $(npm -v)"

# Install dependencies
print_status "Installing dependencies..."
npm ci --production=false

if [ $? -eq 0 ]; then
    print_success "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Run linting
print_status "Running linting checks..."
npm run lint

if [ $? -eq 0 ]; then
    print_success "Linting passed"
else
    print_warning "Linting failed, but continuing with deployment"
fi

# Run type checking
print_status "Running TypeScript type checking..."
npm run type-check

if [ $? -eq 0 ]; then
    print_success "Type checking passed"
else
    print_warning "Type checking failed, but continuing with deployment"
fi

# Build the project
print_status "Building the project..."
npm run build:prod

if [ $? -eq 0 ]; then
    print_success "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Check if dist directory exists
if [ ! -d "dist" ]; then
    print_error "Build directory 'dist' not found"
    exit 1
fi

print_success "Build artifacts created in dist/ directory"

# Check build size
BUILD_SIZE=$(du -sh dist | cut -f1)
print_status "Build size: $BUILD_SIZE"

# Check for environment variables
if [ ! -f ".env.local" ] && [ ! -f ".env" ]; then
    print_warning "No environment file found. Make sure to set environment variables in your hosting platform."
fi

# Determine deployment platform
if [ "$1" = "vercel" ]; then
    print_status "Deploying to Vercel..."
    
    # Check if Vercel CLI is installed
    if ! command -v vercel &> /dev/null; then
        print_error "Vercel CLI is not installed. Install it with: npm install -g vercel"
        exit 1
    fi
    
    vercel --prod
    print_success "Deployment to Vercel completed"
    
elif [ "$1" = "netlify" ]; then
    print_status "Deploying to Netlify..."
    
    # Check if Netlify CLI is installed
    if ! command -v netlify &> /dev/null; then
        print_error "Netlify CLI is not installed. Install it with: npm install -g netlify-cli"
        exit 1
    fi
    
    netlify deploy --prod
    print_success "Deployment to Netlify completed"
    
else
    print_status "Build completed successfully!"
    print_status "To deploy:"
    print_status "  - Vercel: npm run deploy:vercel"
    print_status "  - Netlify: npm run deploy:netlify"
    print_status "  - Manual: Upload the 'dist' folder to your hosting provider"
fi

print_success "Deployment process completed! 🎉" 