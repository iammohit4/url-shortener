import React from "react";

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 w-svw h-svh flex justify-center items-center text-center">
            <span className="loading loading-spinner text-accent"></span>
        </div>
    )
}

export default Loading