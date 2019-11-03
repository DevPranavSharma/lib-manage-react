import React, {Component} from 'react';
import RecentBooksList from './RecentBooksList';
class MainPage extends Component{
    render()
    {
        return(
            <React.Fragment>
            <div className="container-fluid">
            <h4>List of recently added books</h4>
            </div>
            <div className="container-fluid">
                <RecentBooksList/>
            </div>
            </React.Fragment>
        )
    }
}
export default MainPage;