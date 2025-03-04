import { useEffect } from "react";

const RedirectPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/home"; // Redirect to home page after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
 
  return (
    <div>
      <h1>Redirecting to Home Page...</h1>
    </div>
  );
};

export default RedirectPage;
