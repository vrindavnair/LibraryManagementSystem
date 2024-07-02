// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Book from "./components/Book"
// import Addbookform from "./components/Addbookform";
// function App() {
  
//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<Addbookform />}>
//     <Route path="/books" element={<Book />}/>

//     </Route>


//     </Routes>
//     </BrowserRouter>
    
//     </>
//   )
// }

// export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Book from './components/Book';
import Addbookform from './components/Addbookform';
import UpdateBook from './components/UpdateBook';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Book/>} />
                <Route path="/addbooks" element={<Addbookform />} />
                <Route path="/updatebook" element={<UpdateBook />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
