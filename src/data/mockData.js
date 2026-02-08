export const categories = [
  { id: 'all', name: 'All', icon: '🍎', color: 'bg-red-100' },
  { id: 'tropical', name: 'Tropical', icon: '🍌', color: 'bg-yellow-100' },
  { id: 'berries', name: 'Berries', icon: '🍓', color: 'bg-pink-100' },
  { id: 'citrus', name: 'Citrus', icon: '🍋', color: 'bg-orange-100' },
  { id: 'exotic', name: 'Exotic', icon: '🥑', color: 'bg-green-100' },
];

export const products = [
  {
    id: 1,
    name: 'Organic Strawberries',
    price: 4.99,
    unit: 'kg',
    category: 'berries',
    image:
      'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D',
    bgColor: 'bg-red-50', // Pinkish
    badge: 'Local',
  },
  {
    id: 2,
    name: 'Tropical Mangoes',
    price: 2.5,
    unit: 'piece',
    category: 'tropical',
    image:
      'https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuZ298ZW58MHx8MHx8fDA%3D',
    bgColor: 'bg-orange-50', // Peach/Yellow
    badge: 'Sale',
  },
  {
    id: 3,
    name: 'Fresh Grapes',
    price: 4.99,
    unit: 'kg',
    category: 'berries',
    image:
      'https://images.unsplash.com/photo-1537640538965-175629c4248b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D',
    bgColor: 'bg-indigo-50', // Purple tint
    badge: null,
  },
  {
    id: 4,
    name: 'Exotic Kiwi',
    price: 0.99,
    unit: 'kg',
    category: 'exotic',
    image:
      'https://images.unsplash.com/photo-1585059895524-72359e06138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2l3aXxlbnwwfHwwfHx8MA%3D%3D',
    bgColor: 'bg-green-50', // Green
    badge: null,
  },
  {
    id: 5,
    name: 'Zesty Lemons',
    price: 1.99,
    unit: 'kg',
    category: 'citrus',
    image:
      'https://images.unsplash.com/photo-1590502593747-42a996133562?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVtb258ZW58MHx8MHx8fDA%3D',
    bgColor: 'bg-yellow-50',
    badge: 'Local',
  },
  {
    id: 6,
    name: 'Dragon Fruit',
    price: 6.99,
    unit: 'pc',
    category: 'exotic',
    image:
      'https://images.unsplash.com/photo-1527773229239-4467c6ae9d06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJhZ29uZnJ1aXR8ZW58MHx8MHx8fDA%3D',
    bgColor: 'bg-pink-50',
    badge: 'Sale',
  },
];
