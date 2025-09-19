// import {Button} from './Button'
//
//
//
// function App() {
//
//     const ButtonFoo1 = (name: string, age: number) => {
//         console.log(name, age);
//     }
//
//     const ButtonFoo2 = (name: string) => {
//         console.log(name);
//     }
//
//     const ButtonFoo3 = () => {
//         console.log('Button');
//     }
//
//     return (
//         <div className="app">
//             <Button name={'MyYoutube-1'} callBack={() => ButtonFoo1('Im Vasya', 21)}/>
//             <Button name={'MyYoutube-2'} callBack={() => ButtonFoo2('Im Ivan')}/>
//             <Button name={'Im button'} callBack = {ButtonFoo3}/>
//         </div>
//     )
// }
// export default App




//
// import './App.css'
// import {useState} from "react";
//
// export type FilterValuesType = 'all' | 'completed' | 'active';
//
//
// function App() {
//
//     let [a, seta] = useState(1)
//
//     const onclickHandler = () =>{
//         seta(a+=1)
//         console.log(a)
//     }
//
//     const onclickHandler0 = () =>{
//         seta(0)
//         console.log(a)
//     }
//
//     return (
//         <div className="app">
//             <h1>{a}</h1>
//             <button onClick={onclickHandler}>button</button>
//             <button onClick={onclickHandler0}>0</button>
//         </div>
//     )
// }
//
// export default App
//
