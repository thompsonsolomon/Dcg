import React, { useCallback } from "react";
import "./Donate.css";
import { AccountData } from "../../Context/Data";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import CustomAlert from "../../Helpers/Alert";
function Donate() {
  const data = AccountData;
  // console.log(data);
  const history = useHistory();

  const HandleCopyNumber = (Account) => {
    let copyText = Account;
    navigator.clipboard.writeText(copyText);
    // console.log(copyText);
    // console.log(navigator.clipboard.writeText(copyText));
    CustomAlert("success", "Successfully copied " + copyText);
  };

  const HandleGoback = useCallback(() => {
    history.push(-1);
  }, [history]);

  return (
    <div className="wrapper">
      <div className="Donatecontainer">
        <Link to="/Home" className="Back">
          <span>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </span>
        </Link>
        <h1>Copy Account Number and make donation from desuired bank </h1>
        {data &&
          data.map((AccountDetail) => (
            <div key={AccountDetail.id} className="AccountCon">
              <div className="Number">
                <div>
                  <span>AccName</span>
                  <span className="bankName">{AccountDetail.AccName}</span>
                </div>
                <div>
                  <span>BankName</span>
                  <span className="bankName">{AccountDetail.BankName}</span>
                </div>
                <div style={{display: "flex"}}>
                  <span>{AccountDetail.AccountNumber}</span>

                  <div
                    className="icon"
                    title="Copy Account Number"
                    onClick={() =>
                      HandleCopyNumber(AccountDetail.AccountNumber)
                    }
                  >
                    <i className="bi bi-pencil"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <h2>Thank You for Your donation we really apreciate!!! </h2>
      </div>
    </div>
  );
}

export default Donate;
