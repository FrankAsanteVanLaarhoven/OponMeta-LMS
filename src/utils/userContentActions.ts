// Utility functions for user content actions (recently viewed, favorites, wishlist, likes)

const RECENTLY_VIEWED_KEY = 'recentlyViewedContent';
const FAVORITES_KEY = 'favoriteContent';
const WISHLIST_KEY = 'wishlistContent';
const LIKES_KEY = 'likedContent';

// Helper to get/set arrays in localStorage
function getArray(key: string): string[] {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}
function setArray(key: string, arr: string[]) {
  localStorage.setItem(key, JSON.stringify(arr));
}

// Recently Viewed
export function addRecentlyViewed(id: string) {
  let arr = getArray(RECENTLY_VIEWED_KEY);
  arr = arr.filter(item => item !== id);
  arr.unshift(id);
  if (arr.length > 20) arr = arr.slice(0, 20);
  setArray(RECENTLY_VIEWED_KEY, arr);
}
export function getRecentlyViewed(): string[] {
  return getArray(RECENTLY_VIEWED_KEY);
}

// Favorites
export function toggleFavorite(id: string) {
  let arr = getArray(FAVORITES_KEY);
  if (arr.includes(id)) {
    arr = arr.filter(item => item !== id);
  } else {
    arr.unshift(id);
  }
  setArray(FAVORITES_KEY, arr);
}
export function isFavorite(id: string): boolean {
  return getArray(FAVORITES_KEY).includes(id);
}
export function getFavorites(): string[] {
  return getArray(FAVORITES_KEY);
}

// Wishlist
export function toggleWishlist(id: string) {
  let arr = getArray(WISHLIST_KEY);
  if (arr.includes(id)) {
    arr = arr.filter(item => item !== id);
  } else {
    arr.unshift(id);
  }
  setArray(WISHLIST_KEY, arr);
}
export function isWishlisted(id: string): boolean {
  return getArray(WISHLIST_KEY).includes(id);
}
export function getWishlist(): string[] {
  return getArray(WISHLIST_KEY);
}

// Likes
export function toggleLike(id: string) {
  let arr = getArray(LIKES_KEY);
  if (arr.includes(id)) {
    arr = arr.filter(item => item !== id);
  } else {
    arr.unshift(id);
  }
  setArray(LIKES_KEY, arr);
}
export function isLiked(id: string): boolean {
  return getArray(LIKES_KEY).includes(id);
}
export function getLikes(): string[] {
  return getArray(LIKES_KEY);
} 