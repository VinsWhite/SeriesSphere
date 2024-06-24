'use client'

import React, { useEffect, useState } from 'react';
import { fetchCategories } from "@/db/queries/categories"

interface Categories {
    id: number;
    name: string;
    description: string;
}   

export default function LatestComp() {
    const [categories, setCategories] = useState<Categories[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          const data = await fetchCategories(1); // Usa un id reale
          setCategories(data);
        };
    
        fetchData();
      }, []);

      if (!categories) return <div>Loading...</div>;

    return (
        <div>
      <h1>Latest Comp</h1>
      {categories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
    )
}