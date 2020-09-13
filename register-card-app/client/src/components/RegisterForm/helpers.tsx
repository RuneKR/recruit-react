const capitalize = (s: string): string => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const formatErrorMessage = (field: string): string =>
  `${capitalize(field)
    .match(/[A-Z][a-z]+|[0-9]+/g)
    ?.join(' ')} is invalid`
    
