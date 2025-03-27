// 'use client';
// import React, { useState, useEffect } from 'react';
// import { Button, Tabs, Tab, Card, CardBody } from '@nextui-org/react';
// import EventForm from '../dashboard/events/EventCreateForm';
// import ArticleForm from '../components/form/articleForm';
// import LoginForm from '../components/form/loginForm';

// export default function About() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   useEffect(() => {
//     // Example to check if logged in
//     const loggedIn = localStorage.getItem('userLoggedIn');
//     if (loggedIn === 'true') {
//       setLoggedIn(true);
//     }
//   }, []);

//   const tabs = [
//     {
//       id: 'New Calendar Event',
//       content: <EventForm />,
//     },
//     {
//       id: 'New Article',
//       content: <ArticleForm />,
//     },
//   ];
//   return (
//     <div style={{ padding: '20px' }}>
//       <div>
//           <Tabs color="primary" aria-label="Dynamic tabs" items={tabs}>
//             {(item) => (
//               <Tab title={item.id}>
//                 <Card>
//                   <CardBody>{item.content}</CardBody>
//                 </Card>
//               </Tab>
//             )}
//           </Tabs>
//       </div>
//     </div>
//   );
// }
