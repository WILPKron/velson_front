import { useEffect, useRef, useState } from "react"

export default function useOnScreen(ref) {
	
	const [isIntersecting, setIntersecting] = useState(false)
	

		 const observer = typeof window !== "undefined"&&new IntersectionObserver(
		  ([entry]) => setIntersecting(entry.isIntersecting)
		)
		
	
  
	useEffect(() => {
	  observer.observe(ref.current)
	 
	  return () => { observer.disconnect() }
	}, [])
  
	return isIntersecting
  }