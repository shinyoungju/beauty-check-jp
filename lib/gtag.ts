export const trackAffiliateClick = (
  productName: string,
  platform: 'amazon' | 'rakuten',
  category: string
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'affiliate_click', {
      product_name: productName,
      platform: platform,
      category: category,
      page_location: window.location.pathname
    })
  }
}
