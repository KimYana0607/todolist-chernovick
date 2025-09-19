// import './App.css'
// import {useState} from "react";
//
//
// type FilterType = 'All' | 'Dollars' | 'RUBLS';
//
// function App() {
//
//     const [money, setMoney] = useState([
//         {banknots: 'Dollars', value: 100, number: ' a1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' z1234567890'},
//         {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
//         {banknots: 'Dollars', value: 100, number: ' e1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' c1234567890'},
//         {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' x1234567890'},
//         {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
//     ])
//
//     const [filter, setFilter] = useState<FilterType>('All')
//     let currentMoney = money
//
//     if (filter === 'Dollars') {
//         currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
//     }
//
//     if (filter === 'RUBLS'){
//         currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
//     }
//
//     const onclickFilterHandler = (nameButton: FilterType) => {
//         setFilter(nameButton)
//     }
//
//     return (
//         <>
//             <ul>
//                 {currentMoney.map((AllMoney, index) => (
//                     <li key={index}>
//                         <span>{AllMoney.banknots}</span>
//                         <span>{AllMoney.value}</span>
//                         <span>{AllMoney.number}</span>
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={()=>onclickFilterHandler('All')}>All</button>
//             <button onClick={()=>onclickFilterHandler('Dollars')}>Dollars</button>
//             <button onClick={()=>onclickFilterHandler('RUBLS')}>Rubls</button>
//         </>
//     )
// }
//
// export default App
