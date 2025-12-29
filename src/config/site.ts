// Site configuration
export const SITE = {
  title: 'Grainsure | ผู้เชี่ยวชาญการวัดความชื้นเมล็ด ผลิต จำหน่ายความชื้นวัดความชื้น และบริการหลังการขาย',
  description: 'ผู้นำด้านเทคโนโลยีเครื่องวัดความชื้นเมล็ดพืชและวัสดุชนิดเม็ดในประเทศไทย ด้วยประสบการณ์กว่า 40 ปี ผลิตและจำหน่ายเครื่องวัดความชื้น พร้อมบริการหลังการขายที่ยอดเยี่ยม',
  url: 'https://grainsure-web.pages.dev/',
  author: 'Grainsure Co.Ltd',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Products(Eng)', href: '/capabilities' },
  { name: 'สินค้า', href: '/use-cases' },
  { name: 'บริการ', href: '/facilities' },
  { name: 'สำระควรรู้', href: '/rfq' },
  { name: 'เอกสาร', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: '',
  twitter: '',
  facebook: 'https://www.facebook.com/Grainsure/',
} as const;

