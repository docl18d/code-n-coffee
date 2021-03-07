// import React, { Component } from "react";
// import Like from "../pages/Like";

// export default class User extends Component {
//   state = { userDetails: "" };

//   componentDidMount() {
//     axios.get(`https://urlforapi.com`)
//     .then(({ data }) => {
//       this.setState({
//         userDetails: data
//       });
//     });
//   }

//   render() {
//     const { userDetails } = this.state;
//     return (
//       <div>
//         {userDetails
//           ? userDetails.map(info => {
//               return (
//                 <Link to="./like">
//                   <div key={info.id}>
//                     <p>{info.name}</p>
//                   </div>
//                   <div>
//                     <p>{info.age}</p>
//                   </div>
//                   <div>
//                     <p>{info.description}</p>
//                   </div>
//                 </Link>
//               );
//             })
//           : null}
//       </div>
//     );
//   }
// }


// mongodb atlas( mongo.exe mongodb://$[hostlist]/$[Fido]?authSource=$[authSource] --username $[docl18d])
