export default prop => ({
  fontFamily: 'inherit',
  fontSize: (size => (({
    sm: '1.2rem',
    lg: '.8rem',
  })[size]))(prop.fontSize),
  fontWeight: prop.fontWeight,
  lineHeight: 1.2,
  borderRadius = (type => (({
    full: '35px',
    medium: '5px',
  })[type]))(prop.borderRadius),
  letterSpacing: '0.05em',
  verticalAlign: 'middle',
  padding: '.8rem 2rem',
  border: 0,
  cursor: 'pointer',
  webkitAppearance: 'none',
  boxShadow: 'transparent 0 0 0',
  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0s',
  outline: 'none',
})