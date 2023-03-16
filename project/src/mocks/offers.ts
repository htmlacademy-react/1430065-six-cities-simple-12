import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Amsterdam hotel description',
    goods: [
      'Heating', 'Kitchen', 'Off-1 goods',
    ],
    host: {
      avatarUrl: 'img/img_avatar_1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: [
      'img/off1_img1.png', 'img/off1_img2.png', 'img/off1_img3.png', 'img/off1_img4.png', 'img/off1_img5.png', 'img/off1_img6.png',
    ],
    isPremium: false,
    location: {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    maxAdults: 1,
    previewImage: 'img/apartment-01.jpg',
    price: 110,
    rating: 1.8,
    title: 'Amsterdam hotel title',
    type: 'Apartment',
  },

  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 22.370216,
        longitude: 24.895168,
        zoom: 10,
      },
      name: 'Beijing',
    },
    description: 'Beijing hotel description',
    goods: [
      'Heating', 'Wi-Fi', 'Off-2 good',
    ],
    host: {
      avatarUrl: 'img/img_avatar_2.png',
      id: 2,
      isPro: false,
      name: 'John',
    },
    id: 2,
    images: [
      'img/off2_img1.png', 'img/off2_img2.png', 'img/off2_img3.png', 'img/off2_img4.png', 'img/off2_img5.png', 'img/off2_img6.png',
    ],
    isPremium: true,
    location: {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 120,
    rating: 2.8,
    title: 'Beijing hotel title',
    type: 'Hostel',
  },

  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 32.370216,
        longitude: 34.895168,
        zoom: 10,
      },
      name: 'Caen',
    },
    description: 'Caen hotel description',
    goods: [
      'Heating', 'Wi-Fi', 'Off-3 goods-1', 'Off-3 goods-2', 'Off-3 goods-3',
    ],
    host: {
      avatarUrl: 'img/img_avatar_3.png',
      id: 3,
      isPro: true,
      name: 'John',
    },
    id: 3,
    images: [
      'img/off3_img1.png', 'img/off3_img2.png', 'img/off3_img3.png', 'img/off3_img4.png',
    ],
    isPremium: true,
    location: {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-03.jpg',
    price: 130,
    rating: 3.8,
    title: 'Caen hotel title',
    type: 'Villa',
  },

  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 42.370216,
        longitude: 44.895168,
        zoom: 10,
      },
      name: 'Delhi',
    },
    description: 'Delhi hotel description',
    goods: [
      'Heating', 'Wi-Fi', 'Off-4 goods-1', 'Off-4 goods-2', 'Off-4 goods-3',
    ],
    host: {
      avatarUrl: 'img/img_avatar_4.png',
      id: 4,
      isPro: false,
      name: 'John',
    },
    id: 4,
    images: [
      'img/off4_img1.png', 'img/off4_img2.png', 'img/off4_img3.png', 'img/off4_img4.png',
    ],
    isPremium: false,
    location: {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-04.jpg',
    price: 140,
    rating: 4.8,
    title: 'Dehli hotel title',
    type: 'Boongalo',
  },

];
