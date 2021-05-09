intent('(Hi | Hello) (jack)', reply('Hello Sir, welcome. How can I help you ?'))
intent('Tell Me the technology stack of this app ?', reply('there are basically 4 technology stack used. these are 1. Reactjs, 2. Alan A i, 3. Material U i, 4. News A p i Module'))
intent ('what does this app do ?', 'what can I do here ?', 
       reply('This is a news project'))
intent('Tell me about this app more',
      reply('It is a simplified web based conversational news application which can provide an user friendly hands free operation as well as a new experience to the news readers.'))
intent('(Tell me | What are ) the key features of this app',
       reply('Simple and feasible,Powered with voice assistant, Allow user to consume news as per their preference,Less time and resourse consuming'))
// intent('start a command', (p)=>{
//     p.play({command : 'testCommand'});
// })

const API_KEY = '7588f4aed8eb4554986a6c5c594f24a4';
let savedArticles = []

// News by source End point

intent(`(Give me news from | tell me news from )$(source* (.*))`, (p)=>{
    let date = new Date().toISOString().split('T')[0];
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
    console.log(p.source.value);
    if (p.source.value){
        NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}&from=${date}&to=${date}`
    }
    console.log(NEWS_API_URL);
//        let NEWS_API_URL = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7588f4aed8eb4554986a6c5c594f24a4'
    api.request(NEWS_API_URL, (error, response, body)=>{
//         console.log(body)
        const { articles } =JSON.parse(body);
//         console.log(body);
//         console.log(articles);
        
        
        if(!articles.length) {
            console.log(articles.length)
            p.play('Sorry, please try searching for news from a different source');
            return;
        }
        savedArticles = articles;
        
        p.play({command : 'newHeadlines', articles});
        p.play(`Here are the (latest|recent) ${p.source.value} news.`)
        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
    });
});

// News by specific search term

intent(`what\'s up with $(term* (.*))`, (p)=>{
    let date = new Date().toISOString().split('T')[0];
    let NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}`;
    console.log(p.term.value);
    if (p.term.value){
        NEWS_API_URL = `${NEWS_API_URL}&q=${p.term.value}&from=${date}&to=${date}`;
    }
    console.log(NEWS_API_URL);
//        let NEWS_API_URL = 'https://newsapi.org/v2/everything?q=apple&from=2021-04-23&to=2021-04-23&sortBy=popularity&apiKey=7588f4aed8eb4554986a6c5c594f24a4'
    api.request(NEWS_API_URL, (error, response, body)=>{
//         console.log(body)
        const { articles } =JSON.parse(body);
//         console.log(body);
//         console.log(articles);
        
        
        if(!articles.length) {
            console.log(articles.length)
            p.play('I don"t recognise this term ! so please try to search something else');
            return;
        }
        savedArticles = articles;
        
        p.play({command : 'newHeadlines', articles});
        p.play(`Here are the (latest|recent) articles on ${p.term.value} news.`)
        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
    });
});

// News by Categories
const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const CATEGORIES_INTENT = `${CATEGORIES.map((category) => `${category}~${category}`).join('|')}|`;

intent(`(show|what is|tell me|what's|what are|what're|read) (the|) (recent|latest|) $(N news|headlines) (in|about|on|) $(C~ ${CATEGORIES_INTENT})`,
  `(read|show|get|bring me|give me) (the|) (recent|latest) $(C~ ${CATEGORIES_INTENT}) $(N news|headlines)`, (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=us`;
    
    if(p.C.value) {
        NEWS_API_URL = `${NEWS_API_URL}&category=${p.C.value}`
    }
    
    api.request(NEWS_API_URL, (error, response, body) => {
        const { articles } = JSON.parse(body);
        
        if(!articles.length) {
            p.play('Sorry, please try searching for a different category.');
            return;
        }
        
        savedArticles = articles;
        
        p.play({ command: 'newHeadlines', articles });
        
        if(p.C.value) {
            p.play(`Here are the (latest|recent) articles on ${p.C.value}.`);        
        } else {
            p.play(`Here are the (latest|recent) news`);   
        }
        
        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
    });
});


// conformation function for reading news
const confirmation = context(() => {
    intent('yes', async (p) => {
        for(let i = 0; i < savedArticles.length; i++){
            p.play({ command: 'highlight', article: savedArticles[i]});
            p.play(`${savedArticles[i].title}`);
        }
    })
    
    intent('no', (p) => {
        p.play('Sure, sounds good to me.')
    })
})

intent('open (the|) (article|) (number|) $(number* (.*))', (p) => {
    if(p.number.value) {
        p.play({ command:'open', number: p.number.value, articles: savedArticles})
    }
})

intent('(go|) back', (p) => {
    p.play('Sure, going back');
    p.play({ command: 'newHeadlines', articles: []})
})