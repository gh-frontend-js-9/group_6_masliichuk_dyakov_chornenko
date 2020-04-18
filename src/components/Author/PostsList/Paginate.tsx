 import React from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {fetchPosts} from "../../redux/action/action";
// import ElementPostData from "./Posts";
//
// interface IPage {
//     posts: any
// }
//
// const PaginatePage = () => {
//
//     const dispatch = useDispatch();
//     const posts = useSelector((state: IPage) => state.posts.fetchedPosts);
//     const numberPage = posts.length / 3;
//     console.log(numberPage);
//     if (!posts.length) {
//         dispatch(fetchPosts());
//     }
//
//     let current = 1,
//         last = numberPage,
//         delta = 2,
//         left = current - delta,
//         right = current + delta + 1,
//         range = [],
//         rangeWithDots = [],
//         l;
//
//     for (let i = 1; i <= last; i++) {
//         if (i == 1 || i == last || i >= left && i < right) {
//             range.push(i);
//         }
//     }
//
//     for (let i of range) {
//         if (l) {
//             if (i - l === 2) {
//                 rangeWithDots.push(l + 1);
//             } else if (i - l !== 1) {
//                 rangeWithDots.push('...');
//             }
//         }
//         rangeWithDots.push(i);
//         l = i;
//     }
//
//     return (<div className={'pagination'}>
//         <ul className={'item-page'}>
//             <li><button>Prev</button></li>
//
//             {rangeWithDots.map((page: any) => <li>
//                 <button >{page}</button>
//             </li>)}
//             <li><button>Next</button></li>
//
//         </ul>
//     </div>)
// };
// export default PaginatePage;
//
//
// // import React from "react";
// // import {useDispatch, useSelector} from "react-redux";
// // import {fetchPosts} from "../../redux/action/action";
// // import PaginationPage from "./PaginationPage";
// //
// // interface State {
// //     posts: any,
// //     numberPage: number,
// //     i: number
// // }
// //
// //
// // const ElementPaginateNew = () => {
// //     const dispatch = useDispatch();
// //     const posts = useSelector((state: State) => state.posts.fetchedPosts);
// //     const numberPage = posts.length / 3;
// //     console.log(numberPage);
// //     let i: number = 1;
// //     if (!posts.length) {
// //         dispatch(fetchPosts());
// //     }
// //     function addPageButton(i: number, numberPage:number) {
// //         const buttons = [];
// //         for (i; i <= numberPage; i++) {
// //             buttons.push(<PaginationPage valueOf={i} />)
// //         }
// //         return buttons;
// //     }
// //             return (
// //         <div>
// //             {addPageButton(i, numberPage).map((button:any) => button)}
// //         </div>
// //     )
// // };
// // export default ElementPaginateNew;