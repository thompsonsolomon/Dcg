import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../API/firebase";

export default function AuthControler() {
  const LOCALSTORAGEKEY = "dcgfan.org";
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user !== null) {
        localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(user));
      } else {
        return;
      }
    });

    return () => {
      unsub();
    };
  }, []);
  return <div></div>;
}
