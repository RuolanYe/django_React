import React, { Component, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../reducers/leadsSlice';
import {useSelector, useDispatch} from 'react-redux'
// import {useEffect} from 'react'


function Leads() {
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const { leads } = useSelector((state) => state.leadsSlice)
    // console.log(leads)

    useEffect(() => {

        dispatch(getLeads())
    
      }, [dispatch])
    
    return (
      <Fragment>
        <h2>Leads</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button
                    onClick={() => dispatch(deleteLead(lead.id))}
                    className="btn btn-danger btn-sm"
                  >
                    {' '}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
}

export default Leads


// export class Leads extends Component {
// //   static propTypes = {
// //     leads: PropTypes.array.isRequired,
// //     getLeads: PropTypes.func.isRequired,
// //     // deleteLead: PropTypes.func.isRequired,
// //   };

// //   componentDidMount() {
// //     this.props.getLeads();
// //   }

//   render() {
//     return (
//       <Fragment>
//         <h2>Leads</h2>
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Message</th>
//               <th />
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.leads.map((lead) => (
//               <tr key={lead.id}>
//                 <td>{lead.id}</td>
//                 <td>{lead.name}</td>
//                 <td>{lead.email}</td>
//                 <td>{lead.message}</td>
//                 <td>
//                   {/* <button
//                     onClick={this.props.deleteLead.bind(this, lead.id)}
//                     className="btn btn-danger btn-sm"
//                   >
//                     {' '}
//                     Delete
//                   </button> */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Fragment>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   leads: state.leads.leads,
// });

// export default connect(mapStateToProps, { getLeads })(Leads);