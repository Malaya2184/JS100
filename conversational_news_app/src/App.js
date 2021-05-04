import React, {useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles'
import logo from './img/logo4.png'
import wordsToNumbers from 'words-to-numbers';

const alanKey = '7182b4f4feedfdadb0673bf3c40169432e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{
    const [NewsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles()
    useEffect(() => {
        alanBtn({
            key : alanKey,
            onCommand : ({command, articles, number})=>{
                if (command === 'newHeadlines' ){
                    // console.log(articles.length);
                    console.log(articles);
                    // console.log(articles.length);
                    setNewsArticles(articles)
                    setActiveArticle(-1)
                }
                else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)}
                    else if (command === 'open') 
                    {
                            const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
                            const article = articles[parsedNumber - 1];

                                if (parsedNumber > articles.length) {
                                    alanBtn().playText('Please try that again...');
                                } else if (article) {
                                    window.open(article.url, '_blank');
                                    alanBtn().playText('Opening...');
                                } else {
                                    alanBtn().playText('Please try that again...');
                                }
                    }
            }
        })
    }, [])

    return(
    <div >
        <div className={classes.logoContainer}>
            <img src={logo} alt="logo" className={classes.projectLogo}/>
        </div>
        <NewsCards articles ={NewsArticles} activeArticle={activeArticle}/>
    </div>
    );
}

export default App;