
const SignUpButtons = () => {
  return (
<button
  className="
    relative overflow-hidden p-4 z-10 w-full h-full
    cursor-pointer flex items-center justify-center
    bg-white text-black rounded-full
    transition-all duration-300 ease-in-out
    before:content-[''] before:absolute before:inset-0
    before:bg-[#ffa72b6f] before:-z-10
    before:transform before:skew-x-[-45deg] before:scale-x-0
    before:transition-transform before:duration-500
    hover:before:-scale-x-125
  "
>
    Sign in with Google
</button>
  )
}

export default SignUpButtons