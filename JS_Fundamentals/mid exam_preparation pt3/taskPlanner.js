function solve(arr) {
    let taskPlanner = arr.shift().split(' ').map(Number);
    let end = arr.pop();

    let actions = {
        'Complete' : function (paramsArr, tasksArr) {
            let i = Number(paramsArr[0]);
            if (i >= 0 && i < tasksArr.length) {
                tasksArr[i] = 0;
            }
            return tasksArr;
        },
        'Change' : function (paramsArr, tasksArr) {
            let i = Number(paramsArr[0]);
            let t = Number(paramsArr[1]);
            if (i >= 0 && i < tasksArr.length) {
                tasksArr[i] = t;
            }
            return tasksArr;
        },
        'Drop' : function (paramsArr, tasksArr) {
            let i = Number(paramsArr[0]);
            if (i >= 0 && i < tasksArr.length) {
                tasksArr[i] = -1;
            }
            return tasksArr;
        },
        'Count' : {
            'Completed' : (tasksArr) => {
                tasksArr = tasksArr.filter(a => a === 0);
                console.log(tasksArr.length);
            },
            'Incompleted' : (tasksArr) => {
                tasksArr = tasksArr.filter(a => a > 0);
                console.log(tasksArr.length);
            },
            'Dropped' : (tasksArr) => {
                tasksArr = tasksArr.filter(a => a === -1);
                console.log(tasksArr.length);
            }
        }
    
    }

    arr.map(a => {
        let [action, ...params] = a.split(' ');
        
        if (action === 'Count') {
            actions[action][params[0]](taskPlanner);
        } else {
            actions[action](params, taskPlanner);
        }
    });

    console.log(taskPlanner = taskPlanner.filter(a => a > 0).join(' '));
        
}

solve([
    '1 -1 2 3 4 5',
    'Complete 4',
    'Change 0 4',
    'Drop 3',
    'Count Dropped',
    'End'
]);