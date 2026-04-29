export default function RegisterLayout({ children }) {
  return (
    <>
    <p>Header</p>
{children}
<p>Footer</p>
    </>
    
  );
}

export const metadata = {
  title: "Register",
  description: "Generated fore registration",
};