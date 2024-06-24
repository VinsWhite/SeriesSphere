'use client';

import React, { useEffect, useState } from 'react';
import Category from '@/interfaces/category';

export default function LatestComp() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/data/categories.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Category[] = await response.json();
        setCategories(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
        <div className='flex gap-3 mt-3'>
          {categories.map(category => (
            <div key={category.id} className='border rounded-full px-2 py-1 text-black hover:text-gray-600 border-black cursor-pointer hover:border-gray-600'>
              <h2>{category.name}</h2>
            </div>
          ))}
        </div>
    </div>
  );
}
