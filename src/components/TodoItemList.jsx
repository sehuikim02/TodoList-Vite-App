import { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

// app.jsx에서 전달한 배열들로 펼쳐서 TodoItem.jsx에 전달
class TodoItemList extends Component {
    /*
        true 리턴 (myTodos 변수에 변동이 있는 경우) 이면 render 함수 다시 호출
        false 리턴 (myTodos 변수에 변동이 없는 경우) 이면, render 함수 다시 호출 X (랜더링 생략)
    */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.myTodos !== nextProps.myTodos;
    }

    render() {
        const { myTodos, myToggle, myRemove } = this.props;
        /* 
            const { id, text, checked } = todos;     
        */
        const todoList = myTodos.map(({ id, text, checked }) => (
            <TodoItem id={id}
                text={text}
                checked={checked}
                onToggle={myToggle}
                onRemove={myRemove}
                key={id}
            />
        ));
        return (
            <div>
                {todoList}

            </div>
        );
    }
}

TodoItemList.propTypes = {
    myTodos: PropTypes.array,
    myToggle: PropTypes.func,
    myRemove: PropTypes.func
};
export default TodoItemList;