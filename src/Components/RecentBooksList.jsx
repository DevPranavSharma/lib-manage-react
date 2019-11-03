import React,{Component} from 'react';
class RecentBooksList extends Component{
   
    state={
        bookList:[
            { name: "B1", author: "A1"},
            { name: "B2", author: "A2"},
            { name: "B3", author: "A3"},
            { name: "B4", author: "A4"},
        ]
    }



    render(){
        return (
            <table className="table table-dark table-hover">
  <thead>
    <tr>
      <th scope="col">Book ID</th>
      <th scope="col">Book Name</th>
    </tr>
  </thead>
  <tbody>
    {this.state.bookList.map(book =>
        <tr>
            <td>{book.name}</td>
            <td>{book.author}</td>
        </tr>
    )}
  </tbody>
</table>
        )
    }
}
export default RecentBooksList;

