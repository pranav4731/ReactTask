import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

// function Greeting(){
//     return <h4>First component</h4>;
// }

// function Greeting(){
//  return(
//     <div onClick>
//        <h1>First Application</h1>
//        <ul>
//            <li>
//                <a href = '#'>About the app!</a>
//            </li>
//        </ul>
//     </div>

//  ); 
// }
// const Greeting = () =>{
//     return React.createElement('h1',{},'hello world');
// };

// function Greeting(){
//     return(
//         <div>
//             <Person />
//             <Message />
//         </div>
//     );
// }

// const Person = () => <h2>Pranav Deshpande</h2>;
// const Message = () => {
//     return <p>This is my Message</p>;
// };

// ReactDom.render(<Greeting />, document.getElementById('root')
// );

function Booklist(){
    return( 
        <section className='booklist'>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />

        </section>
    );
}


const Book = () => {
    return( 
    <article className = 'book'>
        <Image></Image>
        <Title></Title>
        <Author></Author>
        <Publisher></Publisher>
    </article>    
);
};

const Image = () => (
<img 
src = "https://m.media-amazon.com/images/I/61ukjVCWTfL._AC_UY545_FMwebp_QL65_.jpg" 
alt=""
/>
);

const Title = () => <h1>Rhythm of War</h1>;
const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>BY BRANDON SANDERSON</h4>
const Publisher = () => <h5>PUBLISHER: TOR BOOKS</h5>


ReactDom.render(<Booklist />, document.getElementById('root')
);