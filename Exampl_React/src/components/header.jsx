import React, {Component} from "react";



class Header extends Component {
    constructor(props) {
        super(props);
        this.lists = [
            {id: 1, name: "Shambel"},
            {id: 2, name: "Simelo"},
            {id: 3, name: "Dechu"}
        ];
    }
    // when it be class component we must have render method and we use constructor to define state and props (showing data from array)
    render(){
        return(
            <header>
                <nav>
                    <ul>
                       {
                        this.lists.map((list)=> <li key={list.id}>{list.name}</li>)
                       }
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;