// import './App.css';
// import { useState,useEffect } from 'react';
// // import { Cardprovider } from "./contexts"


// function App() {
//   const [data, setData] = useState("");
//   const [newData, setNewData] = useState([]);
//   // const [ticketInfo, setTicketInfo] = useState({})
//   // const [userinfo, setUserinfo] = useState({})

//   useEffect(() => {
//     fetch(`https://api.quicksell.co/v1/internal/frontend-assignment`)
//       .then((response) => {
//         return response.json()
//       })
//       .then((res) =>
//         setData(res)
//       )
//     //  console.log(data);
//   },[])
//   console.log(data)
//   useEffect(()=>{
//     if(!data)
//     {
//       let cardsArray, userArray;
//       Object.keys(data).forEach(function (key) {
//         if (key === "tickets")
//           cardsArray = data[key]
//         else
//           userArray = data[key]
//       });
//       console.log(data)
//       console.log(cardsArray)
//       const newArray = cardsArray.map(card => {
//         const user = userArray.find(user => user.id === card.userId);

//         // Convert the 'tag' array to a string
//         const tagsString = card.tag.join(', ');

//         // Create a new object by spreading the properties of both card and user
//         return {
//           ...card,
//           userId: card.userId,  // Keeping userId from the card object
//           name: user ? user.name : '',  // Add name property if user is found
//           available: user ? user.available : false,  // Add available property if user is found
//           tag: tagsString  // Convert the 'tag' array to a string
//         };
//       });
//       setNewData(newArray)
//     }

//   },[data])
 


// //   for (let index = 0; index < cardInfo.length; index++)
// //  {

// //  }

//   // const sortByProperty = (property) => (a, b) => {
//   //   if (a[property] < b[property]) {
//   //     return -1;
//   //   }
//   //   if (a[property] > b[property]) {
//   //     return 1;
//   //   }
//   //   return 0;
//   // };

   
//   // setTicketInfo(user)
//   // setUserinfo(user2)
//   // console.log(ticketInfo);
//   // console.log(userinfo);

//     // const sortData = (property) => {
//     // const sortedData = [...data].sort(sortByProperty(property));
//     // setData(sortedData);
  

//   return (
//     <>
//       <div>
//         <div>
//           <h1>Add the cards</h1>
//           <div>
//             {/* Loop and add Card item here*/}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/card/Card';

// function App() {
//   const [data, setData] = useState(null);
//   const [newData, setNewData] = useState([]);

//   useEffect(() => {
//     fetch(`https://api.quicksell.co/v1/internal/frontend-assignment`)
//       .then((response) => response.json())
//       .then((res) => setData(res))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   useEffect(() => {
//     if (data && data.tickets && data.users) {
//       const cardsArray = data.tickets;
//       const userArray = data.users;

//       const newArray = cardsArray.map((card) => {
//       const user = userArray.find((user) => user.id === card.userId);

//         // Convert the 'tag' array to a string
//       const tagsString = card.tag.join(', ');

//         // Create a new object by spreading the properties of both card and user
//         return {
//           ...card,
//           userId: card.userId, // Keeping userId from the card object
//           name: user ? user.name : '', // Add name property if user is found
//           available: user ? user.available : false, // Add available property if user is found
//           tag: tagsString, // Convert the 'tag' array to a string
//         };
//       });

//       setNewData(newArray);
//     }
//   }, [data]);

//   console.log(newData)
//   return (
//     <>
//       <div>
//         <div>
//           <h1>Add the cards</h1>
//           <div>
//             {newData.map((card) => (
//               <Card key={card.id} card={card} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// function App() {
//   const [data, setData] = useState(null);
//   const [newData, setNewData] = useState([]);
//   const [groupingOption, setGroupingOption] = useState('status'); // Default to grouping by status

//   useEffect(() => {
//     fetch(`https://api.quicksell.co/v1/internal/frontend-assignment`)
//       .then((response) => response.json())
//       .then((res) => setData(res))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   useEffect(() => {
//     if (data && data.tickets && data.users) {
//       const cardsArray = data.tickets;
//       const userArray = data.users;

//       const newArray = cardsArray.map((card) => {
//         const user = userArray.find((user) => user.id === card.userId);

//         // Convert the 'tag' array to a string
//         const tagsString = card.tag.join(', ');

//         // Create a new object by spreading the properties of both card and user
//         return {
//           ...card,
//           userId: card.userId, // Keeping userId from the card object
//           name: user ? user.name : '', // Add name property if user is found
//           available: user ? user.available : false, // Add available property if user is found
//           tag: tagsString, // Convert the 'tag' array to a string
//         };
//       });

//       let groupedData;

//       switch (groupingOption) {
//         case 'status':
//           groupedData = groupDataByStatus(newArray);
//           break;
//         case 'user':
//           groupedData = groupDataByUser(newArray);
//           break;
//         case 'priority':
//           groupedData = groupDataByPriority(newArray);
//           break;
//         default:
//           groupedData = {};
//       }

//       setNewData(groupedData);
//     }
//   }, [data, groupingOption]);

//   function groupDataByStatus(cardsArray) {
//     // Grouping logic by status
//     // ...
//     const groupedData = {};

//     cardsArray.forEach((card) => {
//       const { status } = card;

//       if (!groupedData[status]) {
//         groupedData[status] = [];
//       }

//       groupedData[status].push(card);
//     });
//     return groupedData;
//   }

//   function groupDataByUser(cardsArray) {
//     // Grouping logic by user
//     // ...
//     const groupedData = {};

//     cardsArray.forEach((card) => {
//       const { userId } = card;

//       if (!groupedData[userId]) {
//         groupedData[userId] = [];
//       }

//       groupedData[userId].push(card);
//     });

//     return groupedData;
//   }


//   function groupDataByPriority(cardsArray) {
//     const groupedData = {};

//     cardsArray.forEach((card) => {
//       const { priority } = card;

//       if (!groupedData[priority]) {
//         groupedData[priority] = [];
//       }

//       groupedData[priority].push(card);
//     });

//     return groupedData;
//   }

//   return (
//     <>
//       <div>
//         <div>
//           <h1>Add the cards</h1>
//           <div>
//             <label htmlFor="groupingSelect">Group By:</label>
//             <select
//               id="groupingSelect"
//               onChange={(e) => setGroupingOption(e.target.value)}
//             >
//               <option value="status">By Status</option>
//               <option value="user">By User</option>
//               <option value="priority">By Priority</option>
//             </select>
//           </div>
//           <div>
//             {Object.keys(newData).map((groupKey) => (
//               <div key={groupKey}>
//                 <h2>{groupKey}</h2>
//                 {newData[groupKey].map((card) => (
//                   <Card key={card.id} card={card} />
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;




// ... (imports and other code)

// function App() {
//   const [data, setData] = useState(null);
//   const [sortedData, setSortedData] = useState([]);
//   const [groupedData, setGroupedData] = useState([]);
//   const [groupingOption, setGroupingOption] = useState('status');
//   const [sortingOption, setSortingOption] = useState('priority');

//   useEffect(() => {
//     fetch(`https://api.quicksell.co/v1/internal/frontend-assignment`)
//       .then((response) => response.json())
//       .then((res) => setData(res))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   useEffect(() => {
//     if (data && data.tickets && data.users) {
//       const cardsArray = data.tickets;
//       const userArray = data.users;

//       const newArray = cardsArray.map((card) => {
//         const user = userArray.find((user) => user.id === card.userId);
//         const tagsString = card.tag.join(', ');

//         return {
//           ...card,
//           userId: card.userId,
//           name: user ? user.name : '',
//           available: user ? user.available : false,
//           tag: tagsString,
//         };
//       });

//       setSortedData(newArray);
//     }
//   }, [data]);

//   useEffect(() => {
//     let groupedAndSortedData = [...sortedData];

//     // Grouping
//     switch (groupingOption) {
//       case 'status':
//         setGroupedData(groupDataByStatus(groupedAndSortedData));
//         break;
//       case 'user':
//         setGroupedData(groupDataByUser(groupedAndSortedData));
//         break;
//       case 'priority':
//         setGroupedData(groupDataByPriority(groupedAndSortedData));
//         break;
//       default:
//         // No grouping
//         break;
//     }

//     // Sorting
//     switch (sortingOption) {
//       case 'priority':
//         groupedAndSortedData = sortDataByPriority(groupedAndSortedData);
//         break;
//       case 'title':
//         groupedAndSortedData = sortDataByTitle(groupedAndSortedData);
//         break;
//       default:
//         // No sorting
//         break;
//     }

//     setSortedData(groupedAndSortedData);
//   }, [groupingOption, sortingOption]);

//   function groupDataByStatus(cardsArray) {
//     // Grouping logic by status
//     // ...
//     const groupedData = {};
//     cardsArray.forEach((card) => {
//       const { status } = card;
//       if (!groupedData[status]) {
//         groupedData[status] = [];
//       }
//       groupedData[status].push(card);
//     });
//     return groupedData;
//   }

//   function groupDataByUser(cardsArray) {
//     // Grouping logic by user
//     // ...
//     const groupedData = {};
//     cardsArray.forEach((card) => {
//       const { userId } = card;
//       if (!groupedData[userId]) {
//         groupedData[userId] = [];
//       }
//       groupedData[userId].push(card);
//     });
//     return groupedData;
//   }

//   function groupDataByPriority(cardsArray) {
//     // Grouping logic by priority
//     // ...
//     const groupedData = {};
//     cardsArray.forEach((card) => {
//       const { priority } = card;
//       if (!groupedData[priority]) {
//         groupedData[priority] = [];
//       }
//       groupedData[priority].push(card);
//     });
//     return groupedData;
//   }

//   function sortDataByPriority(dataToSort) {
//     // Sorting logic by priority
//     // ...
//     const dataArray = Array.isArray(dataToSort) ? dataToSort : [];
//     const sortedData = [...dataArray];
//     return sortedData.sort((a, b) => a.priority - b.priority);
//   }

//   function sortDataByTitle(dataToSort) {
//     // Sorting logic by title
//     // ...
//     const dataArray = Array.isArray(dataToSort) ? dataToSort : [];
//     const sortedData = [...dataArray];
//     return sortedData.sort((a, b) => a.title.localeCompare(b.title));
//   }
//   console.log(groupedData)
//   return (
//     <>
//       <div>
//         <div>
//           <h1>Add the cards</h1>
//           <div>
//             <label htmlFor="groupingSelect">Group By:</label>
//             <select
//               id="groupingSelect"
//               onChange={(e) => setGroupingOption(e.target.value)}
//             >
//               <option value="status">By Status</option>
//               <option value="user">By User</option>
//               <option value="priority">By Priority</option>
//             </select>

//             <label htmlFor="sortingSelect">Sort By:</label>
//             <select
//               id="sortingSelect"
//               onChange={(e) => setSortingOption(e.target.value)}
//             >
//               <option value="priority">By Priority</option>
//               <option value="title">By Title</option>
//             </select>
//           </div>
//           <div>
//             {Object.entries(groupedData).map(([groupKey, cards]) => (
//               <div key={groupKey}>
//                 <h2>{groupKey}</h2>
//                 {Array.isArray(cards) &&
//                   cards.map((card) => <Card key={card.id} card={card} />)}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;



// // ITS A PERFECT CODE
function App() {
  const [data, setData] = useState(null);
  const [groupedAndSortedData, setGroupedAndSortedData] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');

  useEffect(() => {
    fetch(`https://api.quicksell.co/v1/internal/frontend-assignment`)
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (data && data.tickets && data.users) {
      const cardsArray = data.tickets;
      const userArray = data.users;

      const newArray = cardsArray.map((card) => {
        const user = userArray.find((user) => user.id === card.userId);
        const tagsString = card.tag.join(', ');

        return {
          ...card,
          userId: card.userId,
          name: user ? user.name : '',
          available: user ? user.available : false,
          tag: tagsString,
        };
      });

      // Apply sorting
      let sortedData = [...newArray];
      switch (sortingOption) {
        case 'priority':
          sortedData = sortedData.sort((a, b) => a.priority - b.priority);
          break;
        case 'title':
          sortedData = sortedData.sort((a, b) => a.title.localeCompare(b.title));
          break;
        default:
          break;
      }

      // Apply grouping
      let groupedData = sortedData;
      switch (groupingOption) {
        case 'status':
          groupedData = groupDataByStatus(sortedData);
          break;
        case 'user':
          groupedData = groupDataByUser(sortedData);
          break;
        case 'priority':
          groupedData = groupDataByPriority(sortedData);
          break;
        default:
          break;
      }

      setGroupedAndSortedData(groupedData);

    }
  }, [data, groupingOption, sortingOption]);

  useEffect(() => {
    localStorage.setItem('groupingOption', groupingOption);
    localStorage.setItem('sortingOption', sortingOption);
  }, [groupingOption, sortingOption]);

  // Effect to load grouping and sorting options from localStorage on mount
  useEffect(() => {
    const storedGroupingOption = localStorage.getItem('groupingOption');
    const storedSortingOption = localStorage.getItem('sortingOption');

    if (storedGroupingOption) {
      setGroupingOption(storedGroupingOption);
    }

    if (storedSortingOption) {
      setSortingOption(storedSortingOption);
    }
  }, []);

  function groupDataByStatus(cardsArray) {
    // Grouping logic by status
    const groupedData = {};
    cardsArray.forEach((card) => {
      const { status } = card;
      if (!groupedData[status]) {
        groupedData[status] = [];
      }
      groupedData[status].push(card);
    });
    return groupedData;
  }

  function groupDataByUser(cardsArray) {
    // Grouping logic by user
    const groupedData = {};
    cardsArray.forEach((card) => {
      const { userId } = card;
      if (!groupedData[userId]) {
        groupedData[userId] = [];
      }
      groupedData[userId].push(card);
    });
    return groupedData;
  }

  function groupDataByPriority(cardsArray) {
    // Grouping logic by priority
    const groupedData = {};
    cardsArray.forEach((card) => {
      const { priority } = card;
      if (!groupedData[priority]) {
        groupedData[priority] = [];
      }
      groupedData[priority].push(card);
    });
    return groupedData;
  }

  return (
    <>
      <div>
        <div>
          <h1>Add the cards</h1>
          <div>
            <label htmlFor="groupingSelect">Group By:</label>
            <select
              id="groupingSelect"
              value={groupingOption}
              onChange={(e) => setGroupingOption(e.target.value)}
            >
              <option value="status">By Status</option>
              <option value="user">By User</option>
              <option value="priority">By Priority</option>
            </select>

            <label htmlFor="sortingSelect">Sort By:</label>
            <select
              id="sortingSelect"
              value={sortingOption}
              onChange={(e) => setSortingOption(e.target.value)}
            >
              <option value="priority">By Priority</option>
              <option value="title">By Title</option>
            </select>
          </div>
          <div>
            {Object.entries(groupedAndSortedData).map(([groupKey, cards]) => (
              <div key={groupKey}>
                <h2>{groupKey}</h2>
                {Array.isArray(cards) &&
                  cards.map((card) => <Card key={card.id} card={card} />)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;// ITS A PERFECT CODE



// function App() {
//   const [data, setData] = useState(null);
//   const [groupedAndSortedData, setGroupedAndSortedData] = useState([]);
//   const [groupingOption, setGroupingOption] = useState('status');
//   const [sortingOption, setSortingOption] = useState('priority');

//   // Load grouping and sorting options from localStorage on component mount
//   useEffect(() => {
//     const savedGroupingOption = localStorage.getItem('groupingOption');
//     const savedSortingOption = localStorage.getItem('sortingOption');

//     if (savedGroupingOption) {
//       setGroupingOption(savedGroupingOption);
//     }

//     if (savedSortingOption) {
//       setSortingOption(savedSortingOption);
//     }
//   }, []);

//   useEffect(() => {
//     if (data && data.tickets && data.users) {
//       const cardsArray = data.tickets;
//       const userArray = data.users;

//       const newArray = cardsArray.map((card) => {
//         const user = userArray.find((user) => user.id === card.userId);
//         const tagsString = card.tag.join(', ');

//         return {
//           ...card,
//           userId: card.userId,
//           name: user ? user.name : '',
//           available: user ? user.available : false,
//           tag: tagsString,
//         };
//       });

//       // Apply sorting
//       let sortedData = [...newArray];
//       switch (sortingOption) {
//         case 'priority':
//           sortedData = sortedData.sort((a, b) => a.priority - b.priority);
//           break;
//         case 'title':
//           sortedData = sortedData.sort((a, b) => a.title.localeCompare(b.title));
//           break;
//         default:
//           break;
//       }

//       // Apply grouping
//       let groupedData = sortedData;
//       switch (groupingOption) {
//         case 'status':
//           groupedData = groupDataByStatus(sortedData);
//           break;
//         case 'user':
//           groupedData = groupDataByUser(sortedData);
//           break;
//         case 'priority':
//           groupedData = groupDataByPriority(sortedData);
//           break;
//         default:
//           break;
//       }

//       setGroupedAndSortedData(groupedData);

//       // Save grouping and sorting options to localStorage
//       localStorage.setItem('groupingOption', groupingOption);
//       localStorage.setItem('sortingOption', sortingOption);
//     }
//   }, [data, groupingOption, sortingOption]);

//   function groupDataByStatus(cardsArray) {
//     // Grouping logic by status
//     const groupedData = {};
//     cardsArray.forEach((card) => {
//       const { status } = card;
//       if (!groupedData[status]) {
//         groupedData[status] = [];
//       }
//       groupedData[status].push(card);
//     });
//     return groupedData;
//   }

//   function groupDataByUser(cardsArray) {
//     // Grouping logic by user
//     const groupedData = {};
//     cardsArray.forEach((card) => {
//       const { userId } = card;
//       if (!groupedData[userId]) {
//         groupedData[userId] = [];
//       }
//       groupedData[userId].push(card);
//     });
//     return groupedData;
//   }

//   function groupDataByPriority(cardsArray) {
//     // Grouping logic by priority
//     const groupedData = {};
//     cardsArray.forEach((card) => {
//       const { priority } = card;
//       if (!groupedData[priority]) {
//         groupedData[priority] = [];
//       }
//       groupedData[priority].push(card);
//     });
//     return groupedData;
//   }

//   return (
//     <>
//       <div>
//         <div>
//           <h1>Add the cards</h1>
//           <div>
//             <label htmlFor="groupingSelect">Group By:</label>
//             <select
//               id="groupingSelect"
//               value={groupingOption}
//               onChange={(e) => setGroupingOption(e.target.value)}
//             >
//               <option value="status">By Status</option>
//               <option value="user">By User</option>
//               <option value="priority">By Priority</option>
//             </select>

//             <label htmlFor="sortingSelect">Sort By:</label>
//             <select
//               id="sortingSelect"
//               value={sortingOption}
//               onChange={(e) => setSortingOption(e.target.value)}
//             >
//               <option value="priority">By Priority</option>
//               <option value="title">By Title</option>
//             </select>
//           </div>
//           <div>
//             {Object.entries(groupedAndSortedData).map(([groupKey, cards]) => (
//               <div key={groupKey}>
//                 <h2>{groupKey}</h2>
//                 {Array.isArray(cards) &&
//                   cards.map((card) => <Card key={card.id} card={card} />)}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

