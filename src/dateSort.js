import { format, isThisWeek, parseISO, isTomorrow} from 'date-fns';
import { todoList} from './todoTasks';

// function

function loadToday(){
    // let today = new Date();
    // let date = isDate('2021-08-26');
    let today = format(new Date(), 'MM/dd/yyyy');
    let tomorrow = new Date(today);
    tomorrow = format(tomorrow.setDate(tomorrow.getDate() + 1), 'MM/dd/yyyy')

    let thisWeekBool = isThisWeek(new Date(2021, 9, 1));

    // todoList.forEach(todo => {
    //     if(today === todo.date){
    //         console.log('todaye!');
    //     } 
    //     else if(tomorrow === todo.date){
    //         console.log("tomorrow");
    //     }
    //     console.log(tomorrow);
    // })
    // console.log(todoList.date)

    console.log(thisWeekBool);
}

export default loadToday;