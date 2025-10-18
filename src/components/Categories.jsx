import React, { use } from 'react';
import { NavLink } from 'react-router';



const categoryPromise = fetch('../categories.json').then(res => res.json())

const Categories = () => {
    const categories = use(categoryPromise)
    console.log(categories)
   
    return (
        <div>
            <h2 className='font-bold md:text-left text-center'>All Categories ({categories.length})</h2>
            <div className='grid grid-cols-1 gap-3 mt-5'>
                <h1 className='text-center bg-base-300 py-2 font-bold'>National News</h1>
                {
                    categories.map(category => 
                    <NavLink key={category.id}
                    className={`btn bg-base-100 border-none hover:bg-base-200 font-semibold text-accent`}
                    to={`/category/${category.id}`}
                    >
                    {category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;