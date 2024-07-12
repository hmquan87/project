"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react";


const Home = () => {

  const route = useRouter();

  useEffect(() => {
    route.push('/about')
  }, [])
  return null;
}

export default Home;