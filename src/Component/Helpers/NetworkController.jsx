import CustomAlert from "./Alert";

function NetworkController() {
  
  window.addEventListener("load", () => {
    if (navigator.onLine) {
      CustomAlert("success", "Online");
    } else {
      CustomAlert("error", "Offline");
    }
  });
  return <div></div>;
}

export default NetworkController;
