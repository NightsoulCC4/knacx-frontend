import { useEffect, useState } from "react";
import Nav from "../components/Nav";

export default async function Home() {

  const getData = async () => {
    const res: Response = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
  }
  
  

  const res: Response|any = await getData();
  const categories: Response|any = await fetch('https://dummyjson.com/products/categories')
  let productEl;

  if (res !== null && categories !== null) {
    console.log("data ok!")
    
    console.log(categories.json())
      
    productEl = res?.products?.map((data: number|string|any, index: number) => {
        return (
            <div key={index} className="border-white border-2 m-auto w-auto h-full p-4">
                <h1>Product: {data?.title}</h1>
                <text>Price: {data?.price}</text>
            </div>
        )
    })
  }

  return (
      <>
        <Nav />
        <main className="grid grid-flow-col grid-rows-3 min-h-screen p-24">
          {productEl}
      </main>
      </>
  );
}