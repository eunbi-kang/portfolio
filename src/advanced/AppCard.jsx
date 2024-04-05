import React from 'react'

export default function AppCard() {
  return (
    <>
    <Card>
        <h1>Card1</h1>
        <p>설명</p>
    </Card>
    <Card>
        <h1>Card2</h1>
        <article>개발자의 히든카드는 불족발</article>
        <img src="https://avatars.githubusercontent.com/u/87633110?v=4" alt="cardImage" 
        width={150}/>
    </Card>
    </>
  )
}

function Card({children}){
    return(
        <div 
            style={{
                backgroundColor: 'black',
                borderRadius: '20px',
                color: 'white',
                minHeight: '200px',
                maxWidth: '200px',
                margin: '1rem',
                padding: '1rem',
                textAlign: 'center'
            }}
        >
         {children}
         </div>
    );
}