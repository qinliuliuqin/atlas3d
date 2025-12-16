export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/atlas3d' : ''
}

export function getImagePath(path: string) {
  const basePath = getBasePath()
  // If path already starts with basePath or is external, return as-is
  if (path.startsWith('http') || path.startsWith(basePath)) {
    return path
  }
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}

