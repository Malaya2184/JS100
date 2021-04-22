import React, {useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
const alanKey = '7182b4f4feedfdadb0673bf3c40169432e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{
    const [NewsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key : alanKey,
            onCommand : ({command, articles})=>{
                if (command === 'newHeadlines' ){
                    // console.log(articles.length);
                    console.log(articles);
                    // console.log(articles.length);
                    setNewsArticles(articles)
                }
            }
        })
    }, [])

    return(
    <div>
        <h1>Alan Ai news Application</h1>
        <NewsCards articles ={NewsArticles}/>
    </div>
    );
}

export default App;