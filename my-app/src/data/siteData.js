export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Reservation', to: '/reservation' },
  { label: 'Contact', to: '/contact' },
]

export const featureList = [
  {
    icon: 'Coffee',
    title: 'Slow-roasted',
    text: 'Small-batch coffee, brewed with patience and precision.',
  },
  {
    icon: 'Sparkles',
    title: 'Seasonal menu',
    text: 'Fresh plates, pastries, and special creations all week long.',
  },
  {
    icon: 'Users',
    title: 'Community',
    text: 'A warm neighborhood rhythm for friends, work, and good mornings.',
  },
  {
    icon: 'Star',
    title: 'Crafted moments',
    text: 'Thoughtful details shaped for lingering conversations.',
  },
]

export const menuHighlights = [
  {
    label: 'Coffee',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    items: [
      { name: 'Noir Espresso', detail: 'Double shot · dark chocolate finish', price: '$4', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=500&q=80' },
      { name: 'Honey Oat Latte', detail: 'Velvety texture · floral notes', price: '$6', image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=500&q=80' },
      { name: 'Café au Lait', detail: 'Slow-steeped · creamy finish', price: '$5', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80' },
    ],
  },
  {
    label: 'Fast Food',
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=80',
    items: [
      { name: 'Sourdough Crostini', detail: 'Tomato, ricotta, basil drizzle', price: '$9', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80' },
      { name: 'Avocado Tartine', detail: 'Lemon zest · chili crisp', price: '$12', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=500&q=80' },
      { name: 'Truffle Egg Toast', detail: 'Soft yolk · basil oil', price: '$14', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80' },
    ],
  },
  {
    label: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
    items: [
      { name: 'Brown Butter Cookie', detail: 'Sea salt caramel center', price: '$5', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=80' },
      { name: 'Almond Cake', detail: 'Citrus glaze · toasted almond', price: '$7', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80' },
      { name: 'Dark Chocolate Mousse', detail: 'Espresso cream · cocoa nibs', price: '$8', image: 'https://images.unsplash.com/photo-1575377427642-087cf684f04d?auto=format&fit=crop&w=500&q=80' },
    ],
  },
  {
    label: 'Beverages',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80',
    items: [
      { name: 'Citrus Iced Tea', detail: 'Black tea · lemon · orange peel', price: '$5', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80' },
      { name: 'Rosemary Lemonade', detail: 'Fresh lemon · rosemary syrup', price: '$5', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80' },
      { name: 'Sparkling Tonic', detail: 'Grapefruit · botanical tonic', price: '$6', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=500&q=80' },
    ],
  },
  {
    label: 'Special Dishes',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    items: [
      { name: 'Seasonal Grain Bowl', detail: 'Roasted vegetables · herbed tahini', price: '$16', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80' },
      { name: 'Noiré Brunch Plate', detail: 'Eggs · sourdough · greens · jam', price: '$18', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=500&q=80' },
      { name: 'Mushroom Tagliatelle', detail: 'Wild mushrooms · parmesan cream', price: '$19', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=80' },
    ],
  },
]

export const testimonials = [
  { quote: 'The calmest coffee stop in the city, with food that feels genuinely thoughtful.', author: 'Maya R.' },
  { quote: 'Beautiful space, warm service, and the Honey Oat Latte is a must.', author: 'Daniel K.' },
  { quote: 'NOIRÉ has become our favorite place for slow weekend mornings.', author: 'Sofia L.' },
]

export const galleryImages = ['Morning light', 'Our table', 'Counter stories', 'Slow pours', 'Baker’s corner', 'Evening toast']

export const hours = [
  { day: 'Monday — Thursday', time: '7:30 AM — 8:00 PM' },
  { day: 'Friday', time: '7:30 AM — 9:00 PM' },
  { day: 'Saturday', time: '8:00 AM — 9:00 PM' },
  { day: 'Sunday', time: '8:00 AM — 7:00 PM' },
]
