import React from "react";

const ContentWrapper = ({children})=>{
    return (
        <div className="max-w-[1200px] px-[20px] py-0 mx-auto my-0">
            {children}
        </div>
    )
}

export default ContentWrapper;