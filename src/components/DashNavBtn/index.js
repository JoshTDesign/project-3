// import React from "react";
// import Container from "@material-ui/core/Container";
// import Box from "@material-ui/core/box";
// import Button from "@material-ui/core/Button";
// import { Link, useParams } from "react-router-dom";

// export default function DashNavBtn(props) {
//   const {id} = useParams()
//   console.log('id: ',id);


//   return (
//     <div>
//       <Container maxWidth="sm">
//         <Box
//           display="flex"
//           style={{ justifyContent: "space-between", padding: 10 }}
//         >
//           <Button variant="outlined" color="primary" onClick={() => props.handlePageChange("Trips")}>
//             {/* TODO: get id in path */}
//             <Link to={`/Trip/:id/Dashboard/Agenda`}>Agenda</Link>
//           </Button>
//           <Button variant="outlined" color="primary" onClick={() => props.handlePageChange("Discover")}>
//             <Link to={`/Trip/:id/Dashboard/Discover/`}>Discover</Link>
//           </Button>
//           <Button variant="outlined" color="primary" onClick={() => props.handlePageChange("Expenses")}>
//             <Link to={`/Trip/:id/Dashboard/Expenses/`}>Expenses</Link>
//           </Button>
//         </Box>
//       </Container>
//     </div>
//   );
// }
