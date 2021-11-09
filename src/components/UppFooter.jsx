import React from "react";

const UppFooter = ({country}) => {
    return (
        <div id="footer">
            <div className="row from">
                <div className="col-1 fcol">
                    <a href="" className="abt">{country ? country : 'Nigeria'}</a>
                </div>
            </div>
        </div>
    )
};


export default UppFooter

