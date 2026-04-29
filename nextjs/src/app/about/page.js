"use client"
import {useRouter} from "next/navigation"
const About = () => {
  const router = useRouter();
  return (
    <div>
        <p className="heading"> ABOUT PAGE </p>
        <button onClick={()=>router.push("/blog")} className="bg-green-600 text-white px-4 py-2 rounded-lg" >GO TO BLOG</button>
    </div>
  )
}

export default About
