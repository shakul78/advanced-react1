import React from 'react';

import Article from './Article';
// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       This is a sample stateful and server-side
//       rendered React application.
//       <br />
//       <br />
//       Here is a button that will track
//       how many times you click it:
//       <br />
//       <br />
//       <button onClick={() => setCount(count + 1)}>{count}</button>
//     </div>
//   );
// }




const ArticleList = (props) => {
  return (
    <div>
      {Object.values(props.articles).map(article =>
        <Article
          key={article.id}
          article={article}
        />
      )}
    </div>
  );
};

export default ArticleList;
