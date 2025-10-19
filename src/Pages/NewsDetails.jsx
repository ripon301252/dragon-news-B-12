import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../components/homelayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({})
    // console.log(data, id, news)
    useEffect(()=>{
        const newsDetails = data.find(singleNews => singleNews.id == id )
        setNews(newsDetails)
    }, [data, id])

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid md:grid-cols-12 grid-cols-1 gap-5'>
                <section className='md:col-span-9 col-span-12'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard key={news.id} news={news}></NewsDetailsCard>
                </section>
                <aside className='md:col-span-3 col-span-12'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;