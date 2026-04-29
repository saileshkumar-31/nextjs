"use client"

const Error = (error) => {
    return (
        <div>
            <p>
                Somethingwent wrong:{error.message}
                
            </p>
        </div>
    )

}

export default Error;