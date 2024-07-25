import Link from 'next/link';
import React from 'react';

const ContactList =async () => {
    console.log("hi")
    const data= [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className='divide-y-2 divide-slate-900 w-full'>
            {data.map((contact)=>{
                return <Link key={contact} className='p-5 bg-white block ' href={'/?hi=sfs'+ contact}>Name</Link>
            })}
        </div>
    );
};

export default ContactList;