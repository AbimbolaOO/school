import React from 'react';

import Carousel from '@/components/Carousel/Carousel';

const images = [
  '/static/img/img-1.jpg',
  '/static/img/img-2.jpg',
  '/static/img/img-3.jpg',
];

export default function HeroSection() {
  return <Carousel images={images} />;
}
