import React from 'react';
import ElectronicsCategoryLayout from './ElectronicsCategoryLayout';

function PhonesAndAccessories() {
  const category = "Phones-accessories"; // Match this with the category in your products
  const bannerImage = "/electronincsbanner.png"; // Update with correct path

  return <ElectronicsCategoryLayout category={category} bannerImage={bannerImage} />;
}

export default PhonesAndAccessories;
