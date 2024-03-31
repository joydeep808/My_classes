// import React from 'react';
// import { AxiosResponse } from 'axios';

// import { TeacherData, ApiResponse } from './responseType';


// interface Props {
//   response: AxiosResponse<{ data: TeacherData }>;
// }

// const TeacherCard: React.FC<Props> = ({ response }) => {
//   return (
//     <div>
//       {response.data.map((teacherData, index) => (
//         <div key={index}>
//           <h2>{teacherData.description}</h2>
//           <p>Locality: {teacherData.locality}</p>
//           <p>Complete Address: {teacherData.completeAddress}</p>
//           <p>Status: {teacherData.status}</p>
//           <h3>Teacher Information:</h3>
//           <p>Name: {teacherData.TeacherInfo.name}</p>
//           <p>Email: {teacherData.TeacherInfo.email}</p>
//           <p>Phone Number: {teacherData.TeacherInfo.phoneNumber}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TeacherCard;
