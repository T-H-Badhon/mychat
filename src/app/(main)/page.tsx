import React from 'react';

const Homepage = async ({searchParams}:{searchParams:{hi:string}}) => {

    console.log(searchParams)

    return (
        <div >
            {searchParams.hi || "home pages"}
        </div>
    );
};

export default Homepage;