import React from 'react';

const Homepage = async ({searchParams}:{searchParams:{hi:string}}) => {

    console.log(searchParams)

    return (
        <div >
            {searchParams.hi || "home page"}
        </div>
    );
};

export default Homepage;